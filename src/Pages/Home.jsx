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
import { HashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.production";
import HeroSlide from "../Components/Homepage/HeroSlide";



const Home = () => {
  const path = [
    {
      icon: 'https://res.cloudinary.com/greenmouse-tech/image/upload/v1706265403/rsh/Group_48097471_thxmie.png',
      head: "Mini-MBA Programs",
      body: "Providing participants with a comprehensive overview of essential business concepts and management skills",
      link: "/course#courses",
    },
    {
      icon: 'https://res.cloudinary.com/greenmouse-tech/image/upload/v1706265403/rsh/Group_48097470_uh23kz.png' ,
      head: "Professional Proficiency Diploma (PPD) Programs",
      body: "Providing participants with a comprehensive overview of essential business concepts and management skills",
      link: "/course#diploma",
    },
    {
      icon: 'https://res.cloudinary.com/greenmouse-tech/image/upload/v1706265403/rsh/Group_48097469_cxms08.png',
      head: "Professional Proficiency Certificate (PPC) Programs",
      body: "Providing participants with a comprehensive overview of essential business concepts and management skills",
      link: "/course#ppcp",
    },
    {
      icon: 'https://res.cloudinary.com/greenmouse-tech/image/upload/v1706265406/rsh/Group_48097468_ntudes.png',
      head: "Provincial Licensing And Professional Certification Programs",
      body: "Providing participants with a comprehensive overview of essential business concepts and management skills",
      link: "/course#plpcp",
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
      <HeroSlide/>
      <div className="path">
        <h2>Discover your path to success</h2>
        <div className="path_grid mt-6 lg:mt-12">
          {path.map((item) => (
            <div className="path_box relative">
              <div className="absolute w-full pr-2 lg:pr-5 -top-8 flex justify-center">
              <img src={item.icon} alt="icons" className="!w-16" />
              </div>
             <h3 className="font-medium text-center mt-16">{item.head}</h3>
              {/* <p>{item.body}</p> */}
              <div className="path_link">
                <HashLink to={item.link}>
                  <HiArrowRight />
                </HashLink>
              </div>
            </div>
          ))}
        </div>
        <div className="lg:flex justify-between items-center pt-12 lg:pt-24">
          <div className="lg:w-3/12">
            <img src={'https://res.cloudinary.com/greenmouse-tech/image/upload/v1706191235/GuardMaster/Blob_Save_pkqbfc.png'} alt="img" className="w-full" />
          </div>
          <div className="lg:w-8/12 mt-10 lg:mt-0">
            <span className="!syne text-[#003DA5] font-semibold">About Us</span>
            <h2 className="h2 mt-3">
              Discover the Essence of Guardmaster Institute
            </h2>
            <p className="mt-3 lg:mt-8 text-lg !mont leading-[33px]">
            Guardmaster Institute of Corporate Security Management™ is an accredited CPD Provider by TheCPD Group, UK. We are also licensed by the Governments of Ontario and Alberta in Canada as Trainer for their respective Provincial Security Guard Licensing programs.
            </p>
            <Link to="about" className="mt-6 lg:mt-12 flex gap-x-2 items-center !mont text-[#003DA5] font-semibold">
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
          </div>
        ))}
      </div>
      <Faq/>

      <div className="we">
        <h2 className="h2">
          We're <span>Guardmaster Institute </span> <br /> & We're Different
        </h2>
        <div className="flex">
        <Link to="/course" className="bg-[#FFD347] mont flex items-center p-4 lg:p-5 text-xl text-black font-medium gap-x-3">
            View Our Programs <RiArrowRightLine />
          </Link>
        </div>
      </div>

     
      <Sliders/>
      <Footer/>
    </div>
  );
};

export default Home;
