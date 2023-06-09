import React, { useEffect, useState } from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import "./HeaderSocials.css";

const HeaderSocials = () => {
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footerElement = document.querySelector("footer");
      if (footerElement) {
        const footerRect = footerElement.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const footerTop = footerRect.top;
        const footerHeight = footerRect.height;
        const footerVisibilityThreshold = windowHeight - (footerHeight * 0.3); // Set the visibility threshold to 30% of the footer height

        setIsFooterVisible(footerTop < footerVisibilityThreshold);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`header__socials ${isFooterVisible ? "black" : ""}`}>
      <a href="https://linkedin.com" target="_blank" rel="noreferrer">
        <BsLinkedin className="ld" />
      </a>
      <a href="https://github.com/hoonsubin/energywise-homepage" target="_blank" rel="noreferrer">
        <FaGithub className="git" />
      </a>
    </div>
  );
};

export default HeaderSocials;
