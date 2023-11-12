import React from 'react';
import { useState } from 'react';
import NavOptions from '../utility/navOptions';
import { Link } from 'react-router-dom';
import './contactUs.css';
import SpecialFontText from "../specialFontText/SpecialFontText";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
library.add(fas,fab); 

const ContactUs = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormData({
      name: '',
      email: '',
      phoneNumber: '',
      message: ''
    });

  }

  return (
    <div className="menu-body">
      <SpecialFontText as="header" className="menu-header" >
          Welcome to the Sweet Paris Cafe!
      </SpecialFontText>
      <nav className="menu-nav">
        <Link to="/settings">
            <FontAwesomeIcon icon={['fas', 'gear']} className="fa-2x" id="menu-nav-settings-icon" />
        </Link>
        <Link to="/app">
            <FontAwesomeIcon icon={['fas', 'home']} className="fa-2x" id="menu-nav-home-icon" />
        </Link>
        <SpecialFontText as="div" className="menu-nav-title">
          Sweet Paris: Crepes and Cafe
        </SpecialFontText>
        <NavOptions />
      </nav>
      <main className="menu-main-contactus">
        <SpecialFontText as="div" className="menu-main-contactus-header" fontSize="3.5rem">
          Contact Us
        </SpecialFontText>
        <div className="menu-main-contactus-container">
        <img src="/catering3.jpeg" alt="happy customers" className="contactus-image"/>
          <div className="contactus-left-container">
            <div className="menu-main-contactus-entry" id="menu-main-contactus-entry-1">
              <div className="title-container">

                <SpecialFontText as="div" className="big-title" fontSize="3.5rem">
                  Love the restaurant?
                </SpecialFontText>
                <div className="small-title">
                  Feel free to shout us out on social media!
                </div>
              </div>
              <div className="rest-container">
                <div className="rest">
                  Instagram: @SweetParisCrepery
                </div>
                <div className="rest">
                  Twitter: @SweetParisCollegeStation
                </div>
                <div className="rest">
                  Facebook: SweetParisCrepery - College Station
                </div>
                <div className="rest">
                  TikTok: sweet_paris_college_station
                </div>
              </div>
            </div>
          </div> 
          <div className="contactus-right-container">
            <div className="contact-form-container">
              <div className="contact-form-title">
                Can we cater your next gathering?
              </div>
              <form onSubmit={handleSubmit} className="form-container">
                <label htmlFor="Name">Name:</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />

                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />

                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                    />

                    <label htmlFor="message">Message:</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>

                    <button className="form-submit-button" type="submit">Submit</button>
              </form>
            </div>
          </div>
          <img src="/catering1.jpeg" alt="spread of catering" className="contactus-image"/>
        </div>
      </main>
      <footer className="menu-footer">
        <SpecialFontText as="div" className="menu-footer-message">
            Get in touch with us! Follow us on:
        </SpecialFontText>
        <div className="menu-footer-container">
          <FontAwesomeIcon icon={['fab', 'instagram']} className="fa-2x menu-footer-smlink-icon" id="menu-footer-instagram" />
          <FontAwesomeIcon icon={['fab', 'twitter']} className="fa-2x menu-footer-smlink-icon" id="menu-footer-twitter" />
          <FontAwesomeIcon icon={['fab', 'facebook']} className="fa-2x menu-footer-smlink-icon" id="menu-footer-facebook" />
          <FontAwesomeIcon icon={['fab', 'tiktok']} className="fa-2x menu-footer-smlink-icon" id="menu-footer-tiktok" />
         </div>
      </footer>
    </div>
  );
};

export default ContactUs;