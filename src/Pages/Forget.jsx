import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Stylesheet/login.css";
import { forgetPassword, loginUser } from "../services/api/authApi";
import { toast } from "react-toastify";

const ForgetPassword = () => {
  const [isBusy, setIsBusy] = useState(false)
  const [userDetail, setUserDetail] = useState({
    email: "",
  });
  const handleChange = (name, value) => {
    setUserDetail({ ...userDetail, [name]: value });
  };
  const navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault()
    setIsBusy(true)
    const payload = {
      email: userDetail.email,
    }
    await forgetPassword(payload)
    .then((data) => {
      toast.success(data.message)
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
      <div className="side1">
        <div>
          <img src={'https://res.cloudinary.com/greenmouse-tech/image/upload/v1706278834/rsh/logo2-removebg-preview_fcvxwc.png'} alt="logo" className="cursor-pointer" onClick={() => navigate('/')}/>
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
          <p>Don&apos;t have an account?</p>
          <Link to='/register'>Sign Up</Link>
        </div>
        
        <div className="login">
        <div className="login_logo">
            <img src={'https://res.cloudinary.com/greenmouse-tech/image/upload/v1706009737/GuardMaster/Guardmaster_transparent1_1_1_wzdsac.png'} alt="logo" onClick={() => navigate('/')} />
            <h3>Welcome Back!</h3>
        </div>
          <h2>Forgot Password?</h2>
          <p className='mt-4'>Enter the email linked to your account</p>
          {/* <div className="go">
            <span>
              <img src={go} alt="" />
            </span>

            <p>Continue with Google</p>
          </div> */}

          
          <form onSubmit={handleSubmit} className="login_form">
            <div className="input">
              <label htmlFor="email">Email</label>
              <div>
                <input type="text" placeholder="Enter Email"  value={userDetail.email}
                    onChange={(e) => handleChange("email", e.target.value)}/>
              </div>
            </div>
            <button>{isBusy? "Submitting..." : "Submit"}</button>
          </form>
          <div className="don2 flex gap-x-2">
          <p>Remembered password?</p>
          <span className="font-semibold text-blue-900" onClick={() => navigate('/login')}>Sign In</span>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ForgetPassword