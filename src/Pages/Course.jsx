import React from "react";
import { Header } from "../Components/Header";
import course from "../assets/course.png";
import our1 from "../assets/1.png";
import our2 from "../assets/2.png";
import our3 from "../assets/3.png";
import our4 from "../assets/4.png";
import our5 from "../assets/5.png";
import our6 from "../assets/6.png";
import our7 from "../assets/7.png";
import our8 from "../assets/8.png";
import our9 from "../assets/9.png";
import our10 from "../assets/10.png";
import our11 from "../assets/11.png";
import our12 from "../assets/12.png";
import our13 from "../assets/13.png";
import our14 from "../assets/14.png";
import our15 from "../assets/15.png";
import our16 from "../assets/16.png";
import "../Stylesheet/style.css"
import Footer from "../Components/Footer";
import { SliderProps } from "../Components/SliderProps"




const Course = () => {
  const data = [
    {
      id: 1,
      head: "Corporate Security Mgmt",
      image: our1,
      body: "Corporate safety through security policies and risk management.",
      span: "Biochemistry",
    },
    {
      id: 2,
      head: "Loss Prevention Mgmt",
      image: our2,
      body: "Study of safeguarding assets and ensuring profitability",
      span: "Economics",
    },
    {
      id: 3,
      head: "Private Security Business Mgmt",
      image: our3,
      body: "Enhance skills in private security business management.",
      span: "Media",
    },
    {
      id: 4,
      head: "Business Resilience & Disaster Recovery Studies",
      image: our4,
      body: "Build resilience with our Disaster Recovery Course.",
      span: "Finance",
    },
   
  ];

  const data2 = [
    {
      id: 1,
      head: "Loss Prevention Operations & Leadership Studies",
      image: our5,
      body: "Integrating loss prevention and leadership studies principles.",
      span: "Course 001",
    },
    {
      id: 2,
      head: "Asset Protection Studies",
      image: our6,
      body: "Enhances your financial security and risk management",
      span: "Course 001",
    },
    {
      id: 3,
      head: "Private Security Operations & Leadership Studies",
      image: our7,
      body: "Integrating private security operations and leadership studies.",
      span: "Course 001",
    },
    {
      id: 4,
      head: "Security Planning, Assessment & Audit",
      image: our8,
      body: "Comprehensive course integrating security planning & methodologies.",
      span: "Course 001",
    },
  ];

  const data3 = [
    {
      id: 1,
      head: "Event Security & Crowd Management",
      image: our9,
      body: "Comprehensive training in event security and crowd management.",
      span: "Course 001",
    },
    {
      id: 2,
      head: "Commercial & Retail Crime Prevention",
      image: our10,
      body: "Enhance security skills with our Crime Prevention Course.",
      span: "Course 002",
    },
    {
      id: 3,
      head: "Loss Prevention Studies",
      image: our11,
      body: "Comprehensive Loss Prevention Studies Course: Safeguarding Businesses and Assets",
      span: "Course 003",
    },
    {
      id: 4,
      head: "Private Security Studies",
      image: our12,
      body: "Explore advanced strategies for safeguarding organizations.",
      span: "Course 004",
    },
  ];

  const data4 = [
    {
      id: 1,
      head: "Ontario Security Guard Basic Course",
      image: our13,
      body: "Essential training on foundational skills for guard responsibilities.",
      span: "Course 001",
    },
    {
      id: 2,
      head: "Alberta Security Guard Training Course",
      image: our14,
      body: "Comprehensive security guard course for professional skill development.",
      span: "Course 002",
    },
    {
      id: 3,
      head: "IFPO Certified Protection Officers Course",
      image: our15,
      body: "Enhance your professional security skills comprehensively",
      span: "Course 003",
    },
    {
      id: 4,
      head: "Association of Chartered Loss Specialists of Canada Professional Certification Programs",
      image: our16,
      body: "",
      span: "Course 004",
    },
  ];
  return (
    <div className=" about_main">
      <Header image={course} title="Courses" body="Courses" />
      <SliderProps head="Mini MBA Programs" data={data} span="Mini MBA"/>
      <SliderProps head="Professional Proficiency Diploma (PPD) Programs" data={data2} span="PPD Programs" />
      <SliderProps head="Professional Proficiency Certificate (PPC) Programs" data={data3} span="PPC Programs" />
      <SliderProps head="Provincial Licensing And Professional Certification Programs" data={data4} span="PCP Programs" />
      <Footer/>
    </div>
  );
};

export default Course;
