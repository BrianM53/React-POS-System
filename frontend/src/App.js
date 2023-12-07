import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-svg-core/styles.css';

import Header from './components/app/header';
import './App.css'

/**
 * Main application component representing the home page.
 * @component
 * @returns {React.ReactNode} JSX element.
 */
const App = () => {
  localStorage.setItem('activePage', "Home");
  
  return (
    <div>
      
      <Header />

      <div className='main-stage'>

        <div className='left-content'> 

          <div className='big-plate-container'>
            <div className='big-plate-img-shadow'>
              <div class="big-plate-img-container">
                <img class={localStorage.getItem("color-style") === "dark" ? "big-plate-img" : "big-plate-img-bright"} 
                src='/hd-oreo-crepe.png' alt="Oreo Crepe on a plate" />
              </div>
            </div>
          </div>  
          
        </div>
        <div className='right-content'>
          <div className='big-plate-info-container'>

            <div>
              <h2 className='big-plate-info-title'>
                Oreo Cookies n' Cream
              </h2>
              <div className='big-plate-info-desc'>
                Oreo cookie crumbles and vanilla cream filling.
              </div>
            </div>

            <div className='big-plate-info-order-container'>
              <Link to="/order-now" className='big-plate-order-now-btn'>
                <div>Order Now</div>
              </Link> 
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default App;