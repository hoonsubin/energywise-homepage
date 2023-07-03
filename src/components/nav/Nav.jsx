import "./nav.css";
import React, { useState, useEffect } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BsGear } from "react-icons/bs";
import { BiMessageSquareDetail } from "react-icons/bi";

const debounce = (func, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const Nav = () => {
  const [activeNav, setActiveNav] = useState("");

  useEffect(() => {
    const handleScroll = debounce(() => {
      const scrollPosition = window.scrollY;
      const currentDivs = ["about", "contact", "services", "#"];
      let newActiveNav = "#";

      currentDivs.forEach((id) => {
        const div = document.getElementById(id);

        if (div) {
          const divTop = div.offsetTop - div.offsetHeight / 2;
          const divHeight = div.offsetHeight;

          if (scrollPosition >= divTop && scrollPosition < divTop + divHeight) {
            newActiveNav = `#${id}`;
          }
        }
      });

      setActiveNav(newActiveNav);
    }, 200);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <BsGear />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
