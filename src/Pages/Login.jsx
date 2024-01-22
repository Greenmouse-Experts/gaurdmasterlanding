import React, { useState } from "react";
import logo from "../assets/wlogo.png";
import { Link } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";
import "../Stylesheet/login.css";
import log from "../assets/logo.png"
import { loginUser } from "../services/api/authApi";
import { toast } from "react-toastify";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword); // Toggle the showPassword state
  };
  const [isBusy, setIsBusy] = useState(false)
  const [userDetail, setUserDetail] = useState({
    email: "",
    password: "",
  });
  const handleChange = (name, value) => {
    setUserDetail({ ...userDetail, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault()
    setIsBusy(true)
    const payload = {
      email: userDetail.email,
      password: userDetail.password
    }
    await loginUser(payload)
    .then((data) => {
      console.log(data);
      toast.success('Login Successful')
      setIsBusy(false)
      window.location.replace(`https://gaurdmasterstudent.netlify.app/auth/${data.accessToken}`)
    })
    .catch((error) => {
      console.log(error);
      toast.error(error?.response?.data?.message)
      setIsBusy(false)
    })
  }

  return (
    <div className="main_login">
      <div className="side1">
        <div>
          <img src={logo} alt="" />
          <div>
            <h3>Welcome Back!</h3>
            <p>
              Your security is our priority. Log in now to access your account
              and stay updated on all safety measures and reports.
            </p>
          </div>

          <Link to='/register'>SIGN UP</Link>
        </div>
      </div>
      <div className="side2">
        <div className="don">
          <p>Don’t have an account?</p>
          <Link to='/register'>Sign Up</Link>
        </div>
        
        <div className="login">
        <div className="login_logo">
            <img src={log} alt="" />
            <h3>Welcome Back!</h3>
        </div>
          <h2>Log in</h2>
          {/* <div className="go">
            <span>
              <img src={go} alt="" />
            </span>

            <p>Continue with Google</p>
          </div> */}

          
          <form onSubmit={handleSubmit} className="login_form">
            {/* <span className="or">or</span> */}

            <div className="input">
              <label htmlFor="email">Email</label>
              <div>
                <input type="text" placeholder="Enter Email"  value={userDetail.email}
                    onChange={(e) => handleChange("email", e.target.value)}/>
              </div>
            </div>
            <div className="input">
              <label htmlFor="password">Password</label>
              <div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter Password"
                  value={userDetail.password}
                  onChange={(e) => handleChange("password", e.target.value)}
                />
                <span className="toggle-password" onClick={togglePassword}>
                  <span className="eye-icon">
                    <AiFillEye />
                  </span>
                </span>
              </div>
            </div>

            <Link>Forgot Password?</Link>
            <button>{isBusy? "Logging In..." : "Login"}</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
