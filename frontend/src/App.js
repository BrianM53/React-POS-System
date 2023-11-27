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
          <div>
            rightttttttrightttttttrightttttttrightttttttrightttttttrightttttttrightttttttrightttttttrightttttttrightttttttrightttttttrightttttttrighttttttt
          </div>
          <div>
            righttttttt
          </div>
        </div>

      </div>
    </div>
  );
};

export default App;