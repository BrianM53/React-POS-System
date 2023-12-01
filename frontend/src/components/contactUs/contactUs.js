import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './contactUs.css';
import SpecialFontText from "../../fonts/specialFontText/SpecialFontText";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Header from '../app/header';
import Socials from '../socials/socials';
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
          <div className="contactus-right-container">
            <div className="contact-form-container">
              <SpecialFontText as="div" className="contact-form-title" fontSize="2.25rem">
                Can we cater your next gathering?
              </SpecialFontText>
              <form onSubmit={handleSubmit} className="form-container">
                  <div className='top-row-form-data'>
                    <div className='name-container'>
                      <label htmlFor="Name"></label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder='Name'
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className='email-container'>
                      <label htmlFor="email"></label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder='Email'
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className='message-container'>
                    <label htmlFor="message"></label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder='Message'
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <button className="form-submit-button" type="submit">Submit</button>
              </form>
            </div>

          </div>
        </div>
        <Socials />

        {/* <div className='contact-us-filler-block' /> */}
      </main>
    </div>
  );
};

export default ContactUs;