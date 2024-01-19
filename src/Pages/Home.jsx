import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowRightLine} from "react-icons/ri";
import "../Stylesheet/home.css";
import { HiArrowRight } from "react-icons/hi";
import dis from "../assets/dis.png";
import CustomCarousel from "../Components/CustomCarousel";
import icon1 from "../assets/svg6.svg";
import icon2 from "../assets/svg7.svg"
import icon3 from "../assets/svg4.svg"
import icon4 from "../assets/svg8.svg"
import Faq from "../Components/Faq";
import Sliders from "../Components/Slider";
import svg from "../assets/svg.svg"
import svg1 from "../assets/svg1.svg"
import svg2 from "../assets/svg2.svg"
import sv from "../assets/sv.svg"
import Footer from "../Components/Footer";



const Home = () => {
  const path = [
    {
      icon: icon1 ,
      head: "Mini-MBA Programs",
      body: "Providing participants with a comprehensive overview of essential business concepts and management skills",
      link: "",
    },
    {
      icon: icon2 ,
      head: "Professional Proficiency Diploma (PPD) Programs",
      body: "Providing participants with a comprehensive overview of essential business concepts and management skills",
      link: "",
    },
    {
      icon: icon3,
      head: "Professional Proficiency Certificate (PPC) Programs",
      body: "Providing participants with a comprehensive overview of essential business concepts and management skills",
      link: "",
    },
    {
      icon:icon4,
      head: "Provincial Licensing And Professional Certification Programs",
      body: "Providing participants with a comprehensive overview of essential business concepts and management skills",
      link: "",
    },
  ];

  const numData = [
    {
      icon: sv,
      num: 1230,
      head: "Students Worldwide",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ",
    },
    {
      icon: svg,
      num: 960,
      head: "Courses & Programs",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ",
    },
    {
      icon: svg1,
      num: 2650,
      head: "Certifications Earned",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ",
    },
    {
      icon: svg2,
      num: 5950,
      head: "Tutors",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonialsData.length) % testimonialsData.length
    );
  };

  return (
    <div className="home_container">
      <div className="home">
        <div className="home_text">
          <h2>
            Your Gateway to Knowledge <br /> and Excellence!
          </h2>
          <p>
            Ignite Your Potential: Explore, Learn, and <br /> Thrive at Guardmaster
            Institute
          </p>

          <Link to="/course">
            Discover all our Courses <RiArrowRightLine />
          </Link>
        </div>
      </div>
      <div className="path">
        <h2>Discover your path to success</h2>
        <div className="path_grid">
          {path.map((item) => (
            <div className="path_box">
              <img src={item.icon} alt="" />
             <h3>{item.head}</h3>
              <p>{item.body}</p>
              <div className="path_link">
                <Link>
                  <HiArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="discover no">
          <div className="dis_img">
            <img src={dis} alt="" />
          </div>
          <div className="dis_text">
            <span>About Us</span>
            <h2 className="h2">
              Discover the Essence of Guardmaster Institute
            </h2>
            <p>
            Guardmaster Institute of Corporate Security Management™ is an accredited CPD Provider by TheCPD Group, UK. We are also licensed by the Governments of Ontario and Alberta in Canada as Trainer for their respective Provincial Security Guard Licensing programs.
            </p>
            <Link to="about">
              Learn More <RiArrowRightLine />
            </Link>
          </div>
        </div>
      </div>
      <CustomCarousel />

      <div className="num">
        {numData.map((item) => (
          <div className="num_div">
            <h2><img src={item.icon} alt="" />{item.num}</h2>
            <h3>{item.head}</h3>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
      <Faq/>

      <div className="we">
        <h2 className="h2">
          We're <span>Guardmaster Institute </span> <br /> & We're Different
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacinia
          leo eget turpis <br />
          pretium elementum. Vivamus ante purus.
        </p>
      </div>

     
      <Sliders/>
      <Footer/>
    </div>
  );
};

export default Home;
