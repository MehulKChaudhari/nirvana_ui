import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { GoBook } from "react-icons/go";
import { CgProfile } from "react-icons/cg";

export const Navbar = () => {
  return (
    <div className="Navbar__container">
      <div className="logo">
        <img />
      </div>
      <nav className="side-nav__list">
        <NavLink
          activeClassName="activeLink"
          style={{ textDecoration: "none" }}
          to="/"
          className="side-nav__link"
        >
          <FaHome className="nav-icon" />
          <span>Home</span>
        </NavLink>
        <NavLink
          activeClassName="activeLink"
          style={{ textDecoration: "none" }}
          to="/documentation"
          className="side-nav__link"
        >
          <GoBook className="nav-icon" />
          <span>documentation</span>
        </NavLink>
        <NavLink
          activeClassName="activeLink"
          style={{ textDecoration: "none" }}
          to="/about-me"
          className="side-nav__link"
        >
          <CgProfile className="nav-icon" />
          <span>About Me</span>
        </NavLink>
      </nav>
    </div>
  );
};
