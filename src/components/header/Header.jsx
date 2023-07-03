import React, { useEffect, useState } from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/Electric car-amico.png";
import { FaArrowDown } from "react-icons/fa";

const Header = () => {
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footerElement = document.querySelector("footer");
      if (footerElement) {
        const footerRect = footerElement.getBoundingClientRect();
        const footerTop = footerRect.top;
        const windowHeight = window.innerHeight;
        setIsFooterVisible(footerTop < windowHeight);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <div  className="container header__container">
        <h2>The simplest way to get started with your</h2>
        <h1>Home EV Charging Station</h1>
        <h4 className="text-light">
          Energywise provides personalized solutions and expert guidance for all your EV charging needs.
        </h4>
        <CTA />
        <div className="me">
          <img src={ME} alt="me" className="animate_" />
        </div>
      </div>
      <a href="#contact" className={`scroll__down ${isFooterVisible ? "black" : ""}`}>
        <FaArrowDown className="arrow" />
      </a>
    </header>
  );
};

export default Header;
