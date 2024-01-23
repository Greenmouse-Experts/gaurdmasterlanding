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
          <p className="">
            Welcome to Guardmaster Institute, a distinguished leader in security
            education and training. Our institute is dedicated to empowering
            individuals with the knowledge and skills needed to excel in the
            dynamic field of security. With cutting-edge curriculum, experienced
            instructors, and a commitment to excellence, we pave the way for a
            safer and more secure future.
          </p>
          {/* <Link className="aboutus" to="/aboutus">Read More <RiArrowRightSLine /></Link> */}
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
      <div className="flex justify-center mb-16">
      <p className="mont lg:w-[88%] text-[16px]">
        Guardmaster Institute of Corporate Security Management™ stands at the
        forefront as a premier provider of accredited further and higher
        education training in the fields of Corporate Security, Loss Prevention,
        Asset Protection, and Business Continuity. Our commitment revolves
        around cultivating excellence in the corporate security domain by
        delivering comprehensive and challenging educational resources.
        <br />
        <br />
        <br />
        Specializing in both online and in-class courses, we tailor our
        offerings to cater to the evolving needs of our learners. Whether it's
        the foundational elements of corporate security or the certification of
        security professionals, Guardmaster Institute ensures a dynamic and
        relevant educational experience. Our faculty comprises highly
        experienced educators with qualifications ranging from bachelor's
        degrees to Ph.D. levels, guaranteeing a rich and insightful learning
        environment.
        <br />
        <br />
        <br />
        Founded in 2023, Guardmaster Institute was established to address the
        mandatory training requirements within the corporate security sector.
        Over time, we've broadened our sector focus and refined our delivery
        methodologies to emerge as the preeminent provider of accredited
        corporate security training programs in Canada.
        <br />
        <br />
        <br />
        Distinguished as a specialized training institution, our primary focus
        is on Professional Development Programs in Corporate Security
        Management. These programs are crafted for individuals with existing
        experience in corporate security, aiming to elevate and update their
        skills and qualifications. Our commitment to excellence, coupled with a
        team of subject matter experts and a dedicated administration team,
        ensures a seamless and enriching educational journey for our learners.
        <br />
        <br />
        <br />
        Our faculty maintains accreditations and professional certifications
        from the American Society of Industrial Security (ASIS); International
        Foundation For Protection Officers (IFPO); Association of Chartered Loss
        Prevention Specialists of Canada (ChLPS Canada); Association of
        Certified Fraud Examiners (ACFE); Association of Certified Forensic
        Investigators of Canada (ACFI); Loss Prevention Foundation (LPF);
        International Information Systems Security Certification Consortium
        (ISC2); and International Security Organization (ISO-SEC) Switzerland.
        <br />
        <br />
        <br />
        Guardmaster Institute of Corporate Security Management™ is an accredited
        CPD Provider by TheCPD Group, UK. We are also licensed by the
        Governments of Ontario and Alberta in Canada as Trainer for their
        respective Provincial Security Guard Licensing programs.
      </p>
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
