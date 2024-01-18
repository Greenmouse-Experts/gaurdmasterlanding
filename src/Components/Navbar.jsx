import React, { useState, useEffect, useRef } from "react";
import "../Stylesheet/navbar.css";
import { Link, NavLink } from "react-router-dom";
import { RiMenuFill, RiCloseFill } from "react-icons/ri";
import logo from "../assets/logo.png";
import { IoIosArrowDown } from "react-icons/io";
import { FiPhone, FiSearch } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const hide = () => setIsOpen(false);
  const show = () => setIsOpen(true);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const [fix, setFix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 70) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  window.addEventListener("scroll", setFixed);

  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };


  return (
    <div className={fix ? "navbar fixed" : "navbar"}>
      <div className="nav_head">
        <div className="nav_social">
          <span>
            {" "}
            <FiPhone /> +000 123 456 7890
          </span>
          <Link to="login" >Student Login</Link>
          <Link>Contact Us</Link>
        </div>
      </div>

      <div className="nav_body">
        <button className="nav_toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <RiCloseFill /> : <RiMenuFill />}
        </button>
        <div className="log">
          <img className="logo" src={logo} alt="" />
          <div
          ref={dropdownRef}
          className={`nav_link ${isOpen ? "show_nav" : "hide_nav"} `}
        >
          <NavLink onClick={toggle} onBlur={hide} onFocus={show} to="/">
            {" "}
            Home
          </NavLink>
          <NavLink onClick={toggle} onBlur={hide} onFocus={show} to="about">
            About
          </NavLink>
          <NavLink onClick={toggle} onBlur={hide} onFocus={show} to="/services">
            Courses <IoIosArrowDown />
          </NavLink>
          <NavLink onClick={toggle} onBlur={hide} onFocus={show} to="/gallery">
            Admission
          </NavLink>
          <NavLink className="hid" onClick={toggle} onBlur={hide} onFocus={show} to="/program">
          View Our Programs
          </NavLink>
        </div>
        </div>
       

        <div className="search">
          <span>
            <FiSearch />
          </span>
          <Link>View Our Programs</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
