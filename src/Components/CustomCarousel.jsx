import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { RiArrowRightLine } from "react-icons/ri";
import our1 from "../assets/our1.png";
import our2 from "../assets/our2.png";
import our3 from "../assets/our3.png";
import our4 from "../assets/our4.png";

const CustomCarousel = () => {
  const data = [
    {
      id: 1,
      head: "Biochemistry",
      image: our1,
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacinia leo eget turpis pretium elementum.",
      span: "Biochemistry",
    },
    {
      id: 2,
      head: "Major In Economics",
      image: our2,
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacinia leo eget turpis pretium elementum.",
      span: "Economics",
    },
    {
      id: 3,
      head: "Business Media",
      image: our3,
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacinia leo eget turpis pretium elementum.",
      span: "Media",
    },
    {
      id: 4,
      head: "Corporate Finance",
      image: our4,
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacinia leo eget turpis pretium elementum.",
      span: "Finance",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3.3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 745, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="our">
      <div className="our_head">
        <span>Our Courses</span>
        <h2 className="h2">Graduate Programs </h2>
      </div>

      <div className="our_grid">
        <Carousel responsive={responsive} className="carousel" autoPlay={false}>
          {data.map((item) => (
            <div className="slide_card">
                <img src={item.image} alt="" />
              
              <div className="content">
                <span>
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_27_109)">
                      <path
                        d="M8.70683 1.45915L16.6756 4.82374C16.7721 4.8641 16.8545 4.93211 16.9125 5.0192C16.9705 5.10629 17.0014 5.20857 17.0014 5.3132C17.0014 5.41782 16.9705 5.5201 16.9125 5.60719C16.8545 5.69428 16.7721 5.76229 16.6756 5.80265L13.4583 7.15982V10.625C13.4583 10.7227 13.4314 10.8186 13.3804 10.9019C13.3006 11.0256 13.2068 11.1401 13.102 11.2434C12.9257 11.4247 12.6593 11.6542 12.2782 11.878C11.5133 12.3299 10.3119 12.7493 8.5 12.7493C8.02329 12.7493 7.58908 12.7202 7.19242 12.6692C7.05596 12.6475 6.93334 12.5735 6.85058 12.4628C6.76782 12.3522 6.73142 12.2136 6.74912 12.0766C6.76681 11.9395 6.8372 11.8148 6.94536 11.7288C7.05351 11.6428 7.19091 11.6023 7.32842 11.6159C7.67692 11.6606 8.0665 11.6868 8.5 11.6868C10.1412 11.6868 11.1534 11.3092 11.7385 10.9636C11.9581 10.8375 12.1607 10.6824 12.3399 10.5032L12.3958 10.4429V7.60749L8.70683 9.16582C8.64139 9.19348 8.57105 9.20774 8.5 9.20774C8.42895 9.20774 8.35861 9.19348 8.29317 9.16582L4.07292 7.38365V9.62907C4.4285 9.72045 4.75292 9.90603 5.01288 10.166C5.423 10.5754 5.66667 11.1647 5.66667 11.8858V15.0733C5.66629 15.1626 5.64376 15.2503 5.60111 15.3287C5.55846 15.4071 5.49701 15.4736 5.42229 15.5224C5.37429 15.5528 5.32463 15.5804 5.27354 15.6053C5.15453 15.6643 5.03143 15.7147 4.90521 15.7562C4.46448 15.8964 4.00415 15.9653 3.54167 15.9602C3.07916 15.9657 2.61877 15.8968 2.17812 15.7562C2.05201 15.7144 1.92894 15.664 1.80979 15.6053C1.75587 15.5797 1.7038 15.5503 1.65396 15.5174C1.58136 15.4687 1.52179 15.4029 1.48043 15.3259C1.43907 15.2489 1.41718 15.1629 1.41667 15.0754V11.8879C1.41667 11.1654 1.66033 10.5775 2.07046 10.1667C2.3303 9.90727 2.65486 9.72213 3.01042 9.63049V6.9367L0.324417 5.80124C0.228585 5.76041 0.146869 5.69232 0.0894324 5.60542C0.0319959 5.51852 0.00137329 5.41665 0.00137329 5.31249C0.00137329 5.20832 0.0319959 5.10645 0.0894324 5.01956C0.146869 4.93266 0.228585 4.86456 0.324417 4.82374L8.29317 1.45915C8.35861 1.43149 8.42895 1.41724 8.5 1.41724C8.57105 1.41724 8.64139 1.43149 8.70683 1.45915ZM8.5 8.10049L15.1031 5.31249L8.5 2.52449L1.89692 5.31249L8.5 8.10049ZM3.54167 10.625C3.27462 10.625 3.01396 10.7249 2.82129 10.9175C2.63358 11.1052 2.47917 11.4134 2.47917 11.8865V14.7354C2.69096 14.8098 3.04371 14.8969 3.54167 14.8969C4.03962 14.8969 4.39237 14.8098 4.60417 14.7354V11.8858C4.60417 11.4119 4.44975 11.1045 4.26204 10.9168C4.16703 10.8232 4.0545 10.7493 3.93089 10.6992C3.80729 10.6491 3.67503 10.6239 3.54167 10.625Z"
                        fill="#0D0D0D"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_27_109">
                        <rect width="17" height="17" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  {item.span}
                </span>
                <h3>{item.head}</h3>
                <p>{item.body}</p>
                <Link>
                  Enroll Now<RiArrowRightLine />
                </Link>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CustomCarousel;
