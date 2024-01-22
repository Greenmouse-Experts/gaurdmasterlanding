import React, { useState } from "react";
import logo from "../assets/wlogo.png";
import go from "../assets/go.svg";
import { Link } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";
import "../Stylesheet/login.css";
import log from "../assets/logo.png";
import { registerUser } from "../services/api/authApi";
import { toast } from "react-toastify";
import RegisterSuccess from "../Components/Register";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isBusy, setIsBusy] = useState(false)
  const [pop, showPop] = useState(false)

  const togglePassword = () => {
    setShowPassword(!showPassword); // Toggle the showPassword state
  };
  const [userDetail, setUserDetail] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    confirmPassword: "",
  });
  const handleChange = (name, value) => {
    setUserDetail({ ...userDetail, [name]: value });
  };
  const handleSubmit = async(e) => {
    e.preventDefault()
    setIsBusy(true)
    const payload = {
      firstName: userDetail.firstName,
      lastName: userDetail.lastName,
      phone: userDetail.phone,
      email: userDetail.email,
      password: userDetail.password
    }
    await registerUser(payload)
    .then((data) => {
      console.log(data);
      setIsBusy(false)
    })
    .catch((error) => {
      toast.error(error?.response?.data?.message)
      setIsBusy(false)
    })
  }

  return (
    <>
      <div className="main_login">
      <div className="side1 reg order1">
        <div>
          <img src={logo} alt="" />
          <div>
            <h3>Hello!</h3>
            <p>
              Welcome to GMG Security Guard & Services – Where Your Safety is
              Our Priority! <br />
              <br />
              Sign up today for peace of mind and top-tier security services.
            </p>
          </div>

          <Link to="/login"> SIGN IN</Link>
        </div>
      </div>
      <div className="side2">
        <div className="don">
          <p>Already have an account?</p>
          <Link to="/login">Sign In</Link>
        </div>
        <div className="login">
          <div className="login_logo">
            <img src={log} alt="" />
            <h3>Hello!</h3>
          </div>
          <h2 onClick={() => showPop(true)}>Sign Up</h2>
          {/* <div className="go">
            <span>
              <img src={go} alt="" />
            </span>

            <p>Continue with Google</p>
          </div> */}

          <form onSubmit={handleSubmit} className="login_form">
            {/* <span className="or">or</span> */}

            <div className="double">
              <div className="input">
                <label htmlFor="firstName">First Name</label>
                <div>
                  <input
                    type="text"
                    placeholder="Enter first name"
                    value={userDetail.firstName}
                    onChange={(e) => handleChange("firstName", e.target.value)}
                  />
                </div>
              </div>
              <div className="input">
                <label htmlFor="lastName">Last Name</label>
                <div>
                  <input type="text" placeholder="Enter last name" value={userDetail.lastName}
                    onChange={(e) => handleChange("lastName", e.target.value)}/>
                </div>
              </div>
            </div>

            <div className="input">
              <label htmlFor="email">Email</label>
              <div>
                <input type="email" placeholder="Enter Email" value={userDetail.email}
                    onChange={(e) => handleChange("email", e.target.value)}/>
              </div>
            </div>
            <div className="input">
              <label htmlFor="phone">Phone Number</label>
              <div>
                <input type="tel" placeholder="Enter Phone Number" value={userDetail.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}/>
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
            <div className="input">
              <label htmlFor="password">Comfirm Password</label>
              <div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Comfirm Password"
                  value={userDetail.confirmPassword}
                    onChange={(e) => handleChange("confirmPassword", e.target.value)}
                />
                <span className="toggle-password" onClick={togglePassword}>
                  <span className="eye-icon">
                    <AiFillEye />
                  </span>
                </span>
              </div>
            </div>

            <p className="log_p">
              I have read and agreed to GMG Security Guard & Services{" "}
              <span>Privacy Policy </span> and <span>Terms of Use</span>
            </p>

            <button>{isBusy? "Siging Up ..." : "Sign Up"}</button>
          </form>
        </div>
      </div>
    </div>
    <RegisterSuccess pop={pop} showPop={showPop}/>
    </>
  );
};

export default Register;
