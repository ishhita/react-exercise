import React, { useState } from "react";
import Header from "../Header/Header";
import Home from "../Home/Home";
import About from "../About/About";
import Contact from "../Contact/Contact";
import "./switchTabs.css";
const Switchtabs = () => {
  const [toggleDisplay, setToggleDisplay] = useState({
    home: "none",
    about: "none",
    contact: "none",
  });

  const toggleView = (view) => {
    switch (view) {
      case 1:
        setToggleDisplay({ home: "block", about: "none", contact: "none" });
        break;
      case 2:
        setToggleDisplay({ home: "none", about: "block", contact: "none" });
        break;
      case 3:
        setToggleDisplay({ home: "none", about: "none", contact: "block" });
        break;
      default:
    }
  };
  return (
    <div className="switch-tab">
      <Header text="Switch Tabs" />
      <ul>
        <li>
          <a
            href="#!"
            onClick={(view) => {
              toggleView(1);
            }}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#!"
            onClick={(view) => {
              toggleView(2);
            }}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#!"
            onClick={(view) => {
              toggleView(3);
            }}
          >
            Contact
          </a>
        </li>
      </ul>
      <Home content="Home" display={toggleDisplay.home} />
      <About content="About" display={toggleDisplay.about} />
      <Contact content="Contact" display={toggleDisplay.contact} />
    </div>
  );
};

export default Switchtabs;
