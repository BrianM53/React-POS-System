import React from 'react';
import { useState, useRef, useEffect } from 'react';
import NavOptions from './components/utility/navOptions';
import './App.css'
import SpecialFontText from "./components/specialFontText/SpecialFontText";
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import '@fortawesome/fontawesome-svg-core/styles.css';

import Header from './components/utility/header';
import Donate from './donateContainer';
import PopularItems from './popularItemsContainer';
import MainContent from './mainContainer';
import Footer from './footerContainer';

const App = () => {

  const [email, setEmail] = useState('');

  const clearInput = () => {
    setEmail('');
  };

  useEffect(() => {
    document.body.style.zoom = "65%";
  }, []);

  return (
    <div className="menu-body">

      <Header />
      <main className="menu-main-app">
        <div className="popular-items-container">            
          <PopularItems />
        </div>

        <div className="menu-main-app-square-5">
          <MainContent />
        </div>

        <div className="menu-main-app-square-9">
          <Donate />
        </div>

      </main>


      <footer className="menu-footer">
        <Footer />
      </footer>
    </div>
  );
};

export default App;