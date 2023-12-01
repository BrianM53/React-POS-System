import React from 'react';
import { useState, useRef, useEffect } from 'react';
import './App.css'
import SpecialFontText from "./fonts/specialFontText/SpecialFontText";
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import '@fortawesome/fontawesome-svg-core/styles.css';

import Header from './components/app/header';
import Donate from './components/app/donate';
import PopularItems from './components/app/popular';
import Footer from './components/socials/socials';

const App = () => {
  return (
    <div>
      
      <Header />

      <div className='main-stage'>

        <div className='left-content'> 

          <div className='big-plate-container'>
            <div className='big-plate-img-shadow'>
              <div class="big-plate-img-container">
                <img class="big-plate-img" src='/hd-oreo-crepe.png' alt="Oreo Crepe on a plate" />
              </div>
            </div>
          </div>  
          
        </div>
        <div className='right-content'>
          <div className='big-plate-info-container'>

            <div>
              <div className='big-plate-info-title'>
                Oreo Cookies n' Cream
              </div>
              <div className='big-plate-info-desc'>
                Oreo cookie crumbles and vanilla cream filling.
              </div>
            </div>

            <div className='big-plate-info-order-container'>
              <Link to="/order-now" className='big-plate-order-now-btn'>
                <div>Order Now</div>
              </Link> 
            </div>

            {/* <div className='big-plate-order-now-btn-container'>
            </div> */}

          </div>
        </div>
      </div>
    </div>
  );
};

export default App;