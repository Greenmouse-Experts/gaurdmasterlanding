import React from 'react'
import { Header } from '../Components/Header';
import contact from "../assets/contact.png"
import info from "../assets/info.png"
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import {AiFillInstagram, AiOutlineTwitter} from "react-icons/ai"
import rap from "../assets/rap.png"
import { Link } from 'react-router-dom';
import Footer from "../Components/Footer";

const Contact = () => {
  return (
    <div className='about_main'>
        <Header image={contact} title="Contact Us" body="Contact"/>
        <div className="contact">

        <form className="contact_form" action="submit">
        <h2 className="h2">
                Get in touch
              </h2>
              <p>Fill in the placeholders below with the appropriate information to keep in touch with us. </p>
          <div className="double">
            <div className="input">
              <label htmlFor="firstName">First Name</label>
              <input required type="text" name="firstName" id="" placeholder="First name"/>
            </div>
            <div className="input">
              <label htmlFor="lasttName">Last Name</label>
              <input required  type="text" name="lastName" id="" placeholder="Last name"/>
            </div>
          </div>
          <div className="double">
            <div className="input">
              <label htmlFor="email">Email</label>
              <input required    type="email" name="email" id="" placeholder="Email address"/>
            </div>
            <div className="input">
              <label htmlFor="phone">Phone Number</label>
              <input required  type="number" name="lphone" id="" placeholder="Enter Phone"/>
            </div>
          </div>
          
          <div className="input">
            <label htmlFor="message">Message</label>
            <textarea required  name="message" id="" cols="30" rows="10" placeholder='Your message here'></textarea>
          </div>

            <div className="rap">
                <div>
                    <input type="checkbox" name="robot" placeholder="I'm not a robot" id="" />
                    <label htmlFor="robot">I'm not a robot</label>
                </div>
                <img src={rap} alt="" />
            </div>
          <button type="submit">Send Message</button>
        </form>


        <div className="contact_text">
            <div className="cont">
              <h2>Contact information</h2>
              <p>Reach us via the following links and information provided below.</p>
            </div>
            <div className="conti">
              <h2>Address</h2>
              <p>www.guardmasterinstitute.ca</p>
            </div>
            <div className="conti">
              <h2>Phone </h2>
              <p>+1 905 452 2470</p>
            </div>
            <div className="conti">
              <h2>Email</h2>
              <p>info@guardmasterinstitute.ca</p>
            </div>
            <div className="social">
                <Link to="/" target="_blank">
                  <FaFacebookF />
                </Link>
                <Link href="/">
                  <AiFillInstagram />
                </Link>
                <Link href="/">
                  <AiOutlineTwitter />
                </Link>
                <Link href="/">
                  <FaLinkedin/>
                </Link>
            </div>
          </div>

        </div>
        <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.11297545373!2d3.5181865744363807!3d6.63288862188363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103beec0810ad52b%3A0x4f0d71c6aafac7e0!2s2%20Olabisi%20Cl%2C%20Ikorodu%20104101%2C%20Ikorodu%2C%20Lagos!5e0!3m2!1sen!2sng!4v1695945224871!5m2!1sen!2sng" width="100%" height="100vh" style={{ border: "0", height: "60vh" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="map"></iframe>
    
        </div>
        <Footer/>
    </div>
  )
}

export default Contact