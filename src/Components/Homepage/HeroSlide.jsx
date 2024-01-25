import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/element/css/effect-fade";
import "swiper/css/bundle"
import { register } from "swiper/element/bundle";
import { Autoplay, EffectFade } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import '../../Stylesheet/home.css'
import { RiArrowRightLine } from "react-icons/ri";
// register Swiper custom elements
register();

const HeroSlide = () => {
  const navigate = useNavigate();
  return (
    <>
      <Swiper
        effect={"fade"}
        autoplay={{ delay: 6000 }}
        modules={[Autoplay, EffectFade]}
        className="h-[570px]"
      >
        <SwiperSlide>
        <div className="home bg-first bg-cover bg-top ">
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
        </SwiperSlide>
        <SwiperSlide>
        <div className="home bg-second bg-cover bg-top">
        <div className="home_text">
          <h2>
          Explore Infinite Possibilities  <br /> Here!
          </h2>
          <p>
          We are dedicated to empowering students with the right <br />  knowledge and skills needed.
          </p>

          <Link to="/course">
            Discover all our Courses <RiArrowRightLine />
          </Link>
        </div>
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="home bg-third bg-cover bg-top">
        <div className="home_text">
          <h2>
          Building Bridges to Success in  <br />Security Management
          </h2>
          <p>
          We provide students with the tools and resources they need to  <br /> thrive in the security space
          </p>

          <Link to="/course">
            Discover all our Courses <RiArrowRightLine />
          </Link>
        </div>
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="home bg-fourth bg-cover bg-top">
        <div className="home_text">
          <h2>
          Unleashing Potential, Driving <br /> and Excellence!
          </h2>
          <p>
          Our institute is dedicated to unleashing the full potential of students and driving  <br /> excellence through innovative teaching.
          </p>

          <Link to="/course">
            Discover all our Courses <RiArrowRightLine />
          </Link>
        </div>
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="home bg-fifth bg-cover bg-top">
        <div className="home_text">
          <h2>
          Innovative Learning Solutions  <br /> for All!
          </h2>
          <p>
          We offer innovative learning solutions to diverse learning styles and adapt to the needs of   <br /> the education landscape.
          </p>

          <Link to="/course">
            Discover all our Courses <RiArrowRightLine />
          </Link>
        </div>
      </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HeroSlide;