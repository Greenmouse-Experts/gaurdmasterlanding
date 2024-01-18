import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowRightLine} from "react-icons/ri";
import "../Stylesheet/home.css";
import { HiArrowRight } from "react-icons/hi";
import dis from "../assets/dis.png";
import CustomCarousel from "../Components/CustomCarousel";
import { FaChartLine, FaGraduationCap } from "react-icons/fa6";
import Faq from "../Components/Faq";
import Sliders from "../Components/Slider";
import svg from "../assets/svg.svg"
import svg1 from "../assets/svg1.svg"
import svg2 from "../assets/svg2.svg"
import sv from "../assets/sv.svg"



const Home = () => {
  const path = [
    {
      icon:  <svg
      xmlns="http://www.w3.org/2000/svg"
      width="38"
      height="38"
      viewBox="0 0 38 38"
      fill="none"
    >
      <g clip-path="url(#clip0_79_14)">
        <path
          d="M19.4623 3.26167L37.2748 10.7825C37.4906 10.8727 37.6748 11.0247 37.8044 11.2194C37.934 11.4141 38.0032 11.6427 38.0032 11.8766C38.0032 12.1104 37.934 12.3391 37.8044 12.5338C37.6748 12.7284 37.4906 12.8804 37.2748 12.9707L30.0833 16.0043V23.75C30.0833 23.9685 30.0231 24.1827 29.9092 24.3691C29.7308 24.6454 29.5211 24.9013 29.2869 25.1322C28.8927 25.5376 28.2973 26.0506 27.4455 26.5509C25.7355 27.5611 23.0502 28.4984 19 28.4984C17.9344 28.4984 16.9638 28.4335 16.0772 28.3195C15.7721 28.2709 15.4981 28.1054 15.3131 27.8581C15.1281 27.6107 15.0467 27.301 15.0863 26.9947C15.1258 26.6884 15.2832 26.4095 15.5249 26.2173C15.7667 26.0251 16.0738 25.9346 16.3812 25.9651C17.1602 26.0648 18.031 26.1234 19 26.1234C22.6686 26.1234 24.9312 25.2795 26.239 24.5068C26.7298 24.225 27.1827 23.8783 27.5832 23.4777L27.7083 23.3431V17.005L19.4623 20.4883C19.316 20.5502 19.1588 20.582 19 20.582C18.8412 20.582 18.684 20.5502 18.5377 20.4883L9.10416 16.5047V21.5238C9.899 21.7281 10.6242 22.1429 11.2052 22.724C12.122 23.6392 12.6667 24.9565 12.6667 26.5683V33.6933C12.6658 33.8928 12.6155 34.0889 12.5201 34.2641C12.4248 34.4393 12.2874 34.5881 12.1204 34.6972C12.0131 34.765 11.9021 34.8269 11.7879 34.8824C11.5219 35.0144 11.2467 35.1271 10.9646 35.2197C9.97943 35.5333 8.95045 35.6872 7.91666 35.6757C6.88282 35.688 5.85371 35.534 4.86875 35.2197C4.58685 35.1264 4.31175 35.0137 4.04541 34.8824C3.92489 34.8251 3.8085 34.7595 3.69708 34.6861C3.53481 34.5771 3.40165 34.4301 3.3092 34.2579C3.21675 34.0857 3.16782 33.8935 3.16666 33.6981V26.5731C3.16666 24.9581 3.71133 23.6439 4.62808 22.7256C5.20891 22.1457 5.93438 21.7318 6.72916 21.527V15.5056L0.725164 12.9675C0.510952 12.8762 0.328293 12.724 0.199905 12.5298C0.0715175 12.3355 0.00306702 12.1078 0.00306702 11.875C0.00306702 11.6422 0.0715175 11.4145 0.199905 11.2202C0.328293 11.026 0.510952 10.8738 0.725164 10.7825L18.5377 3.26167C18.684 3.19983 18.8412 3.16797 19 3.16797C19.1588 3.16797 19.316 3.19983 19.4623 3.26167ZM19 18.107L33.7598 11.875L19 5.643L4.24016 11.875L19 18.107ZM7.91666 23.75C7.31975 23.75 6.73708 23.9732 6.30641 24.4039C5.88683 24.8235 5.54166 25.5122 5.54166 26.5699V32.9381C6.01508 33.1043 6.80358 33.2991 7.91666 33.2991C9.02975 33.2991 9.81825 33.1043 10.2917 32.9381V26.5683C10.2917 25.5091 9.9465 24.8219 9.52691 24.4023C9.31453 24.1931 9.06299 24.0279 8.7867 23.9159C8.51041 23.804 8.21476 23.7476 7.91666 23.75Z"
          fill="#192F59"
        />
      </g>
      <defs>
        <clipPath id="clip0_79_14">
          <rect width="38" height="38" fill="white" />
        </clipPath>
      </defs>
    </svg>,
      head: "Mini-MBA Programs",
      body: "Providing participants with a comprehensive overview of essential business concepts and management skills",
      link: "",
    },
    {
      icon: <FaChartLine/>,
      head: "Professional Proficiency Programs",
      body: "Providing participants with a comprehensive overview of essential business concepts and management skills",
      link: "",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="34" height="33" viewBox="0 0 34 33" fill="none">
      <path d="M3.25002 7.90625C3.25002 6.9034 3.6484 5.94162 4.35752 5.2325C5.06664 4.52338 6.02842 4.125 7.03127 4.125H26.9688C27.9716 4.125 28.9334 4.52338 29.6425 5.2325C30.3516 5.94162 30.75 6.9034 30.75 7.90625V20.9688C30.75 21.9716 30.3516 22.9334 29.6425 23.6425C28.9334 24.3516 27.9716 24.75 26.9688 24.75H14.25V23.375C14.415 23.155 14.5663 22.9268 14.7051 22.6875H26.9688C27.9175 22.6875 28.6875 21.9175 28.6875 20.9688V7.90625C28.6875 6.9575 27.9175 6.1875 26.9688 6.1875H7.03127C6.08252 6.1875 5.31252 6.9575 5.31252 7.90625V13.2949C4.50916 13.7597 3.80771 14.3817 3.25002 15.1236V7.90625ZM9.78127 9.625C9.50776 9.625 9.24546 9.73365 9.05206 9.92705C8.85867 10.1204 8.75002 10.3827 8.75002 10.6562C8.75002 10.9298 8.85867 11.1921 9.05206 11.3855C9.24546 11.5789 9.50776 11.6875 9.78127 11.6875H24.2188C24.4923 11.6875 24.7546 11.5789 24.948 11.3855C25.1414 11.1921 25.25 10.9298 25.25 10.6562C25.25 10.3827 25.1414 10.1204 24.948 9.92705C24.7546 9.73365 24.4923 9.625 24.2188 9.625H9.78127ZM18.0313 16.5C17.7578 16.5 17.4955 16.6087 17.3021 16.802C17.1087 16.9954 17 17.2577 17 17.5312C17 17.8048 17.1087 18.0671 17.3021 18.2605C17.4955 18.4538 17.7578 18.5625 18.0313 18.5625H24.2188C24.4923 18.5625 24.7546 18.4538 24.948 18.2605C25.1414 18.0671 25.25 17.8048 25.25 17.5312C25.25 17.2577 25.1414 16.9954 24.948 16.802C24.7546 16.6087 24.4923 16.5 24.2188 16.5H18.0313ZM8.75002 13.75C7.29114 13.75 5.89202 14.3295 4.86044 15.3611C3.82886 16.3927 3.24933 17.7918 3.24933 19.2507C3.24933 20.7096 3.82886 22.1087 4.86044 23.1403C5.89202 24.1718 7.29114 24.7514 8.75002 24.7514C10.2089 24.7514 11.608 24.1718 12.6396 23.1403C13.6712 22.1087 14.2507 20.7096 14.2507 19.2507C14.2507 17.7918 13.6712 16.3927 12.6396 15.3611C11.608 14.3295 10.2089 13.75 8.75002 13.75ZM12.875 24.7514C11.7269 25.6149 10.2983 26.1264 8.75002 26.1264C7.26243 26.1294 5.81437 25.6476 4.62502 24.7541V29.2174C4.62502 30.0011 5.45689 30.4824 6.12377 30.1372L6.24752 30.0616L8.75002 28.314L11.2525 30.063C11.397 30.1639 11.565 30.2261 11.7404 30.2436C11.9158 30.2611 12.0928 30.2334 12.2544 30.1631C12.416 30.0927 12.5569 29.9822 12.6636 29.8419C12.7704 29.7016 12.8394 29.5363 12.864 29.3617L12.875 29.2174V24.7514Z" fill="#192F59"/>
    </svg>,
      head: "Professional Certification Programs",
      body: "Providing participants with a comprehensive overview of essential business concepts and management skills",
      link: "",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
      <path d="M9.5 16.625H16.625V19H9.5V16.625ZM9.5 7.125H23.75V9.5H9.5V7.125ZM9.5 11.875H23.75V14.25H9.5V11.875ZM9.5 28.5H16.625V30.875H9.5V28.5ZM32.0625 29.6875H24.9375C23.9927 29.6875 23.0865 30.0628 22.4184 30.7309C21.7503 31.399 21.375 32.3052 21.375 33.25V35.625H23.75V33.25C23.75 32.9351 23.8751 32.633 24.0978 32.4103C24.3205 32.1876 24.6226 32.0625 24.9375 32.0625H32.0625C32.3774 32.0625 32.6795 32.1876 32.9022 32.4103C33.1249 32.633 33.25 32.9351 33.25 33.25V35.625H35.625V33.25C35.625 32.3052 35.2497 31.399 34.5816 30.7309C33.9135 30.0628 33.0073 29.6875 32.0625 29.6875ZM28.5 28.5C29.4395 28.5 30.3578 28.2214 31.139 27.6995C31.9201 27.1775 32.5289 26.4357 32.8884 25.5677C33.2479 24.6998 33.342 23.7447 33.1587 22.8233C32.9755 21.9019 32.5231 21.0555 31.8588 20.3912C31.1945 19.7269 30.3481 19.2745 29.4267 19.0913C28.5053 18.908 27.5502 19.0021 26.6823 19.3616C25.8143 19.7211 25.0725 20.3299 24.5505 21.111C24.0286 21.8922 23.75 22.8105 23.75 23.75C23.75 25.0098 24.2504 26.218 25.1412 27.1088C26.032 27.9996 27.2402 28.5 28.5 28.5ZM28.5 21.375C28.9697 21.375 29.4289 21.5143 29.8195 21.7753C30.21 22.0362 30.5145 22.4072 30.6942 22.8411C30.874 23.2751 30.921 23.7526 30.8294 24.2133C30.7377 24.674 30.5115 25.0972 30.1794 25.4294C29.8472 25.7615 29.424 25.9877 28.9633 26.0794C28.5026 26.171 28.0251 26.124 27.5911 25.9442C27.1572 25.7645 26.7862 25.46 26.5253 25.0695C26.2643 24.6789 26.125 24.2197 26.125 23.75C26.125 23.1201 26.3752 22.516 26.8206 22.0706C27.266 21.6252 27.8701 21.375 28.5 21.375Z" fill="#192F59"/>
      <path d="M16.625 35.625H7.125C6.4953 35.6244 5.89158 35.3739 5.44632 34.9287C5.00105 34.4834 4.75063 33.8797 4.75 33.25V4.75C4.75063 4.1203 5.00105 3.51658 5.44632 3.07132C5.89158 2.62605 6.4953 2.37563 7.125 2.375H26.125C26.7547 2.37563 27.3584 2.62605 27.8037 3.07132C28.2489 3.51658 28.4994 4.1203 28.5 4.75V16.625H26.125V4.75H7.125V33.25H16.625V35.625Z" fill="#192F59"/>
    </svg>,
      head: "Provincial Licensing and Micro Credential Programs",
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

          <Link>
            Discover all our Courses <RiArrowRightLine />
          </Link>
        </div>
      </div>
      <div className="path">
        <h2>Discover your path to success</h2>
        <div className="path_grid">
          {path.map((item) => (
            <div className="path_box">
              <span>{item.icon} </span>
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
        <div className="discover">
          <div className="dis_img">
            <img src={dis} alt="" />
          </div>
          <div className="dis_text">
            <span>About Us</span>
            <h2 className="h2">
              Discover the Essence of Guardmaster Institute
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              lacinia leo eget turpis pretium elementum. Vivamus ante purus,
              ultrices vitae ultricies vitae, consequat cursus neque.
            </p>
            <Link>
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
    </div>
  );
};

export default Home;
