import React, { useState } from "react";
import logo from "../assets/wlogo.png";
import go from "../assets/go.svg";
import { Link } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";
import "../Stylesheet/login.css";
import log from "../assets/logo.png"

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword); // Toggle the showPassword state
  };
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
          <div className="go">
            <span>
              <img src={go} alt="" />
            </span>

            <p>Continue with Google</p>
          </div>

          
          <form action="" className="login_form">
            <span className="or">or</span>

            <div className="input">
              <label htmlFor="email">Email</label>
              <div>
                <input type="text" placeholder="Enter Email" />
              </div>
            </div>
            <div className="input">
              <label htmlFor="password">Password</label>
              <div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter Password"
                />
                <span className="toggle-password" onClick={togglePassword}>
                  <span className="eye-icon">
                    <AiFillEye />
                  </span>
                </span>
              </div>
            </div>

            <Link>Forgot Password?</Link>
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
