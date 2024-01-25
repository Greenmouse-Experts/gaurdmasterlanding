import React from "react";
import "../Stylesheet/about.css";
import { Header } from "../Components/Header";
import about from "../assets/about.png";
import dis from "../assets/diss.png";
import div from "../assets/div.svg";
import lead from "../assets/lead.svg";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import { RiArrowRightSLine } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";



const About = () => {
  const navigate = useNavigate()
  const abouts = [
    {
      name: 'Academic Excellence:',
      desc: 'At Guardmaster, we pride ourselves on delivering high-quality education that goes beyond conventional boundaries. Our programs are meticulously designed to foster critical thinking, strategic planning, and ethical decision-making within the realm of corporate security.'
    },
    {
      name: 'Research-Centric Approach:',
      desc: 'We stand at the forefront of thought-provoking research, continuously contributing to the evolving field of corporate security and loss prevention. Our faculty engages in pioneering research endeavors, ensuring that our students benefit from the latest insights and best practices.'
    },
    {
      name:'Interactive Learning Environment:',
      desc: 'Guardmaster provides a dynamic learning environment that encourages active engagement and collaboration. Through robust discussions and case studies, our students gain practical insights into real-world security challenges, preparing them for leadership roles in corporate security management.'
    },
    {
      name: 'Expert Consultation Services:',
      desc: 'Our commitment extends beyond the classroom. Guardmaster offers expert consultation services, allowing corporations to tap into our wealth of knowledge for tailored solutions to their specific security needs. Our consultants, with extensive industry experience, provide strategic guidance to enhance overall security frameworks.'
    },
    {
      name: 'Certification Classes:',
      desc: 'We offer industry-recognized certification classes that validate the expertise of security and loss prevention professionals. These certifications are a testament to the mastery of skills and knowledge acquired through our comprehensive programs.'
    },
    {
      name: 'Global Network:',
      desc: 'Guardmaster is a global network of professionals committed to advancing the field of corporate security. Our alumni network provides a platform for ongoing collaboration, ensuring that Guardmaster remains at the forefront of industry trends. '
    },
    {
      name: 'Visionary Leadership:',
      desc: 'Guardmaster is led by a team of industry veterans and academics who bring a wealth of experience to the forefront of our programs. Their leadership ensures that Guardmaster remains at the cutting edge of corporate security education.'
    },
    {
      name: 'Cutting-Edge Curriculum:',
      desc: 'Our curriculum is a blend of theoretical frameworks and practical applications, addressing the multifaceted challenges faced by modern corporate security professionals. From risk management to technological integration, our courses provide a holistic understanding of the field.'
    },
    {
      name: 'Customized Corporate Training:',
      desc: 'Recognizing that each corporation has unique security requirements, Guardmaster offers tailored training programs. Our corporate training services encompass workshops, seminars, and bespoke courses crafted to meet specific organizational needs.'
    },
    {
      name: 'Innovative Learning Resources:',
      desc: 'Guardmaster leverages state-of-the-art learning resources, including immersive simulations, industry case studies, and access to a vast repository of security literature. This ensures that our students are not only well-informed but also adept at applying theoretical knowledge in practical scenarios.'
    },
    {
      name: 'Continuous Professional Development:',
      desc: 'Our commitment to our students extends beyond graduation. Guardmaster facilitates continuous professional development through webinars, conferences, and access to updated resources, enabling our alumni to stay abreast of the latest industry trends.'
    }
  ]
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
      <div className="flex justify-center bg-[#EDEDED] boxes">
        <div className="py-16 grid mg:grid-cols-2 lg:grid-cols-3 gap-12">
          {
            abouts.map((item, i) => (
              <div className="bg-white p-6" key={i}>
                  <p className="font-semibold border-b border-gray-400 pb-4 !mont">{item.name}</p>
                  <p className="pt-4 !mont text-[15px]">{item.desc}</p>
              </div>
            ))
          }
          <div className="bg-[#003DA5] relative p-6 text-white">
            <p className="font-semibold !mont">Our Industry Patnerships</p>
            <p className="!mont text-[14px] mt-4">View our certifications and industry patnerships</p>
            <div className="w-[47px] absolute bottom-10 right-10 h-[47px] bg-[#FFD347] rounded-[50%] flex items-center justify-center cursor-pointer" onClick={() => navigate('/partnership')}>
              <FaArrowRight className="text-[#003DA5] text-xl"/>
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
