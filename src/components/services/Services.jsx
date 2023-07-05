/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import "./services.css";
import IMG1 from "../../assets/Businessman-pana.png";
import IMG2 from "../../assets/Electric car-rafiki.png";
import IMG3 from "../../assets/Electrician-amico.png";
import TechnicianModal from "../technicians/technicians";
import Stations from "./ChargingStation/stations";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Charging Station Assessment",
    about:
      "This survey will ask the customer questions about their daily driving habits, the type of EV they own, their home's electrical setup, and other relevant factors to determine the most suitable charging options for them.",
    link: "https://app.energywise.solutions/survey",
  },
  {
    id: 2,
    image: IMG2,
    title: "Charging Station Directory",
    about:
      "energywise will provide the customer with a list of charging station hardware and software options that best meet their needs, along with pricing information and installation options.",
    link: "https://app.energywise.solutions/station",
  },
  {
    id: 3,
    image: IMG3,
    title: "Electrician Directory",
    about:
      "By simply entering their location, customers can access a list of reliable technicians in their area, complete with contact information and customer reviews.",
    link: "https://app.energywise.solutions/technicians",
  },
];


const Services = () => {
  const [selectedItemId, setSelectedItemId] = useState(null);
  const selectedItem = data.find((item) => item.id === selectedItemId);

  const handleItemClick = (itemId) => {
    setSelectedItemId(itemId);
  };

  const handleCloseModal = () => {
    setSelectedItemId(null);
  };

  return (
    <section id="services">
      <h5>Explore</h5>
      <h2>Our Services</h2>

      <div className="container services__container">
        {data.map(({ id, image, title, about, link }) => {
          return (
            <a
              key={id}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="services__item"
              onClick={() => handleItemClick(id)}
            >
              <div className="services__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="services__item-cta">
                <p> {about} </p>
              </div>
            </a>
          );
        })}

        {/* {selectedItemId === 2 && (
          <Stations
            visible={selectedItemId !== null}
            onClose={handleCloseModal}
          />
        )}

        {selectedItemId === 3 && (
          <TechnicianModal
            technician={selectedItem}
            visible={selectedItemId !== null}
            onClose={handleCloseModal}
          />
        )} */}
      </div>
    </section>
  );
};

export default Services;
