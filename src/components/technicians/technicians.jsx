import { useState } from "react";
import { Modal, Button, Card } from "antd";
import "./technicians.css";

const data = [
  {
    id: 1,
    name: "Technician 1",
    address: "123 Main Street",
    postalCode: "12345",
    city: "City 1",
    phone: "123-456-7890",
    email: "technician1@example.com",
    csSupport1: "Support 1",
    csSupport2: "",
    csSupport3: "",
    csSupport4: "Support 4",
    website: "https://www.example.com",
  },
  {
    id: 2,
    name: "Technician 2",
    address: "456 Elm Street",
    postalCode: "67890",
    city: "City 2",
    phone: "987-654-3210",
    email: "technician2@example.com",
    csSupport1: "",
    csSupport2: "Support 2",
    csSupport3: "Support 3",
    csSupport4: "",
    website: "https://www.example.com",
  },
  {
    id: 3,
    name: "Technician 1",
    address: "123 Main Street",
    postalCode: "12345",
    city: "City 1",
    phone: "123-456-7890",
    email: "technician1@example.com",
    csSupport1: "Support 1",
    csSupport2: "",
    csSupport3: "",
    csSupport4: "Support 4",
    website: "https://www.example.com",
  },
  {
    id: 4,
    name: "Technician 2",
    address: "456 Elm Street",
    postalCode: "67890",
    city: "City 2",
    phone: "987-654-3210",
    email: "technician2@example.com",
    csSupport1: "",
    csSupport2: "Support 2",
    csSupport3: "Support 3",
    csSupport4: "",
    website: "https://www.example.com",
  },
  {
    id: 5,
    name: "Technician 1",
    address: "123 Main Street",
    postalCode: "12345",
    city: "City 1",
    phone: "123-456-7890",
    email: "technician1@example.com",
    csSupport1: "Support 1",
    csSupport2: "",
    csSupport3: "",
    csSupport4: "Support 4",
    website: "https://www.example.com",
  },
  {
    id: 6,
    name: "Technician 2",
    address: "456 Elm Street",
    postalCode: "67890",
    city: "City 2",
    phone: "987-654-3210",
    email: "technician2@example.com",
    csSupport1: "",
    csSupport2: "Support 2",
    csSupport3: "Support 3",
    csSupport4: "",
    website: "https://www.example.com",
  },
];

export default function TechnicianModal({ visible, onClose }) {
  const [selectedTechnician, setSelectedTechnician] = useState(null);

  const handleTechnicianClick = (technician) => {
    setSelectedTechnician(technician);
  };

  return (
    <Modal
      open={visible}
      title={selectedTechnician && selectedTechnician.name}
      footer={[
        <Button key="close" onClick={onClose}>
          Close
        </Button>,
      ]}
      onCancel={onClose}
      className="technician-modal"
    >
      <div className="technician-modal__content ">
        {data.map((technician) => (
          <Card
            key={technician.id}
            onClick={() => handleTechnicianClick(technician)}
            title={technician.name}
            className="services__item technician-modal__card"
          >
            {technician.address && (
              <p>
                <strong>Address:</strong> {technician.address}
              </p>
            )}
            {technician.postalCode && (
              <p>
                <strong>Postal Code:</strong> {technician.postalCode}
              </p>
            )}
            {technician.city && (
              <p>
                <strong>City:</strong> {technician.city}
              </p>
            )}
            {technician.phone && (
              <p>
                <strong>Phone:</strong> {technician.phone}
              </p>
            )}
            {technician.email && (
              <p>
                <strong>Email:</strong> {technician.email}
              </p>
            )}
            {technician.csSupport1 && (
              <p>
                <strong>CS Support 1:</strong> {technician.csSupport1}
              </p>
            )}
            {technician.csSupport2 && (
              <p>
                <strong>CS Support 2:</strong> {technician.csSupport2}
              </p>
            )}
            {technician.csSupport3 && (
              <p>
                <strong>CS Support 3:</strong> {technician.csSupport3}
              </p>
            )}
            {technician.csSupport4 && (
              <p>
                <strong>CS Support 4:</strong> {technician.csSupport4}
              </p>
            )}
            {technician.website && (
              <p>
                <strong>Website:</strong>{" "}
                <a href={technician.website}>{technician.website}</a>
              </p>
            )}
            <hr />
          </Card>
        ))}
      </div>
    </Modal>
  );
}
