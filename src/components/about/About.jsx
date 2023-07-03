import React from "react";
import "./about.css";
import ME from "../../assets/HM_Logo_RGB.png";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Us</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <p className="about_para">
            With Energywise, we simplify the process of finding the perfect
            charging station for your electric vehicle (EV) in Germany. With
            numerous providers and complex regulations, it can be challenging to
            navigate the charging landscape. That's why we've created a
            comprehensive platform that brings together all the information you
            need, making it easier than ever to discover and select the ideal
            charging station. Our platform offers a wide range of charging
            stations with detailed information on features, availability,
            pricing, and user reviews. At Energywise, we believe in accessible
            and sustainable mobility for all. Join us on our mission to
            accelerate the adoption of electric vehicles and create a cleaner,
            greener future. Experience the convenience, simplicity, and
            efficiency of finding the right charging station for your EV with
            Energywise.
          </p>
          <a href="#contact" className="btn btn-primary">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
