import React, { useState, useEffect, useRef } from "react";
import "../Stylesheet/navbar.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { RiMenuFill, RiCloseFill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { FiPhone, FiSearch } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";
import SearchModal from "./SearchModal";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const hide = () => setIsOpen(false);
  const show = () => setIsOpen(true);
  const navLinkRef = useRef(null);
  const categoriesDropRef = useRef(null);
  const navigate = useNavigate()

  const [fix, setFix] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

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
  const [popup, setPopup] = useState(false);

  const pop = () => {
    setPopup(!popup);
    // setIsOpen(!isOpen);
  };

  const close = () => {
    setPopup(false);
  };

  useEffect(() => {
    const handleClickOutsideNav = (event) => {
      if (navLinkRef.current && !navLinkRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleClickOutsideCategoriesDrop = (event) => {
      if (
        // categoriesDropRef.current ||
        // !categoriesDropRef.current.contains(event.target)
        navLinkRef.current &&
        !navLinkRef.current.contains(event.target)
      ) {
        setPopup(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutsideNav);
    document.addEventListener("mousedown", handleClickOutsideCategoriesDrop);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideNav);
      document.removeEventListener(
        "mousedown",
        handleClickOutsideCategoriesDrop
      );
    };
  }, [navLinkRef, categoriesDropRef]);
  return (
    <div className={fix ? "navbar fixed" : "navbar"}>
      <div className="nav_head">
        <div className="nav_social">
          <span>
            {" "}
            <FiPhone /> +000 123 456 7890
          </span>
          <Link to="login">Student Login</Link>
          <Link to="contact">Contact Us</Link>
        </div>
      </div>

      <div className="nav_body">
        <button className="nav_toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <RiCloseFill /> : <RiMenuFill />}
        </button>

        <div className="log">
          <img
            className="logo"
            src={
              "https://res.cloudinary.com/greenmouse-tech/image/upload/v1706009737/GuardMaster/Guardmaster_transparent1_1_1_wzdsac.png"
            }
            alt=""
          />
          {popup && (
            <div ref={categoriesDropRef} className="categories_drop">
              <div className="drop_head">
                <h3>
                  Programs and Courses{" "}
                  <span onClick={close}>
                    <MdOutlineClose />
                  </span>
                </h3>
                <span>Accredited CPD Provider by TheCPD Group, UK.</span>
              </div>
              <div className="drop_body">
                <div>
                  <h3>Mini-MBA Programs</h3>
                  <div>
                    <NavLink to="/" activeClassName="active">
                      Corporate Security Management
                    </NavLink>
                    <NavLink to="/" activeClassName="active">
                      Loss Prevention Management
                    </NavLink>
                    <NavLink to="/" activeClassName="active">
                      Private Security Business Management
                    </NavLink>
                    <NavLink to="/" activeClassName="active">
                      Business Resilience & Disaster Recovery Studies
                    </NavLink>
                    <NavLink to="/" activeClassName="active">
                      Supply Chain Security Management
                    </NavLink>
                  </div>
                </div>
                <div>
                  <h3>Professional Proficiency Diploma (PPD) Programs</h3>
                  <div>
                    <NavLink to="/" activeClassName="active">
                      Loss Prevention Operations & Leadership Studies
                    </NavLink>
                    <NavLink to="/" activeClassName="active">
                      Asset Protection Studies
                    </NavLink>
                    <NavLink to="/" activeClassName="active">
                      Private Security Operations & Leadership Studies
                    </NavLink>
                    <NavLink to="/" activeClassName="active">
                      Security Planning, Assessment & Audit
                    </NavLink>
                    <NavLink to="/" activeClassName="active">
                      Forensic Accounting & Fraud Examination
                    </NavLink>
                  </div>
                </div>
                <div>
                  <h3>Professional Proficiency Certificate (PPC) Programs</h3>
                  <div>
                    <NavLink to="/" activeClassName="active">
                      Event Security & Crowd Management
                    </NavLink>
                    <NavLink to="/" activeClassName="active">
                      Commercial & Retail Crime Prevention
                    </NavLink>
                    <NavLink to="/" activeClassName="active">
                      Loss Prevention Studies
                    </NavLink>
                    <NavLink to="/" activeClassName="active">
                      Private Security Studies
                    </NavLink>
                    <NavLink to="/" activeClassName="active">
                      Supply Chain Security Studies
                    </NavLink>
                  </div>
                </div>
                <div>
                  <h3>
                    Provincial Licensing And Professional Certification Programs
                  </h3>
                  <div>
                    <NavLink to="/" activeClassName="active">
                      Ontario Security Guard Basic Course
                    </NavLink>
                    <NavLink to="/" activeClassName="active">
                      Alberta Security Guard Training Course
                    </NavLink>
                    <NavLink to="/" activeClassName="active">
                      IFPO Certified Protection Officers Course
                    </NavLink>
                    <NavLink to="/" activeClassName="active">
                      Association of Chartered Loss Specialists of Canada
                      Professional Certification Programs
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div
            ref={navLinkRef}
            className={`nav_link ${isOpen ? "show_nav" : "hide_nav"} `}
          >
            <NavLink onClick={toggle} onBlur={hide} onFocus={show} to="/">
              {" "}
              Home
            </NavLink>
            <div className="border-b lg:border-none text-left lg:text-center pl-8 lg:pl-0 py-4" onClick={toggle} onBlur={hide} onFocus={show}>
              <Menu>
                <MenuHandler>
                  <Button className="bg-transparent flex items-center gap-x-2 p-0 m-0 shadow-none hover:shadow-none text-black !mont lg:!syne capitalize font-[500] text-[14px] lg:text-[16px]">
                    About GICSM <IoIosArrowDown/>
                  </Button>
                </MenuHandler>
                <MenuList className="z-[10000]">
                  <MenuItem className="whitespace-nowrap text-black !syne text-[15px]" onClick={() => navigate('/about')}>About Us</MenuItem>
                  <MenuItem className="whitespace-nowrap text-black !syne text-[15px]" onClick={() => navigate('/partnership')}>Industry Partnership</MenuItem>
                  <MenuItem className="whitespace-nowrap text-black !syne text-[15px]" onClick={() => navigate('/leadership')}>Leadership and Governance</MenuItem>
                </MenuList>
              </Menu>
            </div>
            <NavLink
              
              to=""
              ref={categoriesDropRef}
            >
              Courses <IoIosArrowDown className="hidden lg:block" onClick={pop}
              onBlur={hide}
              onFocus={show}/>
            </NavLink>
            <NavLink  onClick={toggle} onBlur={hide} onFocus={show} to="faq">
              FAQs
            </NavLink>
            <NavLink
              to="/course"
              className="hid"
              onClick={toggle}
              onBlur={hide}
              onFocus={show}
            >
              View Our Programs
            </NavLink>
          </div>
        </div>

        <div className="search">
          <span className="cursor-pointer" onClick={() => setShowSearch(true)}>
            <FiSearch className="hover:scale-105 duration-100" />
          </span>
          <Link to="/course">View Our Programs</Link>
        </div>
      </div>
      {showSearch && <SearchModal close={() => setShowSearch(false)} />}
    </div>
  );
};

export default Navbar;
