import React, { useEffect, useRef } from "react";
import Header from "./components/header/Header";
import HeaderSocial from "./components/header/HeaderSocials";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import TopHeader from "./components/top/TopHeader";
import Services from "./components/services/Services";

const App = () => {
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight;

    if (servicesRef.current) {
      if (
        servicesRef.current.offsetTop < scrollPosition &&
        servicesRef.current.offsetTop + servicesRef.current.offsetHeight >
          window.scrollY
      ) {
        servicesRef.current.classList.add("animate-visible");
      } else {
        servicesRef.current.classList.remove("animate-visible");
      }
    }

    if (aboutRef.current) {
      if (
        aboutRef.current.offsetTop < scrollPosition &&
        aboutRef.current.offsetTop + aboutRef.current.offsetHeight >
          window.scrollY
      ) {
        aboutRef.current.classList.add("animate-visible");
      } else {
        aboutRef.current.classList.remove("animate-visible");
      }
    }

    if (testimonialsRef.current) {
      if (
        testimonialsRef.current.offsetTop < scrollPosition &&
        testimonialsRef.current.offsetTop +
          testimonialsRef.current.offsetHeight >
          window.scrollY
      ) {
        testimonialsRef.current.classList.add("animate-visible");
      } else {
        testimonialsRef.current.classList.remove("animate-visible");
      }
    }

    if (contactRef.current) {
      if (
        contactRef.current.offsetTop < scrollPosition &&
        contactRef.current.offsetTop + contactRef.current.offsetHeight >
          window.scrollY
      ) {
        contactRef.current.classList.add("animate-visible-reverse");
      } else {
        contactRef.current.classList.remove("animate-visible-reverse");
      }
    }

    if (footerRef.current) {
      if (
        footerRef.current.offsetTop < scrollPosition &&
        footerRef.current.offsetTop + footerRef.current.offsetHeight >
          window.scrollY
      ) {
        footerRef.current.classList.add("animate-visible-reverse");
      } else {
        footerRef.current.classList.remove("animate-visible-reverse");
      }
    }
  };

  return (
    <>
      <TopHeader />
      <Header/>
      <HeaderSocial />
      <Nav />
      <div id="services" ref={servicesRef} className="animate">
        <Services />
      </div>
      <div id="about" ref={aboutRef} className="animate">
        <About />
      </div>
      <div id="testimonials" ref={testimonialsRef} className="animate">
        <Testimonials />
      </div>
      <div id="contact" ref={contactRef} className="animate-reverse">
        <Contact />
      </div>
      <div id="footer" ref={footerRef} className="animate-reverse">
        <Footer />
      </div>
    </>
  );
};

export default App;
