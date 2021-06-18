import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { GoBook } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import logo from "../../Assets/logo.png";

export const Navbar = () => {
  return (
    <div className="Navbar__container">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <nav className="side-nav__list">
        <NavLink
          activeClassName="activeLink activeLink__home"
          style={{ textDecoration: "none" }}
          end to="/"
          className="side-nav__link"
        >
          <FaHome className="nav-icon"/>
          <span>Home</span>
        </NavLink>
        <NavLink
          activeClassName="activeLink activeLink__docs"
          style={{ textDecoration: "none" }}
          to="/docs"
          className="side-nav__link"
        >
          <GoBook className="nav-icon" />
          <span>Documentation</span>
        </NavLink>
        <NavLink
          activeClassName="activeLink activeLink__about-me"
          style={{ textDecoration: "none" }}
          to="/about-me"
          className="side-nav__link"
        >
          <CgProfile className="nav-icon" />
          <span>About-Me</span>
        </NavLink>
      </nav>
    </div>
  );
};
