import React from 'react';
import { useState, useRef, useEffect } from 'react';
import NavOptions from './components/utility/navOptions';
import './App.css'
import SpecialFontText from "./components/specialFontText/SpecialFontText";
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Weather from './components/weather/Weather';
library.add(fas,fab); 

const App = () => {

  const [email, setEmail] = useState('');

  const clearInput = () => {
    setEmail('');
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef(null);

  const handleScroll = (direction) => {
    const container = scrollContainerRef.current;

    if (container) {
      const scrollAmount = direction === 'right' ? 200 : -200;
      container.scrollLeft += scrollAmount;
      setScrollPosition(container.scrollLeft);
    }
  };

  const [scrollPosition2, setScrollPosition2] = useState(0);
  const scrollContainerRef2 = useRef(null);

  const handleScroll2 = (direction) => {
    const container = scrollContainerRef2.current;

    if (container) {
      const scrollAmount = direction === 'right' ? 200 : -200;
      container.scrollLeft += scrollAmount;
      setScrollPosition2(container.scrollLeft);
    }
  };

  useEffect(() => {
    document.body.style.zoom = "60%";
  }, []);

  return (
    <div className="menu-body">

      <nav className="menu-nav">
        <Link to="/settings">
          <FontAwesomeIcon
            icon={["fas", "gear"]}
            className="fa-2x"
            id="menu-nav-settings-icon"
          />
        </Link>
        <Link to="/">
          <FontAwesomeIcon
            icon={["fas", "home"]}
            className="fa-2x"
            id="menu-nav-home-icon"
          />
        </Link>
        <SpecialFontText as="div" className="menu-nav-title">
          Sweet Paris: Crepes and Cafe
        </SpecialFontText>
        <NavOptions />
      </nav>
      <main className="menu-main-app">
        <div className="menu-main-app-square-1">

          <SpecialFontText as="div" className="menu-main-app-square-title" fontSize="3rem">
            Popular Picks
          </SpecialFontText>

          <div className="menu-main-app-square-description">
            Can't decide on what to order? Here's some fan favorites!
          </div>
          <div className="menu-main-app-square-container-top">
            <div className="arrow-circle" onClick={() => handleScroll('left')}>
              <FontAwesomeIcon icon={['fas', 'arrow-left']} className="fa-2x" id="back-arrow-id" />
            </div>
            <div className="menu-main-app-square-container" ref={scrollContainerRef}>

              <div className="square-container-item">
                <SpecialFontText as="div" className="square-container-item-title" fontSize="2.5rem">
                  Allison's Parfait
                </SpecialFontText>
                <img src="/allison's-parfait.jpg" alt="popular pick menu item 1" className="popular-picks-photo"  />
              </div>

              <div className="square-container-item">
                <SpecialFontText as="div" className="square-container-item-title" fontSize="2.5rem">
                  Le Mexicain
                </SpecialFontText>
                <img src="/le-mexicain.jpg" alt="popular pick menu item 1" className="popular-picks-photo"  />
              </div>

              <div className="square-container-item">
                <SpecialFontText as="div" className="square-container-item-title" fontSize="2.5rem">
                  Lemon Sugar Crepe
                </SpecialFontText>
                <img src="/lemon-and-sugar.jpg" alt="popular pick menu item 1" className="popular-picks-photo"  />
              </div> 

              <div className="square-container-item">
                <SpecialFontText as="div" className="square-container-item-title" fontSize="2.5rem">
                  Philly Cheesesteak
                </SpecialFontText>
                <img src="/philly-cheesesteak.jpg" alt="popular pick menu item 1" className="popular-picks-photo"  />
              </div>

              <div className="square-container-item">
                <SpecialFontText as="div" className="square-container-item-title" fontSize="2.5rem">
                  S'mores Crepe
                </SpecialFontText>
                <img src="/s'mores.jpg" alt="popular pick menu item 1" className="popular-picks-photo"  />
              </div> 

            </div>
            
            <div className="back-arrow-circle" onClick={() => handleScroll('right')}>
              <FontAwesomeIcon icon={['fas', 'arrow-right']} className="fa-2x" id="forward-arrow-id" />
            </div>

          </div>
        </div>

        <div className="menu-main-app-square-2"> </div>

        <div className="menu-main-app-square-3">
          <SpecialFontText as="div" className="menu-main-app-square-title" fontSize="3rem">
            Rain Check
          </SpecialFontText>

          <div className="menu-main-app-square-description">
            Planning on sitting outside today? Double check the weather!
          </div>

          < Weather />

        </div>

        <div className="menu-main-app-square-4"></div>

        <div className="menu-main-app-square-5">
          <div className="square-5-top">
            <SpecialFontText as="div" className="square-5-title" fontSize="5.4rem">
              Let Them Eat Crepes
            </SpecialFontText>
            <div className="square-5-description">
              Ready to order?
            </div>

            <Link to="/order-now">
              <button className="menu-nav-container-button" id="menu-nav-container-button-ordernow">Order Now</button>
            </Link>
            <img src="/sweetParisLocation.jpeg" alt="restaurant front" className="square-5-photo"/>
          </div>
        </div>

        <div className="menu-main-app-square-6"></div>

        <div className="menu-main-app-square-7">

          <SpecialFontText as="div" className="menu-main-app-square-title" fontSize="3rem">
              Rewards Program
          </SpecialFontText>

          <div className="menu-main-app-square-description">
            Leaving free points on the table? Try joining our rewards program!
          </div>

          <div className="rewards-container">
            <div className="rewards-step">

              <SpecialFontText as="div" className="rewards-step-title" fontSize="2rem">
                Collect Points for Purchase!
              </SpecialFontText>
              <div className="rewards-step-description">
                 Collect 1 point for every $10 spent and get a $10 reward once you reach 10 points.
              </div>
            </div>
            <div className="rewards-step">
              <SpecialFontText as="div" className="rewards-step-title" fontSize="2rem">
                Get the Inside Scoop!
              </SpecialFontText>
              <div className="rewards-step-description">
                 Keep up with our exclusive deals, monthly promotions, and special free birthday prizes!
              </div>
            </div>
          </div>

          {/* <div className="rewards-explanation">
            <label htmlFor="email" className="rewards-label">Join The Program Today!</label>
            <div className="rewards-submit-container">
               <input type="email" id="email" className="rewards-input" placeholder="someperson@gmail.com"></input>
               <button type="button" className="rewards-submit-button" onClick={clearInput}>
                  &#10003;
               </button>
            </div>
          </div> */}

        </div>

        <div className="menu-main-app-square-8"></div>

        <div className="menu-main-app-square-9">

          <SpecialFontText as="div" className="menu-main-app-square-title" fontSize="3rem">
            Buy One, We Donate One!
          </SpecialFontText>

          <div className="menu-main-app-square-description">
            Still stumped? Order one of these and we'll donate a meal!
          </div>
          <div className="menu-main-app-square-container-top">
            <div className="arrow-circle" onClick={() => handleScroll2('left')}>
              <FontAwesomeIcon icon={['fas', 'arrow-left']} className="fa-2x" id="back-arrow-id"  />
            </div>
            <div className="menu-main-app-square-container" ref={scrollContainerRef2}>

              <div className="square-container-item">
                <SpecialFontText as="div" className="square-container-item-title" fontSize="2.5rem">
                  Truffled Caprese
                </SpecialFontText>
                <img src="/truffled-caprese.jpg" alt="popular pick menu item 1" className="popular-picks-photo"  />
              </div>

              <div className="square-container-item">
                <SpecialFontText as="div" className="square-container-item-title" fontSize="2.5rem">
                  Lemon and Sugar
                </SpecialFontText>
                <img src="/lemon-and-sugar.jpg" alt="popular pick menu item 1" className="popular-picks-photo"  />
              </div>

              <div className="square-container-item">
                <SpecialFontText as="div" className="square-container-item-title" fontSize="2.5rem">
                  Allison's Parfait
                </SpecialFontText>
                <img src="/allison's-parfait.jpg" alt="popular pick menu item 1" className="popular-picks-photo"  />
              </div>

            </div>
            
            <div className="back-arrow-circle" onClick={() => handleScroll2('right')}>
              <FontAwesomeIcon icon={['fas', 'arrow-right']} className="fa-2x" id="forward-arrow-id"  />
            </div>

          </div>
        </div>
      </main>
      <footer className="menu-footer">
        <SpecialFontText as="div" className="menu-footer-message">
          Get in touch with us! Follow us on:
        </SpecialFontText>
        <div className="menu-footer-container">
          <Link to="/contact-us">
            <FontAwesomeIcon icon={['fab', 'instagram']} className="fa-2x menu-footer-smlink-icon" id="menu-footer-instagram" />
          </Link>
          <Link to="/contact-us">
            <FontAwesomeIcon icon={['fab', 'twitter']} className="fa-2x menu-footer-smlink-icon" id="menu-footer-twitter" />
          </Link>
          <Link to="/contact-us">
            <FontAwesomeIcon icon={['fab', 'facebook']} className="fa-2x menu-footer-smlink-icon" id="menu-footer-facebook" />
          </Link>
          <Link to="/contact-us">
            <FontAwesomeIcon icon={['fab', 'tiktok']} className="fa-2x menu-footer-smlink-icon" id="menu-footer-tiktok" />
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default App;