import React, { useState } from "react";
import { Modal, Button, Card, Collapse, Descriptions } from "antd";
import "./stations.css";

const data = [
  {
    id: 1,
    name: "Station 1",
    technicalSpecifications: {
      provider: "Provider 1",
      model: "Model 1",
      phase: "Phase 1",
      voltage: "Voltage 1",
      power: "Power 1",
      amperage: "Amperage 1",
      height: "Height 1",
      width: "Width 1",
      depth: "Depth 1",
      weight: "Weight 1",
    },
    connectivity: {
      cableLength: "Cable Length 1",
      ethernetConnection: "Ethernet Connection 1",
      bluetoothConnection: "Bluetooth Connection 1",
      wirelessConnection: "Wireless Connection 1",
      wlanConnection: "WLAN Connection 1",
      "4g": "4G 1",
      appConnection: "App Connection 1",
      authenticationRFID: "Authentication RFID 1",
    },
    moreInfo: {
      authenticationApp: "Authentication App 1",
      energyMeterOptional: "Energy Meter Optional 1",
      installationEfficiency: "Installation Efficiency 1",
      facialRecognition: "Facial Recognition 1",
      gestureControl: "Gesture Control 1",
      connectorsCompatib: "Connectors Compatib 1",
      extraHardware: "Extra Hardware 1",
      nema4Weatherproof: "NEMA 4 or Weatherproof 1",
      integrationSmartBuilding: "Integration in Smart Building 1",
      integrationPV: "Integration with PV 1",
      appFeature1: "App Feature 1",
      appFeature2: "App Feature 2",
      dynamicLoadManagement: "Dynamic Load Management (DLM) 1",
      chargingAtLowPeakTimes: "Charging at Low Peak Times 1",
      biDirectionalCharging: "Bi-directional Charging 1",
      delivery: "Delivery 1",
      kfwFunding: "KFW Funding 1",
      source: "Source 1",
      source2: "Source 2",
      notes: "Notes 1",
    },
  },
  {
    id: 2,
    name: "Station 2",
    technicalSpecifications: {
      provider: "Provider 1",
      model: "Model 1",
      phase: "Phase 1",
      voltage: "Voltage 1",
      power: "Power 1",
      amperage: "Amperage 1",
      height: "Height 1",
      width: "Width 1",
      depth: "Depth 1",
      weight: "Weight 1",
    },
    connectivity: {
      cableLength: "Cable Length 1",
      ethernetConnection: "Ethernet Connection 1",
      bluetoothConnection: "Bluetooth Connection 1",
      wirelessConnection: "Wireless Connection 1",
      wlanConnection: "WLAN Connection 1",
      "4g": "4G 1",
      appConnection: "App Connection 1",
      authenticationRFID: "Authentication RFID 1",
    },
    moreInfo: {
      authenticationApp: "Authentication App 1",
      energyMeterOptional: "Energy Meter Optional 1",
      installationEfficiency: "Installation Efficiency 1",
      facialRecognition: "Facial Recognition 1",
      gestureControl: "Gesture Control 1",
      connectorsCompatib: "Connectors Compatib 1",
      extraHardware: "Extra Hardware 1",
      nema4Weatherproof: "NEMA 4 or Weatherproof 1",
      integrationSmartBuilding: "Integration in Smart Building 1",
      integrationPV: "Integration with PV 1",
      appFeature1: "App Feature 1",
      appFeature2: "App Feature 2",
      dynamicLoadManagement: "Dynamic Load Management (DLM) 1",
      chargingAtLowPeakTimes: "Charging at Low Peak Times 1",
      biDirectionalCharging: "Bi-directional Charging 1",
      delivery: "Delivery 1",
      kfwFunding: "KFW Funding 1",
      source: "Source 1",
      source2: "Source 2",
      notes: "Notes 1",
    },
  },
  {
    id: 3,
    name: "Station 3",
    technicalSpecifications: {
      provider: "Provider 1",
      model: "Model 1",
      phase: "Phase 1",
      voltage: "Voltage 1",
      power: "Power 1",
      amperage: "Amperage 1",
      height: "Height 1",
      width: "Width 1",
      depth: "Depth 1",
      weight: "Weight 1",
    },
    connectivity: {
      cableLength: "Cable Length 1",
      ethernetConnection: "Ethernet Connection 1",
      bluetoothConnection: "Bluetooth Connection 1",
      wirelessConnection: "Wireless Connection 1",
      wlanConnection: "WLAN Connection 1",
      "4g": "4G 1",
      appConnection: "App Connection 1",
      authenticationRFID: "Authentication RFID 1",
    },
    moreInfo: {
      authenticationApp: "Authentication App 1",
      energyMeterOptional: "Energy Meter Optional 1",
      installationEfficiency: "Installation Efficiency 1",
      facialRecognition: "Facial Recognition 1",
      gestureControl: "Gesture Control 1",
      connectorsCompatib: "Connectors Compatib 1",
      extraHardware: "Extra Hardware 1",
      nema4Weatherproof: "NEMA 4 or Weatherproof 1",
      integrationSmartBuilding: "Integration in Smart Building 1",
      integrationPV: "Integration with PV 1",
      appFeature1: "App Feature 1",
      appFeature2: "App Feature 2",
      dynamicLoadManagement: "Dynamic Load Management (DLM) 1",
      chargingAtLowPeakTimes: "Charging at Low Peak Times 1",
      biDirectionalCharging: "Bi-directional Charging 1",
      delivery: "Delivery 1",
      kfwFunding: "KFW Funding 1",
      source: "Source 1",
      source2: "Source 2",
      notes: "Notes 1",
    },
  },
  {
    id: 4,
    name: "Station 4",
    technicalSpecifications: {
      provider: "Provider 1",
      model: "Model 1",
      phase: "Phase 1",
      voltage: "Voltage 1",
      power: "Power 1",
      amperage: "Amperage 1",
      height: "Height 1",
      width: "Width 1",
      depth: "Depth 1",
      weight: "Weight 1",
    },
    connectivity: {
      cableLength: "Cable Length 1",
      ethernetConnection: "Ethernet Connection 1",
      bluetoothConnection: "Bluetooth Connection 1",
      wirelessConnection: "Wireless Connection 1",
      wlanConnection: "WLAN Connection 1",
      "4g": "4G 1",
      appConnection: "App Connection 1",
      authenticationRFID: "Authentication RFID 1",
    },
    moreInfo: {
      authenticationApp: "Authentication App 1",
      energyMeterOptional: "Energy Meter Optional 1",
      installationEfficiency: "Installation Efficiency 1",
      facialRecognition: "Facial Recognition 1",
      gestureControl: "Gesture Control 1",
      connectorsCompatib: "Connectors Compatib 1",
      extraHardware: "Extra Hardware 1",
      nema4Weatherproof: "NEMA 4 or Weatherproof 1",
      integrationSmartBuilding: "Integration in Smart Building 1",
      integrationPV: "Integration with PV 1",
      appFeature1: "App Feature 1",
      appFeature2: "App Feature 2",
      dynamicLoadManagement: "Dynamic Load Management (DLM) 1",
      chargingAtLowPeakTimes: "Charging at Low Peak Times 1",
      biDirectionalCharging: "Bi-directional Charging 1",
      delivery: "Delivery 1",
      kfwFunding: "KFW Funding 1",
      source: "Source 1",
      source2: "Source 2",
      notes: "Notes 1",
    },
  },
  {
    id: 5,
    name: "Station 5",
    technicalSpecifications: {
      provider: "Provider 1",
      model: "Model 1",
      phase: "Phase 1",
      voltage: "Voltage 1",
      power: "Power 1",
      amperage: "Amperage 1",
      height: "Height 1",
      width: "Width 1",
      depth: "Depth 1",
      weight: "Weight 1",
    },
    connectivity: {
      cableLength: "Cable Length 1",
      ethernetConnection: "Ethernet Connection 1",
      bluetoothConnection: "Bluetooth Connection 1",
      wirelessConnection: "Wireless Connection 1",
      wlanConnection: "WLAN Connection 1",
      "4g": "4G 1",
      appConnection: "App Connection 1",
      authenticationRFID: "Authentication RFID 1",
    },
    moreInfo: {
      authenticationApp: "Authentication App 1",
      energyMeterOptional: "Energy Meter Optional 1",
      installationEfficiency: "Installation Efficiency 1",
      facialRecognition: "Facial Recognition 1",
      gestureControl: "Gesture Control 1",
      connectorsCompatib: "Connectors Compatib 1",
      extraHardware: "Extra Hardware 1",
      nema4Weatherproof: "NEMA 4 or Weatherproof 1",
      integrationSmartBuilding: "Integration in Smart Building 1",
      integrationPV: "Integration with PV 1",
      appFeature1: "App Feature 1",
      appFeature2: "App Feature 2",
      dynamicLoadManagement: "Dynamic Load Management (DLM) 1",
      chargingAtLowPeakTimes: "Charging at Low Peak Times 1",
      biDirectionalCharging: "Bi-directional Charging 1",
      delivery: "Delivery 1",
      kfwFunding: "KFW Funding 1",
      source: "Source 1",
      source2: "Source 2",
      notes: "Notes 1",
    },
  },
  {
    id: 6,
    name: "Station 6",
    technicalSpecifications: {
      provider: "Provider 1",
      model: "Model 1",
      phase: "Phase 1",
      voltage: "Voltage 1",
      power: "Power 1",
      amperage: "Amperage 1",
      height: "Height 1",
      width: "Width 1",
      depth: "Depth 1",
      weight: "Weight 1",
    },
    connectivity: {
      cableLength: "Cable Length 1",
      ethernetConnection: "Ethernet Connection 1",
      bluetoothConnection: "Bluetooth Connection 1",
      wirelessConnection: "Wireless Connection 1",
      wlanConnection: "WLAN Connection 1",
      "4g": "4G 1",
      appConnection: "App Connection 1",
      authenticationRFID: "Authentication RFID 1",
    },
    moreInfo: {
      authenticationApp: "Authentication App 1",
      energyMeterOptional: "Energy Meter Optional 1",
      installationEfficiency: "Installation Efficiency 1",
      facialRecognition: "Facial Recognition 1",
      gestureControl: "Gesture Control 1",
      connectorsCompatib: "Connectors Compatib 1",
      extraHardware: "Extra Hardware 1",
      nema4Weatherproof: "NEMA 4 or Weatherproof 1",
      integrationSmartBuilding: "Integration in Smart Building 1",
      integrationPV: "Integration with PV 1",
      appFeature1: "App Feature 1",
      appFeature2: "App Feature 2",
      dynamicLoadManagement: "Dynamic Load Management (DLM) 1",
      chargingAtLowPeakTimes: "Charging at Low Peak Times 1",
      biDirectionalCharging: "Bi-directional Charging 1",
      delivery: "Delivery 1",
      kfwFunding: "KFW Funding 1",
      source: "Source 1",
      source2: "Source 2",
      notes: "Notes 1",
    },
  },
  {
    id: 7,
    name: "Station 7",
    technicalSpecifications: {
      provider: "Provider 1",
      model: "Model 1",
      phase: "Phase 1",
      voltage: "Voltage 1",
      power: "Power 1",
      amperage: "Amperage 1",
      height: "Height 1",
      width: "Width 1",
      depth: "Depth 1",
      weight: "Weight 1",
    },
    connectivity: {
      cableLength: "Cable Length 1",
      ethernetConnection: "Ethernet Connection 1",
      bluetoothConnection: "Bluetooth Connection 1",
      wirelessConnection: "Wireless Connection 1",
      wlanConnection: "WLAN Connection 1",
      "4g": "4G 1",
      appConnection: "App Connection 1",
      authenticationRFID: "Authentication RFID 1",
    },
    moreInfo: {
      authenticationApp: "Authentication App 1",
      energyMeterOptional: "Energy Meter Optional 1",
      installationEfficiency: "Installation Efficiency 1",
      facialRecognition: "Facial Recognition 1",
      gestureControl: "Gesture Control 1",
      connectorsCompatib: "Connectors Compatib 1",
      extraHardware: "Extra Hardware 1",
      nema4Weatherproof: "NEMA 4 or Weatherproof 1",
      integrationSmartBuilding: "Integration in Smart Building 1",
      integrationPV: "Integration with PV 1",
      appFeature1: "App Feature 1",
      appFeature2: "App Feature 2",
      dynamicLoadManagement: "Dynamic Load Management (DLM) 1",
      chargingAtLowPeakTimes: "Charging at Low Peak Times 1",
      biDirectionalCharging: "Bi-directional Charging 1",
      delivery: "Delivery 1",
      kfwFunding: "KFW Funding 1",
      source: "Source 1",
      source2: "Source 2",
      notes: "Notes 1",
    },
  },
  // Add more station objects here
];

const { Panel } = Collapse;


export default function StationModal({ visible, onClose }) {
  const [selectedStation, setSelectedStation] = useState(null);

  const handleStationClick = (station) => {
    setSelectedStation(station === selectedStation ? null : station);
  };

  const renderAttribute = (label, value) => {
    if (value) {
      return (
        <Descriptions.Item label={label} key={label}>
          {value}
        </Descriptions.Item>
      );
    }
    return null;
  };

  const renderCollapsePanel = (header, attributes) => {
    return (
      <Collapse bordered={false} expandIconPosition="right" ghost>
        <Panel header={header} key={header} className="collapse-panel">
          <Descriptions column={1} colon={false} bordered={false}>
            {attributes}
          </Descriptions>
        </Panel>
      </Collapse>
    );
  };

  const renderMoreInfo = (station) => {
    if (station && station.moreInfo) {
      const attributes = Object.entries(station.moreInfo).map(([label, value]) =>
        renderAttribute(label, value)
      );
      return renderCollapsePanel("More Info", attributes);
    }
    return null;
  };

  const renderStationCard = (station) => {
    const isExpanded = station === selectedStation;

    return (
      <Card
        key={station.id}
        onClick={() => handleStationClick(station)}
        title={station.name}
        className={`services__item stations-modal__card ${
          isExpanded ? "expanded" : ""
        }`}
      >
        {renderCollapsePanel(
          "Technical Specifications",
          Object.entries(station.technicalSpecifications).map(
            ([label, value]) => renderAttribute(label, value)
          )
        )}
        {renderCollapsePanel(
          "Connectivity",
          Object.entries(station.connectivity).map(([label, value]) =>
            renderAttribute(label, value)
          )
        )}
        {renderMoreInfo(station)}
      </Card>
    );
  };

  return (
    <Modal
      open={visible}
      title={selectedStation && selectedStation.name}
      footer={[
        <Button key="close" onClick={onClose}>
          Close
        </Button>,
      ]}
      onCancel={onClose}
      className="stations-modal"
    >
      <div className="stations-modal__content">
        {data.map((station) => renderStationCard(station))}
      </div>
    </Modal>
  );
}