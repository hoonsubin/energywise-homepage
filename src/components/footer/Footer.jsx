/* eslint-disable no-unused-vars */
import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer id="footer">
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#testimonials">Our Partners</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebookF/></a>
        <a href="https://instagram.com"><FiInstagram/></a>
        <a href="https://twitter.com"><IoLogoTwitter/></a>npm start
        
      </div> */}

      <div className="footer__copyright">
        <small> © Copyright 2023 energywise | The EVolution of charging.</small>
      </div>
    </footer>
  )
}

export default Footer