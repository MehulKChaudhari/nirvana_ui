import React from "react";
import "./LandingPage.css";
import textlogo from "../../assets/textlogo.png";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="landing-page__container">
      <div className="landing-page__text-logo">
        {" "}
        <p>
          <img src={textlogo} alt="nirvana_ui" />
        </p>
        <h2 className="landing-page__heading">
          Simple, unobtrusive components for modern web!
        </h2>
        <p className="landing-page__discription">
          Nirvana UI is components library for web applications built using
          simple HTML, react, etc, extremely easy to use,customisibile, and
          responsive.
        </p>
      </div>
      <div>
        <iframe
          src="https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C0%29&t=one-light&wt=none&l=javascript&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%252F%252FCSS%250A%253Clink%2520rel%253D%2522stylesheet%2522%2520href%253D%2522%2522%2520integrity%253D%2522%2520crossorigin%253D%2522anonymous%2522%253E%250A%250A%252F%252FJavascript%250A%253Cscript%2520rel%253D%2522stylesheet%2522%2520src%253D%2522%2522%2520integrity%253D%2522%2522%2520crossorigin%253D%2522anonymous%2522%253E"
          style={{
            width: "732px",
            height: "276px",
            border: "0",
            transform: "scale(1)",
            overflow: "hidden",
          }}
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
      <div className="Landing__documentation-link">
        <p> Now 10+ components!</p>{" "}
        <Link to="/docs">
          {" "}
          <button className="landing-page__docs-link">
            Documentation
          </button>{" "}
        </Link>
      </div>
    </div>
  );
}
