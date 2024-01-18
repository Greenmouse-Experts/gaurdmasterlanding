import React, { useState } from "react";
import logo from "../assets/wlogo.png";
import go from "../assets/go.svg";
import { Link } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";
import "../Stylesheet/login.css";
import log from "../assets/logo.png";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword); // Toggle the showPassword state
  };

  return (
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
          <Link>Sign In</Link>
        </div>
        <div className="login">
          <div className="login_logo">
            <img src={log} alt="" />
            <h3>Hello!</h3>
          </div>
          <h2>Sign Up</h2>
          <div className="go">
            <span>
              <img src={go} alt="" />
            </span>

            <p>Continue with Google</p>
          </div>

          <form action="" className="login_form">
            <span className="or">or</span>

            <div className="double">
              <div className="input">
                <label htmlFor="firstName">First Name</label>
                <div>
                  <input type="text" placeholder="Enter first name" />
                </div>
              </div>
              <div className="input">
                <label htmlFor="lastName">Last Name</label>
                <div>
                  <input type="text" placeholder="Enter last name" />
                </div>
              </div>
            </div>

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
            <div className="input">
              <label htmlFor="password">Comfirm Password</label>
              <div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Comfirm Password"
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

export default Register;
