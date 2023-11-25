import React from 'react';
import { useState, useRef, useEffect } from 'react';
import './App.css'
import SpecialFontText from "./components/specialFontText/SpecialFontText";
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import '@fortawesome/fontawesome-svg-core/styles.css';

import Header from './components/app/header';
import Donate from './components/app/donate';
import PopularItems from './components/app/popular';
import MainContent from './components/app/main';
import Footer from './components/app/footer';

const App = () => {
  return (
    <Header />
  );
};

export default App;