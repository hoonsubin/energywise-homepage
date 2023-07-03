import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import "./TopHeader.css";

const TopHeader = () => {
  const [isTranslated, setIsTranslated] = useState(false);

  useEffect(() => {
    if (window.googleTranslateElementInit) {
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "de,en",
            layout: window.google.translate.TranslateElement.InlineLayout.AUTO,
            gaTrack: false, // Disable Google logo tracking
          },
          "google_translate_element"
        );
      };
    } else {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src = `https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit`;
      document.body.appendChild(script);

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "de,en",
            layout: window.google.translate.TranslateElement.InlineLayout.AUTO,
            gaTrack: false, // Disable Google logo tracking111
          },
          "google_translate_element"
        );
      };
    }
  }, []);

  useEffect(() => {
    if (window.googleTranslateElementInit && isTranslated) {
      window.googleTranslateElementInit();
    }
  }, [isTranslated]);

  return (
    <div className="top_container">
      <div className="top_left_div">
        <span className="top_left_span">
          <img className="logo-image" alt="logo" src={logo} />
          {/* <h2>energywise</h2> */}
        </span>
      </div>
      {/* <div className="top_right_div">
        <button
          id="google_translate_element"
          className="translate-button"
          onClick={() => setIsTranslated(!isTranslated)}
        >
        </button>
      </div> */}
    </div>
  );
};

export default TopHeader;
