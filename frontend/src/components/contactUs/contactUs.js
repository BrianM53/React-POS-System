import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './contactUs.css';
import SpecialFontText from "../specialFontText/SpecialFontText";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Header from '../app/header';
library.add(fas,fab); 

const ContactUs = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  // useEffect(() => {
  //   document.body.style.zoom = "80%";
  // }, []);

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

      <Header />

      <main className="menu-main-contactus">
        <SpecialFontText as="div" className="menu-main-contactus-header" fontSize="3.5rem">
          Contact Us
        </SpecialFontText>
        <div className="menu-main-contactus-container">
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
              <SpecialFontText as="div" className="contact-form-title" fontSize="2.25rem">
                Can we cater your next gathering?
              </SpecialFontText>
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
        </div>

        <div className='contact-us-filler-block' />
      </main>
    </div>
  );
};

export default ContactUs;