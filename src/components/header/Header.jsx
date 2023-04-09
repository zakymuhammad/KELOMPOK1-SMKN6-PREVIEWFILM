import React from "react";

import { Link, useLocation } from "react-router-dom";

import "./header.scss";
import "../../index.css";

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
];

const Header = () => {
  const { pathname } = useLocation();
  const headerRef = useRef(null);

  const active = headerNav.findIndex((e) => e.path === pathname);

  return (
    <div
      ref={headerRef}
      // className="header h-32 fixed top-0 left-0 w-full z-[99]"
      className="header"
    >
      <div className="header__wrap container">
        <div className="logo text-[2.5rem] font-semibold">
          <img src={logo} alt="" className="mr-3 w-14" />
          <Link to="/">tMovies</Link>
        </div>
        <ul className="header__nav">
          {headerNav.map((e, i) => (
            <li key={i} className={`${i === active ? "active" : ""}`}>
              <Link to={e.path}>{e.display}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
