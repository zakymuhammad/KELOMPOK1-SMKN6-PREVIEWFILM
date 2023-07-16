import React, { useEffect } from "react";

import { Link, useLocation } from "react-router-dom";

import "./header.scss";
import "../../index.css";

import { FcAutomatic } from "react-icons/fc";

import L2dmin from "../../assets/user.png";

import logo from "../../assets/tmoview.png";
import { useRef } from "react";

const headerNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Movies",
    path: "/movie",
  },
  {
    display: "TV Series",
    path: "/tv",
  },
  {
    // display: "(⌐■_■)",
    path: "/signin",
    // icon: <FcAutomatic />,
  },
];

const Header = () => {
  const { pathname } = useLocation();
  const headerRef = useRef(null);

  const active = headerNav.findIndex((e) => e.path === pathname);

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    };
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);

  return (
    <div ref={headerRef} className="header">
      <div className="container header__wrap">
        <div className="logo">
          <img src={logo} className="image" alt="" />
          <Link to="/">Movie Preview</Link>
        </div>
        <ul className="header__nav">
          {headerNav.map((e, i) => (
            <li key={i} className={`${i === active ? "active" : ""}`}>
              <Link to={e.path}>{e.display}</Link>
              {/* <Link className="" to={e.path}>
                {e.icon}
              </Link> */}

              {/* danger */}
              {/* <Link to={e.path}>
                <img src={L2dmin} alt="" />
              </Link> */}
            </li>
          ))}
          <li>
            <div className="">
              <Link to="/signin">
                <img src={L2dmin} alt="" className="w-6 py-2" />
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
