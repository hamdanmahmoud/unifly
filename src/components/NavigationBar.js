import React from "react";
import "./NavigationBar.css";

import logo from "../resources/logo.png";
import gbFlag from "../resources/gb.png";
import frFlag from "../resources/fr.png";
import roFlag from "../resources/ro.png";

function NavigationBar(props) {
  return (
    <nav className="navigationBar wrapper">
      <span>
        <a href="https://github.com/hamdanmahmoud/unifly/">
          <img
            className="navigationBar-logo"
            src={logo}
            alt="University logo"
          ></img>
        </a>
      </span>
      <div></div>
      <ul className="right">
        <li>
          <ul className="flags" id="language-ui">
            <li>
              <img
                className="flag"
                src={gbFlag}
                id="flag-en"
                alt="British flag"
                onClick={() => props.changeLanguage("en")}
              ></img>
              <img
                className="flag"
                src={frFlag}
                id="flag-fr"
                alt="French flag"
                onClick={() => props.changeLanguage("fr")}
              ></img>
              <img
                className="flag"
                src={roFlag}
                id="flag-ro"
                alt="Romanian flag"
                onClick={() => props.changeLanguage("ro")}
              ></img>
            </li>
          </ul>
        </li>
      </ul>
      <div className="coloredBar"></div>
    </nav>
  );
}

export default NavigationBar;
