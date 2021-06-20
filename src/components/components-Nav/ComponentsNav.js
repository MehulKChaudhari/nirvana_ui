import React from "react";
import { NavLink } from "react-router-dom";
import "./ComponentsNav.css";

export const ComponentsNav = () => {
  return (
    <div>
      <nav className="side-nav__list">
        <NavLink
          style={{ textDecoration: "none" }}
          className="navlinks"
          activeStyle={{
            fontWeight: "bold",
            color: "#01b7ee"
          }}
          to="/alert"
        >
          Alerts
        </NavLink>
        <NavLink
          style={{ textDecoration: "none" }}
          className="navlinks"
          activeStyle={{
            fontWeight: "bold",
            color: "#01b7ee"
          }}
          to="/avators"
        >
          Avators
        </NavLink>
        <NavLink
          style={{ textDecoration: "none" }}
          className="navlinks"
          activeStyle={{
            fontWeight: "bold",
            color: "#01b7ee"
          }}
          end
          to="/badge"
        >
          Badges
        </NavLink>
        <NavLink
          style={{ textDecoration: "none" }}
          className="navlinks"
          activeStyle={{
            fontWeight: "bold",
            color: "#01b7ee"
          }}
          to="/button"
        >
          Buttons
        </NavLink>
        <NavLink
          style={{ textDecoration: "none" }}
          className="navlinks"
          activeStyle={{
            fontWeight: "bold",
            color: "#01b7ee"
          }}
          to="/card"
        >
          Cards
        </NavLink>
      </nav>
    </div>
  );
};
