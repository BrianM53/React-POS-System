import React from 'react';
import { Link } from 'react-router-dom';
import NavOptions from '../utility/navOptions';
import { useRef, useEffect, useState } from 'react';
import './Menu.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
library.add(fas,fab); 

const Menu = () => 
{
    const [activeSection, setActiveSection] = useState('sweetCrepes');

    const refs = 
    {
        sweetCrepes: useRef(null),
        savoryCrepes: useRef(null),
        kidsCrepes: useRef(null),
        sweetParisWaffles: useRef(null),
        breakfastCrepesAndEggs: useRef(null),
        soupsSaladsAndPaninis: useRef(null),
        leBar: useRef(null),
        hotDrinksAndMilkshakes: useRef(null),
        waterAndBeverages: useRef(null),
    }

    const handleCategoryClick = (section) => {
        setActiveSection(section);
    }

    return (
        <div className="menu-body">

            <header className="menu-header">Welcome to the Sweet Paris Cafe!</header>

            <nav className="menu-nav">
            <Link to="/settings">
                <FontAwesomeIcon icon={['fas', 'gear']} className="fa-2x" id="menu-nav-settings-icon" />
            </Link>
            <Link to="/app">
                <FontAwesomeIcon icon={['fas', 'home']} className="fa-2x" id="menu-nav-home-icon" />
            </Link>
            <div className="menu-nav-title">Sweet Paris: Crepes and Cafe</div>
            <NavOptions />
            
            </nav>

            <main className="menu-main-menu">
                <div className="menu-main-menu-header">
                Menu
                </div>
                <div className="menu-main-menu-categories">
                    <div className="menu-main-menu-category" id="menu-main-menu-sweet-crepes"  onClick={() => handleCategoryClick('sweetCrepes')}>
                        Sweet Crepes
                    </div>
                    <div className="menu-main-menu-category" id="menu-main-menu-savory-crepes"  onClick={() => handleCategoryClick('savoryCrepes')}    >
                        Savory Crepes
                    </div>
                    <div className="menu-main-menu-category" id="menu-main-menu-kids-crepes"  onClick={() => handleCategoryClick('kidsCrepes')}       >
                        Kids Crepes
                    </div>
                    <div className="menu-main-menu-category" id="menu-main-menu-sweet-paris-waffles" onClick={() => handleCategoryClick('sweetParisWaffles')}        >
                        Sweet Paris Waffles
                    </div>
                    <div className="menu-main-menu-category" id="menu-main-menu-breakfast-crepes-and-eggs"  onClick={() => handleCategoryClick('breakfastCrepesAndEggs')}    >
                        Breakfast Crepes & Eggs
                    </div>
                    <div className="menu-main-menu-category" id="menu-main-menu-soups-salads-and-paninis" onClick={() => handleCategoryClick('soupsSaladsAndPaninis')}      >
                        Soups, Salads & Paninis
                    </div>
                    <div className="menu-main-menu-category" id="menu-main-menu-le-bar" onClick={() => handleCategoryClick('leBar')}    >
                        Le Bar
                    </div>
                    <div className="menu-main-menu-category" id="menu-main-menu-hot-drinks-and-milkshakes" onClick={() => handleCategoryClick('hotDrinksAndMilkshakes')}      >
                        Hot Drinks & Milkshakes
                    </div>
                    <div className="menu-main-menu-category" id="menu-main-menu-water-and-beverages" onClick={() => handleCategoryClick('waterAndBeverages')}>
                    Water & Beverages
                    </div>
                </div>

                <div className="menu-main-menu-body">

                    <div className="menu-body-category-container" id="menu-body-sweet-crepes" style={{ display: activeSection === 'sweetCrepes' ? 'flex' : 'none' }} >

                        <div className="menu-body-entry-container">
                        <img src="\sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo" />
                            <div className="menu-body-entry-description-container">
                                <div className="menu-body-entry-title">
                                Sweet Crepes
                                </div>
                                <div className="menu-body-entry-description">
                                Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                                </div>
                            </div>
                        </div>

                        <div className="menu-body-entry-container">
                            
                            <div className="menu-body-entry-description-container">
                                <div className="menu-body-entry-title">
                                Sweet Crepes
                                </div>
                                <div className="menu-body-entry-description">
                                Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
                                </div>
                            </div>
                        </div>

                        <div className="menu-body-entry-container">
                            
                            <div className="menu-body-entry-description-container">
                                <div className="menu-body-entry-title">
                                Sweet Crepes
                                </div>
                                <div className="menu-body-entry-description">
                                Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
                                </div>
                            </div>
                        </div>

                        <div className="menu-body-entry-container">
                            
                            <div className="menu-body-entry-description-container">
                                <div className="menu-body-entry-title">
                                Sweet Crepes
                                </div>
                                <div className="menu-body-entry-description">
                                Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                                </div>
                            </div>
                        </div>

                        <div className="menu-body-entry-container">
                            
                            <div className="menu-body-entry-description-container">
                                <div className="menu-body-entry-title">
                                Sweet Crepes
                                </div>
                                <div className="menu-body-entry-description">
                                Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                                </div>
                            </div>
                        </div>

                        <div className="menu-body-entry-container">
                            
                            <div className="menu-body-entry-description-container">
                                <div className="menu-body-entry-title">
                                Sweet Crepes
                                </div>
                                <div className="menu-body-entry-description">
                                Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                                </div>
                            </div>
                        </div>

                        <div className="menu-body-entry-container">
                            
                            <div className="menu-body-entry-description-container">
                                <div className="menu-body-entry-title">
                                Sweet Crepes
                                </div>
                                <div className="menu-body-entry-description">
                                Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                                </div>
                            </div>
                        </div>

                        <div className="menu-body-entry-container">
                            
                            <div className="menu-body-entry-description-container">
                                <div className="menu-body-entry-title">
                                Sweet Crepes
                                </div>
                                <div className="menu-body-entry-description">
                                Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                                </div>
                            </div>
                        </div>

                        <div className="menu-body-entry-container">
                            
                            <div className="menu-body-entry-description-container">
                                <div className="menu-body-entry-title">
                                Sweet Crepes
                                </div>
                                <div className="menu-body-entry-description">
                                Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="menu-body-category-container" id="menu-body-savory-crepes" style={{ display: activeSection === 'savoryCrepes' ? 'flex' : 'none' }}>

                        <div className="menu-body-entry-container">
                                
                                <div className="menu-body-entry-description-container">
                                    <div className="menu-body-entry-title">
                                    Savory Crepes
                                    </div>
                                    <div className="menu-body-entry-description">
                                    Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                                    </div>
                                </div>
                        </div>

                        <div className="menu-body-entry-container">
                            
                            <div className="menu-body-entry-description-container">
                                <div className="menu-body-entry-title">
                                Savory Crepes
                                </div>
                                <div className="menu-body-entry-description">
                                Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                                </div>
                            </div>
                        </div>

                        <div className="menu-body-entry-container">
                            
                            <div className="menu-body-entry-description-container">
                                <div className="menu-body-entry-title">
                                Savory Crepes
                                </div>
                                <div className="menu-body-entry-description">
                                Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                                </div>
                            </div>
                        </div>

                        <div className="menu-body-entry-container">
                            
                            <div className="menu-body-entry-description-container">
                                <div className="menu-body-entry-title">
                                Savory Crepes
                                </div>
                                <div className="menu-body-entry-description">
                                Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                                </div>
                            </div>
                        </div>

                        <div className="menu-body-entry-container">
                            
                            <div className="menu-body-entry-description-container">
                                <div className="menu-body-entry-title">
                                Savory Crepes
                                </div>
                                <div className="menu-body-entry-description">
                                Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                                </div>
                            </div>
                        </div>

                        <div className="menu-body-entry-container">
                            
                            <div className="menu-body-entry-description-container">
                                <div className="menu-body-entry-title">
                                Savory Crepes
                                </div>
                                <div className="menu-body-entry-description">
                                Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                                </div>
                            </div>
                        </div>

                        <div className="menu-body-entry-container">
                            
                            <div className="menu-body-entry-description-container">
                                <div className="menu-body-entry-title">
                                Savory Crepes
                                </div>
                                <div className="menu-body-entry-description">
                                Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                                </div>
                            </div>
                        </div>

                        <div className="menu-body-entry-container">
                            
                            <div className="menu-body-entry-description-container">
                                <div className="menu-body-entry-title">
                                Savory Crepes
                                </div>
                                <div className="menu-body-entry-description">
                                Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                                </div>
                            </div>
                        </div>

                        <div className="menu-body-entry-container">
                            
                            <div className="menu-body-entry-description-container">
                                <div className="menu-body-entry-title">
                                Savory Crepes
                                </div>
                                <div className="menu-body-entry-description">
                                Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                                </div>
                            </div>
                        </div>

                        <div className="menu-body-entry-container">
                            
                            <div className="menu-body-entry-description-container">
                                <div className="menu-body-entry-title">
                                Savory Crepes
                                </div>
                                <div className="menu-body-entry-description">
                                Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                                </div>
                            </div>
                        </div>

                        <div className="menu-body-entry-container">
                            
                            <div className="menu-body-entry-description-container">
                                <div className="menu-body-entry-title">
                                Savory Crepes
                                </div>
                                <div className="menu-body-entry-description">
                                Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="menu-body-category-container" id="menu-body-kids-crepes" style={{ display: activeSection === 'kidsCrepes' ? 'flex' : 'none' }}>
                        
                        <div className="menu-body-entry-container">
                            
                            <div className="menu-body-entry-description-container">
                                <div className="menu-body-entry-title">
                                Kids Crepes
                                </div>
                                <div className="menu-body-entry-description">
                                Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                                </div>
                            </div>
                        </div>

                        <div className="menu-body-entry-container">
                            
                            <div className="menu-body-entry-description-container">
                                <div className="menu-body-entry-title">
                                Kids Crepes
                                </div>
                                <div className="menu-body-entry-description">
                                Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                                </div>
                            </div>
                        </div>

                        <div className="menu-body-entry-container">
                            
                            <div className="menu-body-entry-description-container">
                                <div className="menu-body-entry-title">
                                Kids Crepes
                                </div>
                                <div className="menu-body-entry-description">
                                Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                                </div>
                            </div>
                        </div>

                        <div className="menu-body-entry-container">
                            
                            <div className="menu-body-entry-description-container">
                                <div className="menu-body-entry-title">
                                Kids Crepes
                                </div>
                                <div className="menu-body-entry-description">
                                Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                                </div>
                            </div>
                        </div>

                        <div className="menu-body-entry-container">
                            
                            <div className="menu-body-entry-description-container">
                                <div className="menu-body-entry-title">
                                Kids Crepes
                                </div>
                                <div className="menu-body-entry-description">
                                Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                                </div>
                            </div>
                        </div>

                        <div className="menu-body-entry-container">
                            
                            <div className="menu-body-entry-description-container">
                                <div className="menu-body-entry-title">
                                Kids Crepes
                                </div>
                                <div className="menu-body-entry-description">
                                Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="menu-body-category-container" id="menu-body-sweet-paris-waffles" style={{ display: activeSection === 'sweetParisWaffles' ? 'flex' : 'none' }}>

                        <div className="menu-body-entry-container">
                            
                            <div className="menu-body-entry-description-container">
                                <div className="menu-body-entry-title">
                                Sweet Paris Waffles
                                </div>
                                <div className="menu-body-entry-description">
                                Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                                </div>
                            </div>
                        </div>

                        <div className="menu-body-entry-container">
                            
                            <div className="menu-body-entry-description-container">
                                <div className="menu-body-entry-title">
                                Sweet Paris Waffles
                                </div>
                                <div className="menu-body-entry-description">
                                Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                                </div>
                            </div>
                        </div>

                        <div className="menu-body-entry-container">
                            
                            <div className="menu-body-entry-description-container">
                                <div className="menu-body-entry-title">
                                Sweet Paris Waffles
                                </div>
                                <div className="menu-body-entry-description">
                                Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                                </div>
                            </div>
                        </div>

                        <div className="menu-body-entry-container">
                            
                            <div className="menu-body-entry-description-container">
                                <div className="menu-body-entry-title">
                                Sweet Paris Waffles
                                </div>
                                <div className="menu-body-entry-description">
                                Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="menu-body-category-container" id="menu-body-breakfast-crepes-and-eggs" style={{ display: activeSection === 'breakfastCrepesAndEggs' ? 'flex' : 'none' }}>

                        <div className="menu-body-entry-container">
                            
                            <div className="menu-body-entry-description-container">
                                <div className="menu-body-entry-title">
                                Breakfast Crepeps & Eggs
                                </div>
                                <div className="menu-body-entry-description">
                                Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                                </div>
                            </div>
                        </div>

                        <div className="menu-body-entry-container">
                            
                            <div className="menu-body-entry-description-container">
                                <div className="menu-body-entry-title">
                                Breakfast Crepeps & Eggs
                                </div>
                                <div className="menu-body-entry-description">
                                Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                                </div>
                            </div>
                        </div>

                        <div className="menu-body-entry-container">
                            
                            <div className="menu-body-entry-description-container">
                                <div className="menu-body-entry-title">
                                Breakfast Crepeps & Eggs
                                </div>
                                <div className="menu-body-entry-description">
                                Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                                </div>
                            </div>
                        </div>

                        <div className="menu-body-entry-container">
                            
                            <div className="menu-body-entry-description-container">
                                <div className="menu-body-entry-title">
                                Breakfast Crepeps & Eggs
                                </div>
                                <div className="menu-body-entry-description">
                                Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                                </div>
                            </div>
                        </div>

                        <div className="menu-body-entry-container">
                            
                            <div className="menu-body-entry-description-container">
                                <div className="menu-body-entry-title">
                                Breakfast Crepeps & Eggs
                                </div>
                                <div className="menu-body-entry-description">
                                Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                                </div>
                            </div>
                        </div>

                        <div className="menu-body-entry-container">
                            
                            <div className="menu-body-entry-description-container">
                                <div className="menu-body-entry-title">
                                Breakfast Crepeps & Eggs
                                </div>
                                <div className="menu-body-entry-description">
                                Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                                </div>
                            </div>
                        </div>

                        <div className="menu-body-entry-container">
                            
                            <div className="menu-body-entry-description-container">
                                <div className="menu-body-entry-title">
                                Breakfast Crepeps & Eggs
                                </div>
                                <div className="menu-body-entry-description">
                                Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                                </div>
                            </div>
                        </div>

                        <div className="menu-body-entry-container">
                            
                            <div className="menu-body-entry-description-container">
                                <div className="menu-body-entry-title">
                                Breakfast Crepeps & Eggs
                                </div>
                                <div className="menu-body-entry-description">
                                Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                                </div>
                            </div>
                        </div>

                        <div className="menu-body-entry-container">
                            
                            <div className="menu-body-entry-description-container">
                                <div className="menu-body-entry-title">
                                Breakfast Crepeps & Eggs
                                </div>
                                <div className="menu-body-entry-description">
                                Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="menu-body-category-container" id="menu-body-soups-salads-and-paninis" style={{ display: activeSection === 'soupsSaladsAndPaninis' ? 'flex' : 'none' }}>

                        <div className="menu-body-entry-container">
                            
                            <div className="menu-body-entry-description-container">
                                <div className="menu-body-entry-title">
                                Soups Salads And Paninis
                                </div>
                                <div className="menu-body-entry-description">
                                Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                                </div>
                            </div>
                        </div>

                        <div className="menu-body-entry-container">
                            
                            <div className="menu-body-entry-description-container">
                                <div className="menu-body-entry-title">
                                Soups Salads And Paninis
                                </div>
                                <div className="menu-body-entry-description">
                                Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                                </div>
                            </div>
                        </div>

                        <div className="menu-body-entry-container">
                            
                            <div className="menu-body-entry-description-container">
                                <div className="menu-body-entry-title">
                                Soups Salads And Paninis
                                </div>
                                <div className="menu-body-entry-description">
                                Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                                </div>
                            </div>
                        </div>

                        <div className="menu-body-entry-container">
                            
                            <div className="menu-body-entry-description-container">
                                <div className="menu-body-entry-title">
                                Soups Salads And Paninis
                                </div>
                                <div className="menu-body-entry-description">
                                Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                                </div>
                            </div>
                        </div>

                        <div className="menu-body-entry-container">
                            
                            <div className="menu-body-entry-description-container">
                                <div className="menu-body-entry-title">
                                Soups Salads And Paninis
                                </div>
                                <div className="menu-body-entry-description">
                                Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className="menu-body-category-container" id="menu-body-le-bar" style={{ display: activeSection === 'leBar' ? 'flex' : 'none' }}>

                        <div className="menu-body-entry-container">
                            
                            <div className="menu-body-entry-description-container">
                                <div className="menu-body-entry-title">
                                Le Bar
                                </div>
                                <div className="menu-body-entry-description">
                                Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                                </div>
                            </div>
                        </div>

                        <div className="menu-body-entry-container">
                            
                            <div className="menu-body-entry-description-container">
                                <div className="menu-body-entry-title">
                                Le Bar
                                </div>
                                <div className="menu-body-entry-description">
                                Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                                </div>
                            </div>
                        </div>

                        <div className="menu-body-entry-container">
                            
                            <div className="menu-body-entry-description-container">
                                <div className="menu-body-entry-title">
                                Le Bar
                                </div>
                                <div className="menu-body-entry-description">
                                Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                                </div>
                            </div>
                        </div>

                        <div className="menu-body-entry-container">
                            
                            <div className="menu-body-entry-description-container">
                                <div className="menu-body-entry-title">
                                Le Bar
                                </div>
                                <div className="menu-body-entry-description">
                                Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                                </div>
                            </div>
                        </div>

                        <div className="menu-body-entry-container">
                            
                            <div className="menu-body-entry-description-container">
                                <div className="menu-body-entry-title">
                                Le Bar
                                </div>
                                <div className="menu-body-entry-description">
                                Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                                </div>
                            </div>
                        </div>

                        <div className="menu-body-entry-container">
                            
                            <div className="menu-body-entry-description-container">
                                <div className="menu-body-entry-title">
                                Le Bar
                                </div>
                                <div className="menu-body-entry-description">
                                Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                                </div>
                            </div>
                        </div>

                        <div className="menu-body-entry-container">
                            
                            <div className="menu-body-entry-description-container">
                                <div className="menu-body-entry-title">
                                Le Bar
                                </div>
                                <div className="menu-body-entry-description">
                                Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="menu-body-category-container" id="menu-body-hot-drinks-and-milkshakes" style={{ display: activeSection === 'hotDrinksAndMilkshakes' ? 'flex' : 'none' }}>

                        <div className="menu-body-entry-container">
                            
                            <div className="menu-body-entry-description-container">
                                <div className="menu-body-entry-title">
                                Hot Drinks and Milkshakes
                                </div>
                                <div className="menu-body-entry-description">
                                Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                                </div>
                            </div>
                        </div>

                        <div className="menu-body-entry-container">
                            
                            <div className="menu-body-entry-description-container">
                                <div className="menu-body-entry-title">
                                Hot Drinks and Milkshakes
                                </div>
                                <div className="menu-body-entry-description">
                                Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                                </div>
                            </div>
                        </div>

                        <div className="menu-body-entry-container">
                            
                            <div className="menu-body-entry-description-container">
                                <div className="menu-body-entry-title">
                                Hot Drinks and Milkshakes
                                </div>
                                <div className="menu-body-entry-description">
                                Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                                </div>
                            </div>
                        </div>

                        <div className="menu-body-entry-container">
                            
                            <div className="menu-body-entry-description-container">
                                <div className="menu-body-entry-title">
                                Hot Drinks and Milkshakes
                                </div>
                                <div className="menu-body-entry-description">
                                Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                                </div>
                            </div>
                        </div>

                        <div className="menu-body-entry-container">
                            
                            <div className="menu-body-entry-description-container">
                                <div className="menu-body-entry-title">
                                Hot Drinks and Milkshakes
                                </div>
                                <div className="menu-body-entry-description">
                                Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                                </div>
                            </div>
                        </div>

                        <div className="menu-body-entry-container">
                            
                            <div className="menu-body-entry-description-container">
                                <div className="menu-body-entry-title">
                                Hot Drinks and Milkshakes
                                </div>
                                <div className="menu-body-entry-description">
                                Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                                </div>
                            </div>
                        </div>

                        <div className="menu-body-entry-container">
                            
                            <div className="menu-body-entry-description-container">
                                <div className="menu-body-entry-title">
                                Hot Drinks and Milkshakes
                                </div>
                                <div className="menu-body-entry-description">
                                Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                                </div>
                            </div>
                        </div>

                        <div className="menu-body-entry-container">
                            
                            <div className="menu-body-entry-description-container">
                                <div className="menu-body-entry-title">
                                Hot Drinks and Milkshakes
                                </div>
                                <div className="menu-body-entry-description">
                                Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                                </div>
                            </div>
                        </div>

                        <div className="menu-body-entry-container">
                            
                            <div className="menu-body-entry-description-container">
                                <div className="menu-body-entry-title">
                                Hot Drinks and Milkshakes
                                </div>
                                <div className="menu-body-entry-description">
                                Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                                </div>
                            </div>
                        </div>

                        <div className="menu-body-entry-container">
                            
                            <div className="menu-body-entry-description-container">
                                <div className="menu-body-entry-title">
                                Hot Drinks and Milkshakes
                                </div>
                                <div className="menu-body-entry-description">
                                Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                                </div>
                            </div>
                        </div>

                        <div className="menu-body-entry-container">
                            
                            <div className="menu-body-entry-description-container">
                                <div className="menu-body-entry-title">
                                Hot Drinks and Milkshakes
                                </div>
                                <div className="menu-body-entry-description">
                                Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                                </div>
                            </div>
                        </div>

                        <div className="menu-body-entry-container">
                            
                            <div className="menu-body-entry-description-container">
                                <div className="menu-body-entry-title">
                                Hot Drinks and Milkshakes
                                </div>
                                <div className="menu-body-entry-description">
                                Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                                </div>
                            </div>
                        </div>

                        <div className="menu-body-entry-container">
                            
                            <div className="menu-body-entry-description-container">
                                <div className="menu-body-entry-title">
                                Hot Drinks and Milkshakes
                                </div>
                                <div className="menu-body-entry-description">
                                Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                                </div>
                            </div>
                        </div>

                        <div className="menu-body-entry-container">
                            
                            <div className="menu-body-entry-description-container">
                                <div className="menu-body-entry-title">
                                Hot Drinks and Milkshakes
                                </div>
                                <div className="menu-body-entry-description">
                                Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                                </div>
                            </div>
                        </div>

                        <div className="menu-body-entry-container">
                            
                            <div className="menu-body-entry-description-container">
                                <div className="menu-body-entry-title">
                                Hot Drinks and Milkshakes
                                </div>
                                <div className="menu-body-entry-description">
                                Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                                </div>
                            </div>
                        </div>

                        <div className="menu-body-entry-container">
                            
                            <div className="menu-body-entry-description-container">
                                <div className="menu-body-entry-title">
                                Hot Drinks and Milkshakes
                                </div>
                                <div className="menu-body-entry-description">
                                Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="menu-body-category-container" id="menu-body-beverages" style={{ display: activeSection === 'waterAndBeverages' ? 'flex' : 'none' }}>

                        <div className="menu-body-entry-container">
                            
                            <div className="menu-body-entry-description-container">
                                <div className="menu-body-entry-title">
                                Beverages
                                </div>
                                <div className="menu-body-entry-description">
                                Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                                </div>
                            </div>
                        </div>

                        <div className="menu-body-entry-container">
                            
                            <div className="menu-body-entry-description-container">
                                <div className="menu-body-entry-title">
                                Beverages
                                </div>
                                <div className="menu-body-entry-description">
                                Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                                </div>
                            </div>
                        </div>

                        <div className="menu-body-entry-container">
                            
                            <div className="menu-body-entry-description-container">
                                <div className="menu-body-entry-title">
                                Beverages
                                </div>
                                <div className="menu-body-entry-description">
                                Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                                </div>
                            </div>
                        </div>

                        <div className="menu-body-entry-container">
                            
                            <div className="menu-body-entry-description-container">
                                <div className="menu-body-entry-title">
                                Beverages
                                </div>
                                <div className="menu-body-entry-description">
                                Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                                </div>
                            </div>
                        </div>

                        <div className="menu-body-entry-container">
                            
                            <div className="menu-body-entry-description-container">
                                <div className="menu-body-entry-title">
                                Beverages
                                </div>
                                <div className="menu-body-entry-description">
                                Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                                </div>
                            </div>
                        </div>

                        <div className="menu-body-entry-container">
                            
                            <div className="menu-body-entry-description-container">
                                <div className="menu-body-entry-title">
                                Beverages
                                </div>
                                <div className="menu-body-entry-description">
                                Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                                </div>
                            </div>
                        </div>

                        <div className="menu-body-entry-container">
                            
                            <div className="menu-body-entry-description-container">
                                <div className="menu-body-entry-title">
                                Beverages
                                </div>
                                <div className="menu-body-entry-description">
                                Description description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                
            </main>
            <footer className="menu-footer">
                <div className="menu-footer-message">
                    Get in touch with us! Follow us on:
                </div>
                <div className="menu-footer-container">
                    <FontAwesomeIcon icon={['fab', 'instagram']} className="fa-2x" id="menu-footer-instagram" />
                    <FontAwesomeIcon icon={['fab', 'twitter']} className="fa-2x" id="menu-footer-twitter" />
                    <FontAwesomeIcon icon={['fab', 'facebook']} className="fa-2x" id="menu-footer-facebook" />
                    <FontAwesomeIcon icon={['fab', 'tiktok']} className="fa-2x" id="menu-footer-tiktok" />
                </div>
            </footer>
        </div>
    );
};
        
export default Menu;