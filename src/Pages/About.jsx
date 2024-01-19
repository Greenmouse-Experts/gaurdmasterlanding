import React from "react";
import "../Stylesheet/about.css";
import { Header } from "../Components/Header";
import about from "../assets/about.png";
import dis from "../assets/diss.png";
import div from "../assets/div.svg";
import lead from "../assets/lead.svg";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import { RiArrowRightSLine } from "react-icons/ri";



const About = () => {
  return (
    <div className="about_main">
      <Header image={about} title="About Us" body="About" />
      <div className="discover ">
        <div className="dis_img">
          <img src={dis} alt="" />
        </div>
        <div className="dis_text about_text">
          <span>About Us</span>
          <h2 className="h2">Discover the Essence of Guardmaster Institute</h2>
          <p>
            Welcome to Guardmaster Institute, a distinguished leader in security
            education and training. Our institute is dedicated to empowering
            individuals with the knowledge and skills needed to excel in the
            dynamic field of security. With cutting-edge curriculum, experienced
            instructors, and a commitment to excellence, we pave the way for a
            safer and more secure future.
          </p>
          <Link className="aboutus" to="/aboutus">Read More <RiArrowRightSLine /></Link>
          <div className="lead">
            <div>
              <span>
                <img src={div} alt="" />
              </span>

              <p>Diversity</p>
            </div>
            <div>
              <span>
                <img src={lead} alt="" />
              </span>

              <p>Leadership</p>
            </div>
          </div>
        </div>
      </div>
      <div className="ratio">
        <div>
          <p>Student Teacher Ratio</p>
          <h2>15:1</h2>
        </div>
        <div>
          <p>Job Placement</p>
          <h2>95%</h2>
        </div>
        <div>
          <p>Graduate Students</p>
          <h2>964k</h2>
        </div>
        <div>
          <p>Degree Transfer</p>
          <h2>100k</h2>
        </div>
      </div>

      <div className="choose">
        <span>Why Choose Us</span>
        <h2 className="h2">Our Ethos</h2>
        <div className="choose_div">
          <div>
            <h3>Our Mission</h3>
            <p>To foster excellence in Corporate Security, Loss Prevention, and Asset Protection professional education. Our mission is to offer thorough and engaging educational content, materials, and resources and empower individuals to excel as proficient professionals in the ever-evolving fields of Corporate Security, Loss Prevention, and Asset Protection.</p>
          </div>
          <div>
            <h3>Our Vision</h3>
            <p>To be a leading educational institute acknowledged for elevating the benchmarks of corporate security education. We envision being a center of excellence, moulding industry leaders, and making impactful contributions to businesses' security, safety and resilience through innovative and relevant educational programs.</p>
          </div>
        </div>
      </div>
      <div className="brow">
        <div className="brow_text">
          <h2 className="h2">Browse Through Our <span>Offered Courses</span></h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacinia leo eget turpis pretium elementum. Vivamus ante purus.</p>
        </div>
        <Link to="/course">View Courses</Link>
      </div>
      <Footer/>
    </div>
  );
};

export default About;
