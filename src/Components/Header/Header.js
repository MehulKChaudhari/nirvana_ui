import React from "react";
import "./Header.css"
import {
    faTwitter,
    faGithub,
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Header = () => {
  return (
    <div className="header__container">
      <div className="header__links">
        <a
          href="https://twitter.com/MehulKChaudhari"
          className="social"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a
          href="https://www.linkedin.com/in/mehul-chaudhari-3367b6174/"
          className="social"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
          href="https://www.github.com/mehulkchaudhari/"
          className="social"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
    </div>
  );
};
