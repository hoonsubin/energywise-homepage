import React from 'react';
import './NavigationHeader.css';
import logo from '../../assets/logo.png'; 

const NavigationHeader = () => {
  return (
    <header className="navigation-header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="sign-in-container">
        <button className="sign-in-button">Sign In</button>
      </div>
    </header>
  );
};

export default NavigationHeader;
