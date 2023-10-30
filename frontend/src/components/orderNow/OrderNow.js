import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import './OrderNow.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
library.add(fas,fab); 

/* order now functionality still not working */

const OrderNow = () => 
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

    // const returnIncrementedID = () => 
    // {
    //     cartID += 1;
    //     return cartID;
    // };
    
    // const returnDecrementedID = () => 
    // {
    // cartID -= 1;
    // return cartID;
    // };
    
    // const addToCart = eachCategoryEntry => {
    // const mainCartOrderContainer = document.querySelector('.main-cart-order-container');

    // const newCartEntry = document.createElement('div');
    // newCartEntry.classList.add('main-cart-entry');
    // newCartEntry.id = `main-cart-entry-${returnIncrementedID()}`;

    // const newCartEntryTitle = document.createElement('div');
    // const title = eachCategoryEntry.querySelector('.menu-body-entry-title').textContent;
    // newCartEntryTitle.textContent = title;

    // const newCartEntryQuantity = document.createElement('div');
    // newCartEntryQuantity.textContent = 1;

    // newCartEntry.appendChild(newCartEntryTitle);
    // newCartEntry.appendChild(newCartEntryQuantity);

    // mainCartOrderContainer.appendChild(newCartEntry);
    // };

    // const removeFromCart = eachCategoryEntry => {
    // let mainCartOrderContainer = document.querySelector('.main-cart-order-container');

    // const mainCartEntries = mainCartOrderContainer.querySelectorAll('.main-cart-entry');

    // mainCartEntries.forEach(eachEntry => {
    //     const entryTitle = eachEntry.querySelector('.main-cart-entry-title').textContent;
    //     const entryQuantity = eachEntry.querySelector('.main-cart-entry-quantity').textContent;

    //     const eachCategoryEntryTitle = eachCategoryEntry.querySelector('.menu-cart-entry-title');

    //     if (entryTitle === eachCategoryEntryTitle) {
    //     mainCartOrderContainer.removeChild(eachEntry);
    //     }
    // });

    // returnDecrementedID();
    // };

    // const incrementCartItem = eachCategoryEntry => {
    // let mainCartOrderContainer = document.querySelector('.main-cart-order-container');

    // const mainCartEntries = mainCartOrderContainer.querySelectorAll('.main-cart-entry');

    // mainCartEntries.forEach(eachEntry => {
    //     const entryTitle = eachEntry.querySelector('.main-cart-entry-title').textContent;
    //     const entryQuantity = eachEntry.querySelector('.main-cart-entry-quantity');
    //     const eachCategoryEntryTitle = eachCategoryEntry.querySelector('.menu-cart-entry-title');

    //     if (entryTitle === eachCategoryEntryTitle) {
    //     entryQuantity.textContent = parseInt(entryQuantity.textContent) + 1;
    //     }
    // });
    // };

    // const decrementCartItem = eachCategoryEntry => {
    // let mainCartOrderContainer = document.querySelector('.main-cart-order-container');

    // const mainCartEntries = mainCartOrderContainer.querySelectorAll('.main-cart-entry');

    // mainCartEntries.forEach(eachEntry => {
    //     const entryTitle = eachEntry.querySelector('.main-cart-entry-title').textContent;
    //     const entryQuantity = eachEntry.querySelector('.main-cart-entry-quantity').textContent;

    //     const eachCategoryEntryTitle = eachCategoryEntry.querySelector('.menu-cart-entry-title');

    //     if (entryTitle === eachCategoryEntryTitle) {
    //     entryQuantity.textContent = parseInt(entryQuantity.textContent) - 1;
    //     }
    // });
    // };

    // useEffect(() => {
    // const categories = document.querySelectorAll('.menu-body-category-container');

    // categories.forEach(eachCategory => {
    //     const categoryContainers = Array.from(eachCategory.children);

    //     let i = 0;
    //     const idOfCategoryContainer = eachCategory.getAttribute('id');

    //     categoryContainers.forEach(eachCategoryEntry => {
    //     const decrementButton = eachCategoryEntry.querySelector('.decrement-button');
    //     let amountCounter = eachCategoryEntry.querySelector('.amount-counter');
    //     const incrementButton = eachCategoryEntry.querySelector('.increment-button');

    //     decrementButton.id = `${idOfCategoryContainer}-minus-${i}`;
    //     amountCounter.id = `${idOfCategoryContainer}-value-${i}`;
    //     incrementButton.id = `${idOfCategoryContainer}-plus-${i}`;

    //     decrementButton.style.cursor = 'pointer';
    //     incrementButton.style.cursor = 'pointer';

    //     const itemName = eachCategoryEntry.querySelector('.menu-body-entry-title').textContent;

    //     decrementButton.addEventListener('click', () => {
    //         let value = parseInt(amountCounter.textContent);
    //         if (value >= 1) {
    //         amountCounter.textContent = (value - 1).toString();
    //         }

    //         if (value === 1) {
    //         removeFromCart(eachCategoryEntry);
    //         } else if (value >= 2) {
    //         decrementCartItem(eachCategoryEntry);
    //         }
    //     });

    //     incrementButton.addEventListener('click', () => {
    //         let value = parseInt(amountCounter.textContent);
    //         amountCounter.textContent = (value + 1).toString();

    //         if (value === 0) {
    //         addToCart(eachCategoryEntry);
    //         } else if (value >= 1) {
    //         incrementCartItem(eachCategoryEntry);
    //         }
    //     });

    //     i += 1;
    //     });
    // });
    // }, []);

    // let cartID = 1;

    return (
        <div className="menu-body">
            
            <header className="menu-header">Welcome to the Sweet Paris Cafe!</header>
            
            <nav className="menu-nav">
                <div className="order-now-nav-left">
                    <Link to="/app">
                        <FontAwesomeIcon icon={['fas', 'arrow-left']} className="fa-2x" />
                    </Link>
                    <Link to="/ordernowsettings">
                        <FontAwesomeIcon icon={['fas', 'gear']} className="fa-2x" id="menu-nav-settings-icon" />
                    </Link>
                </div>
                <div className="order-now-nav-right">
                    <Link to="/cart">
                        <FontAwesomeIcon icon={['fas', 'cart-shopping']} className="fa-2x" id="menu-nav-settings-icon" />
                    </Link>
                </div>
            </nav>

            <main className="menu-main-menu">
                <div className="menu-main-menu-header">
                    Order Now
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
                    <div className="menu-main-menu-category" id="menu-main-menu-water-and-beverages" onClick={() => handleCategoryClick('waterAndBeverages')}     >
                        Water & Beverages
                    </div>
                </div>

                <div className="menu-main-menu-body">

                    <div className="menu-body-category-container" id="menu-body-sweet-crepes" style={{ display: activeSection === 'sweetCrepes' ? 'flex' : 'none' }}>

                        <div className="menu-body-entry-container">
                        <img src="/sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo" />
                        <div className="menu-body-entry-description-container">
                            <div className="menu-body-entry-title">
                            Sweet Crepes
                            </div>
                            <div className="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div className="menu-body-entry-amount-container">
                            <div className="decrement-button">-</div>
                            <div className="amount-counter">0</div>
                            <div className="increment-button">+</div>
                        </div>
                        </div>

                        <div className="menu-body-entry-container">
                        <img src="/sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo" />
                        <div className="menu-body-entry-description-container">
                            <div className="menu-body-entry-title">
                            Sweet Crepes
                            </div>
                            <div className="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div className="menu-body-entry-amount-container">
                            <div className="decrement-button">-</div>
                            <div className="amount-counter">0</div>
                            <div className="increment-button">+</div>
                        </div>
                        </div>

                        <div className="menu-body-entry-container">
                        <img src="/sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo"  />
                        <div className="menu-body-entry-description-container">
                            <div className="menu-body-entry-title">
                            Sweet Crepes
                            </div>
                            <div className="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div className="menu-body-entry-amount-container">
                            <div className="decrement-button">-</div>
                            <div className="amount-counter">0</div>
                            <div className="increment-button">+</div>
                        </div>
                        </div>

                        <div className="menu-body-entry-container">
                        <img src="/sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo"  />
                        <div className="menu-body-entry-description-container">
                            <div className="menu-body-entry-title">
                            Sweet Crepes
                            </div>
                            <div className="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div className="menu-body-entry-amount-container">
                            <div className="decrement-button">-</div>
                            <div className="amount-counter">0</div>
                            <div className="increment-button">+</div>
                        </div>
                        </div>

                        <div className="menu-body-entry-container">
                        <img src="/sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo"  />
                        <div className="menu-body-entry-description-container">
                            <div className="menu-body-entry-title">
                            Sweet Crepes
                            </div>
                            <div className="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div className="menu-body-entry-amount-container">
                            <div className="decrement-button">-</div>
                            <div className="amount-counter">0</div>
                            <div className="increment-button">+</div>
                        </div>
                        </div>

                        <div className="menu-body-entry-container">
                        <img src="/sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo"  />
                        <div className="menu-body-entry-description-container">
                            <div className="menu-body-entry-title">
                            Sweet Crepes
                            </div>
                            <div className="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div className="menu-body-entry-amount-container">
                            <div className="decrement-button">-</div>
                            <div className="amount-counter">0</div>
                            <div className="increment-button">+</div>
                        </div>
                        </div>

                        <div className="menu-body-entry-container">
                        <img src="/sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo"  />
                        <div className="menu-body-entry-description-container">
                            <div className="menu-body-entry-title">
                            Sweet Crepes
                            </div>
                            <div className="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div className="menu-body-entry-amount-container">
                            <div className="decrement-button">-</div>
                            <div className="amount-counter">0</div>
                            <div className="increment-button">+</div>
                        </div>
                        </div>

                        <div className="menu-body-entry-container">
                        <img src="/sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo"  />
                        <div className="menu-body-entry-description-container">
                            <div className="menu-body-entry-title">
                            Sweet Crepes
                            </div>
                            <div className="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div className="menu-body-entry-amount-container">
                            <div className="decrement-button">-</div>
                            <div className="amount-counter">0</div>
                            <div className="increment-button">+</div>
                        </div>
                        </div>

                        <div className="menu-body-entry-container">
                        <img src="/sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo"  />
                        <div className="menu-body-entry-description-container">
                            <div className="menu-body-entry-title">
                            Sweet Crepes
                            </div>
                            <div className="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div className="menu-body-entry-amount-container">
                            <div className="decrement-button">-</div>
                            <div className="amount-counter">0</div>
                            <div className="increment-button">+</div>
                        </div>
                        </div>

                    </div>

                    <div className="menu-body-category-container" id="menu-body-savory-crepes" style={{ display: activeSection === 'savoryCrepes' ? 'flex' : 'none' }}>

                        <div className="menu-body-entry-container">
                        <img src="/sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo"  />
                        <div className="menu-body-entry-description-container">
                            <div className="menu-body-entry-title">
                            Savory Crepes
                            </div>
                            <div className="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div className="menu-body-entry-amount-container">
                            <div className="decrement-button">-</div>
                            <div className="amount-counter">0</div>
                            <div className="increment-button">+</div>
                        </div>
                        </div>

                        <div className="menu-body-entry-container">
                        <img src="/sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo"  />
                        <div className="menu-body-entry-description-container">
                            <div className="menu-body-entry-title">
                            Savory Crepes
                            </div>
                            <div className="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div className="menu-body-entry-amount-container">
                            <div className="decrement-button">-</div>
                            <div className="amount-counter">0</div>
                            <div className="increment-button">+</div>
                        </div>
                        </div>

                        <div className="menu-body-entry-container">
                        <img src="/sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo"  />
                        <div className="menu-body-entry-description-container">
                            <div className="menu-body-entry-title">
                            Savory Crepes
                            </div>
                            <div className="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div className="menu-body-entry-amount-container">
                            <div className="decrement-button">-</div>
                            <div className="amount-counter">0</div>
                            <div className="increment-button">+</div>
                        </div>
                        </div>

                        <div className="menu-body-entry-container">
                        <img src="/sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo"  />
                        <div className="menu-body-entry-description-container">
                            <div className="menu-body-entry-title">
                            Savory Crepes
                            </div>
                            <div className="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div className="menu-body-entry-amount-container">
                            <div className="decrement-button">-</div>
                            <div className="amount-counter">0</div>
                            <div className="increment-button">+</div>
                        </div>
                        </div>

                        <div className="menu-body-entry-container">
                        <img src="/sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo"  />
                        <div className="menu-body-entry-description-container">
                            <div className="menu-body-entry-title">
                            Savory Crepes
                            </div>
                            <div className="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div className="menu-body-entry-amount-container">
                            <div className="decrement-button">-</div>
                            <div className="amount-counter">0</div>
                            <div className="increment-button">+</div>
                        </div>
                        </div>

                        <div className="menu-body-entry-container">
                        <img src="/sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo"  />
                        <div className="menu-body-entry-description-container">
                            <div className="menu-body-entry-title">
                            Savory Crepes
                            </div>
                            <div className="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div className="menu-body-entry-amount-container">
                            <div className="decrement-button">-</div>
                            <div className="amount-counter">0</div>
                            <div className="increment-button">+</div>
                        </div>
                        </div>

                        <div className="menu-body-entry-container">
                        <img src="/sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo"  />
                        <div className="menu-body-entry-description-container">
                            <div className="menu-body-entry-title">
                            Savory Crepes
                            </div>
                            <div className="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div className="menu-body-entry-amount-container">
                            <div className="decrement-button">-</div>
                            <div className="amount-counter">0</div>
                            <div className="increment-button">+</div>
                        </div>
                        </div>

                        <div className="menu-body-entry-container">
                        <img src="/sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo"  />
                        <div className="menu-body-entry-description-container">
                            <div className="menu-body-entry-title">
                            Savory Crepes
                            </div>
                            <div className="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div className="menu-body-entry-amount-container">
                            <div className="decrement-button">-</div>
                            <div className="amount-counter">0</div>
                            <div className="increment-button">+</div>
                        </div>
                        </div>

                        <div className="menu-body-entry-container">
                        <img src="/sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo"  />
                        <div className="menu-body-entry-description-container">
                            <div className="menu-body-entry-title">
                            Savory Crepes
                            </div>
                            <div className="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div className="menu-body-entry-amount-container">
                            <div className="decrement-button">-</div>
                            <div className="amount-counter">0</div>
                            <div className="increment-button">+</div>
                        </div>
                        </div>

                        <div className="menu-body-entry-container">
                        <img src="/sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo"  />
                        <div className="menu-body-entry-description-container">
                            <div className="menu-body-entry-title">
                            Savory Crepes
                            </div>
                            <div className="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div className="menu-body-entry-amount-container">
                            <div className="decrement-button">-</div>
                            <div className="amount-counter">0</div>
                            <div className="increment-button">+</div>
                        </div>
                        </div>

                        <div className="menu-body-entry-container">
                        <img src="/sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo"  />
                        <div className="menu-body-entry-description-container">
                            <div className="menu-body-entry-title">
                            Savory Crepes
                            </div>
                            <div className="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div className="menu-body-entry-amount-container">
                            <div className="decrement-button">-</div>
                            <div className="amount-counter">0</div>
                            <div className="increment-button">+</div>
                        </div>
                        </div>

                    </div>

                    <div className="menu-body-category-container" id="menu-body-kids-crepes" style={{ display: activeSection === 'kidsCrepes' ? 'flex' : 'none' }}>

                        <div className="menu-body-entry-container">
                        <img src="/sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo"  />
                        <div className="menu-body-entry-description-container">
                            <div className="menu-body-entry-title">
                            Kids Crepes
                            </div>
                            <div className="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div className="menu-body-entry-amount-container">
                            <div className="decrement-button">-</div>
                            <div className="amount-counter">0</div>
                            <div className="increment-button">+</div>
                        </div>
                        </div>

                        <div className="menu-body-entry-container">
                        <img src="/sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo"  />
                        <div className="menu-body-entry-description-container">
                            <div className="menu-body-entry-title">
                            Kids Crepes
                            </div>
                            <div className="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div className="menu-body-entry-amount-container">
                            <div className="decrement-button">-</div>
                            <div className="amount-counter">0</div>
                            <div className="increment-button">+</div>
                        </div>
                        </div>

                        <div className="menu-body-entry-container">
                        <img src="/sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo"  />
                        <div className="menu-body-entry-description-container">
                            <div className="menu-body-entry-title">
                            Kids Crepes
                            </div>
                            <div className="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div className="menu-body-entry-amount-container">
                            <div className="decrement-button">-</div>
                            <div className="amount-counter">0</div>
                            <div className="increment-button">+</div>
                        </div>
                        </div>

                        <div className="menu-body-entry-container">
                        <img src="/sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo"  />
                        <div className="menu-body-entry-description-container">
                            <div className="menu-body-entry-title">
                            Kids Crepes
                            </div>
                            <div className="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div className="menu-body-entry-amount-container">
                            <div className="decrement-button">-</div>
                            <div className="amount-counter">0</div>
                            <div className="increment-button">+</div>
                        </div>
                        </div>

                        <div className="menu-body-entry-container">
                        <img src="/sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo"  />
                        <div className="menu-body-entry-description-container">
                            <div className="menu-body-entry-title">
                            Kids Crepes
                            </div>
                            <div className="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div className="menu-body-entry-amount-container">
                            <div className="decrement-button">-</div>
                            <div className="amount-counter">0</div>
                            <div className="increment-button">+</div>
                        </div>
                        </div>

                        <div className="menu-body-entry-container">
                        <img src="/sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo"  />
                        <div className="menu-body-entry-description-container">
                            <div className="menu-body-entry-title">
                            Kids Crepes
                            </div>
                            <div className="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div className="menu-body-entry-amount-container">
                            <div className="decrement-button">-</div>
                            <div className="amount-counter">0</div>
                            <div className="increment-button">+</div>
                        </div>
                        </div>

                    </div>

                    <div className="menu-body-category-container" id="menu-body-sweet-paris-waffles" style={{ display: activeSection === 'sweetParisWaffles' ? 'flex' : 'none' }}>

                        <div className="menu-body-entry-container">
                        <img src="/sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo"  />
                        <div className="menu-body-entry-description-container">
                            <div className="menu-body-entry-title">
                            Sweet Paris Waffles
                            </div>
                            <div className="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div className="menu-body-entry-amount-container">
                            <div className="decrement-button">-</div>
                            <div className="amount-counter">0</div>
                            <div className="increment-button">+</div>
                        </div>
                        </div>

                        <div className="menu-body-entry-container">
                        <img src="/sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo"  />
                        <div className="menu-body-entry-description-container">
                            <div className="menu-body-entry-title">
                            Sweet Paris Waffles
                            </div>
                            <div className="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div className="menu-body-entry-amount-container">
                            <div className="decrement-button">-</div>
                            <div className="amount-counter">0</div>
                            <div className="increment-button">+</div>
                        </div>
                        </div>

                        <div className="menu-body-entry-container">
                        <img src="/sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo"  />
                        <div className="menu-body-entry-description-container">
                            <div className="menu-body-entry-title">
                            Sweet Paris Waffles
                            </div>
                            <div className="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div className="menu-body-entry-amount-container">
                            <div className="decrement-button">-</div>
                            <div className="amount-counter">0</div>
                            <div className="increment-button">+</div>
                        </div>
                        </div>

                        <div className="menu-body-entry-container">
                        <img src="/sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo"  />
                        <div className="menu-body-entry-description-container">
                            <div className="menu-body-entry-title">
                            Sweet Paris Waffles
                            </div>
                            <div className="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div className="menu-body-entry-amount-container">
                            <div className="decrement-button">-</div>
                            <div className="amount-counter">0</div>
                            <div className="increment-button">+</div>
                        </div>
                        </div>

                    </div>

                    <div className="menu-body-category-container" id="menu-body-breakfast-crepes-and-eggs" style={{ display: activeSection === 'breakfastCrepesAndEggs' ? 'flex' : 'none' }}>

                        <div className="menu-body-entry-container">
                        <img src="/sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo"  />
                        <div className="menu-body-entry-description-container">
                            <div className="menu-body-entry-title">
                            Breakfast Crepes and Eggs
                            </div>
                            <div className="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div className="menu-body-entry-amount-container">
                            <div className="decrement-button">-</div>
                            <div className="amount-counter">0</div>
                            <div className="increment-button">+</div>
                        </div>
                        </div>

                        <div className="menu-body-entry-container">
                        <img src="/sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo"  />
                        <div className="menu-body-entry-description-container">
                            <div className="menu-body-entry-title">
                            Breakfast Crepes and Eggs
                            </div>
                            <div className="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div className="menu-body-entry-amount-container">
                            <div className="decrement-button">-</div>
                            <div className="amount-counter">0</div>
                            <div className="increment-button">+</div>
                        </div>
                        </div>

                        <div className="menu-body-entry-container">
                        <img src="/sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo"  />
                        <div className="menu-body-entry-description-container">
                            <div className="menu-body-entry-title">
                            Breakfast Crepes and Eggs
                            </div>
                            <div className="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div className="menu-body-entry-amount-container">
                            <div className="decrement-button">-</div>
                            <div className="amount-counter">0</div>
                            <div className="increment-button">+</div>
                        </div>
                        </div>

                        <div className="menu-body-entry-container">
                        <img src="/sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo"  />
                        <div className="menu-body-entry-description-container">
                            <div className="menu-body-entry-title">
                            Breakfast Crepes and Eggs
                            </div>
                            <div className="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div className="menu-body-entry-amount-container">
                            <div className="decrement-button">-</div>
                            <div className="amount-counter">0</div>
                            <div className="increment-button">+</div>
                        </div>
                        </div>

                        <div className="menu-body-entry-container">
                        <img src="/sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo"  />
                        <div className="menu-body-entry-description-container">
                            <div className="menu-body-entry-title">
                            Breakfast Crepes and Eggs
                            </div>
                            <div className="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div className="menu-body-entry-amount-container">
                            <div className="decrement-button">-</div>
                            <div className="amount-counter">0</div>
                            <div className="increment-button">+</div>
                        </div>
                        </div>

                        <div className="menu-body-entry-container">
                        <img src="/sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo"  />
                        <div className="menu-body-entry-description-container">
                            <div className="menu-body-entry-title">
                            Breakfast Crepes and Eggs
                            </div>
                            <div className="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div className="menu-body-entry-amount-container">
                            <div className="decrement-button">-</div>
                            <div className="amount-counter">0</div>
                            <div className="increment-button">+</div>
                        </div>
                        </div>

                        <div className="menu-body-entry-container">
                        <img src="/sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo"  />
                        <div className="menu-body-entry-description-container">
                            <div className="menu-body-entry-title">
                            Breakfast Crepes and Eggs
                            </div>
                            <div className="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div className="menu-body-entry-amount-container">
                            <div className="decrement-button">-</div>
                            <div className="amount-counter">0</div>
                            <div className="increment-button">+</div>
                        </div>
                        </div>

                        <div className="menu-body-entry-container">
                        <img src="/sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo"  />
                        <div className="menu-body-entry-description-container">
                            <div className="menu-body-entry-title">
                            Breakfast Crepes and Eggs
                            </div>
                            <div className="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div className="menu-body-entry-amount-container">
                            <div className="decrement-button">-</div>
                            <div className="amount-counter">0</div>
                            <div className="increment-button">+</div>
                        </div>
                        </div>

                        <div className="menu-body-entry-container">
                        <img src="/sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo"  />
                        <div className="menu-body-entry-description-container">
                            <div className="menu-body-entry-title">
                            Breakfast Crepes and Eggs
                            </div>
                            <div className="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div className="menu-body-entry-amount-container">
                            <div className="decrement-button">-</div>
                            <div className="amount-counter">0</div>
                            <div className="increment-button">+</div>
                        </div>
                        </div>

                    </div>

                    <div className="menu-body-category-container" id="menu-body-soups-salads-and-paninis" style={{ display: activeSection === 'soupsSaladsAndPaninis' ? 'flex' : 'none' }}>

                        <div className="menu-body-entry-container">
                        <img src="/sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo"  />
                        <div className="menu-body-entry-description-container">
                            <div className="menu-body-entry-title">
                            Soups, Salads and Paninis
                            </div>
                            <div className="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div className="menu-body-entry-amount-container">
                            <div className="decrement-button">-</div>
                            <div className="amount-counter">0</div>
                            <div className="increment-button">+</div>
                        </div>
                        </div>

                        <div className="menu-body-entry-container">
                        <img src="/sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo"  />
                        <div className="menu-body-entry-description-container">
                            <div className="menu-body-entry-title">
                            Soups, Salads and Paninis
                            </div>
                            <div className="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div className="menu-body-entry-amount-container">
                            <div className="decrement-button">-</div>
                            <div className="amount-counter">0</div>
                            <div className="increment-button">+</div>
                        </div>
                        </div>

                        <div className="menu-body-entry-container">
                        <img src="/sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo"  />
                        <div className="menu-body-entry-description-container">
                            <div className="menu-body-entry-title">
                            Soups, Salads and Paninis
                            </div>
                            <div className="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div className="menu-body-entry-amount-container">
                            <div className="decrement-button">-</div>
                            <div className="amount-counter">0</div>
                            <div className="increment-button">+</div>
                        </div>
                        </div>

                        <div className="menu-body-entry-container">
                        <img src="/sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo"  />
                        <div className="menu-body-entry-description-container">
                            <div className="menu-body-entry-title">
                            Soups, Salads and Paninis
                            </div>
                            <div className="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div className="menu-body-entry-amount-container">
                            <div className="decrement-button">-</div>
                            <div className="amount-counter">0</div>
                            <div className="increment-button">+</div>
                        </div>
                        </div>

                        <div className="menu-body-entry-container">
                        <img src="/sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo"  />
                        <div className="menu-body-entry-description-container">
                            <div className="menu-body-entry-title">
                            Soups, Salads and Paninis
                            </div>
                            <div className="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div className="menu-body-entry-amount-container">
                            <div className="decrement-button">-</div>
                            <div className="amount-counter">0</div>
                            <div className="increment-button">+</div>
                        </div>
                        </div>

                    </div>

                    <div className="menu-body-category-container" id="menu-body-le-bar" style={{ display: activeSection === 'leBar' ? 'flex' : 'none' }}>

                        <div className="menu-body-entry-container">
                        <img src="/sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo"  />
                        <div className="menu-body-entry-description-container">
                            <div className="menu-body-entry-title">
                            Le Bar
                            </div>
                            <div className="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div className="menu-body-entry-amount-container">
                            <div className="decrement-button">-</div>
                            <div className="amount-counter">0</div>
                            <div className="increment-button">+</div>
                        </div>
                        </div>

                        <div className="menu-body-entry-container">
                        <img src="/sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo"  />
                        <div className="menu-body-entry-description-container">
                            <div className="menu-body-entry-title">
                            Le Bar
                            </div>
                            <div className="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div className="menu-body-entry-amount-container">
                            <div className="decrement-button">-</div>
                            <div className="amount-counter">0</div>
                            <div className="increment-button">+</div>
                        </div>
                        </div>

                        <div className="menu-body-entry-container">
                        <img src="/sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo"  />
                        <div className="menu-body-entry-description-container">
                            <div className="menu-body-entry-title">
                            Le Bar
                            </div>
                            <div className="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div className="menu-body-entry-amount-container">
                            <div className="decrement-button">-</div>
                            <div className="amount-counter">0</div>
                            <div className="increment-button">+</div>
                        </div>
                        </div>

                        <div className="menu-body-entry-container">
                        <img src="/sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo"  />
                        <div className="menu-body-entry-description-container">
                            <div className="menu-body-entry-title">
                            Le Bar
                            </div>
                            <div className="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div className="menu-body-entry-amount-container">
                            <div className="decrement-button">-</div>
                            <div className="amount-counter">0</div>
                            <div className="increment-button">+</div>
                        </div>
                        </div>

                        <div className="menu-body-entry-container">
                        <img src="/sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo"  />
                        <div className="menu-body-entry-description-container">
                            <div className="menu-body-entry-title">
                            Le Bar
                            </div>
                            <div className="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div className="menu-body-entry-amount-container">
                            <div className="decrement-button">-</div>
                            <div className="amount-counter">0</div>
                            <div className="increment-button">+</div>
                        </div>
                        </div>

                        <div className="menu-body-entry-container">
                        <img src="/sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo"  />
                        <div className="menu-body-entry-description-container">
                            <div className="menu-body-entry-title">
                            Le Bar
                            </div>
                            <div className="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div className="menu-body-entry-amount-container">
                            <div className="decrement-button">-</div>
                            <div className="amount-counter">0</div>
                            <div className="increment-button">+</div>
                        </div>
                        </div>

                        <div className="menu-body-entry-container">
                        <img src="/sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo"  />
                        <div className="menu-body-entry-description-container">
                            <div className="menu-body-entry-title">
                            Le Bar
                            </div>
                            <div className="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div className="menu-body-entry-amount-container">
                            <div className="decrement-button">-</div>
                            <div className="amount-counter">0</div>
                            <div className="increment-button">+</div>
                        </div>
                        </div>

                    </div>

                    <div className="menu-body-category-container" id="menu-body-hot-drinks-and-milkshakes" style={{ display: activeSection === 'hotDrinksAndMilkshakes' ? 'flex' : 'none' }}>

                        <div className="menu-body-entry-container">
                        <img src="/sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo"  />
                        <div className="menu-body-entry-description-container">
                            <div className="menu-body-entry-title">
                            Hot Drinks and Milkshakes
                            </div>
                            <div className="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div className="menu-body-entry-amount-container">
                            <div className="decrement-button">-</div>
                            <div className="amount-counter">0</div>
                            <div className="increment-button">+</div>
                        </div>
                        </div>

                        <div className="menu-body-entry-container">
                        <img src="/sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo"  />
                        <div className="menu-body-entry-description-container">
                            <div className="menu-body-entry-title">
                            Hot Drinks and Milkshakes
                            </div>
                            <div className="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div className="menu-body-entry-amount-container">
                            <div className="decrement-button">-</div>
                            <div className="amount-counter">0</div>
                            <div className="increment-button">+</div>
                        </div>
                        </div>

                        <div className="menu-body-entry-container">
                        <img src="/sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo"  />
                        <div className="menu-body-entry-description-container">
                            <div className="menu-body-entry-title">
                            Hot Drinks and Milkshakes
                            </div>
                            <div className="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div className="menu-body-entry-amount-container">
                            <div className="decrement-button">-</div>
                            <div className="amount-counter">0</div>
                            <div className="increment-button">+</div>
                        </div>
                        </div>

                        <div className="menu-body-entry-container">
                        <img src="/sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo"  />
                        <div className="menu-body-entry-description-container">
                            <div className="menu-body-entry-title">
                            Hot Drinks and Milkshakes
                            </div>
                            <div className="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div className="menu-body-entry-amount-container">
                            <div className="decrement-button">-</div>
                            <div className="amount-counter">0</div>
                            <div className="increment-button">+</div>
                        </div>
                        </div>

                        <div className="menu-body-entry-container">
                        <img src="/sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo"  />
                        <div className="menu-body-entry-description-container">
                            <div className="menu-body-entry-title">
                            Hot Drinks and Milkshakes
                            </div>
                            <div className="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div className="menu-body-entry-amount-container">
                            <div className="decrement-button">-</div>
                            <div className="amount-counter">0</div>
                            <div className="increment-button">+</div>
                        </div>
                        </div>

                        <div className="menu-body-entry-container">
                        <img src="/sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo"  />
                        <div className="menu-body-entry-description-container">
                            <div className="menu-body-entry-title">
                            Hot Drinks and Milkshakes
                            </div>
                            <div className="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div className="menu-body-entry-amount-container">
                            <div className="decrement-button">-</div>
                            <div className="amount-counter">0</div>
                            <div className="increment-button">+</div>
                        </div>
                        </div>

                        <div className="menu-body-entry-container">
                        <img src="/sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo"  />
                        <div className="menu-body-entry-description-container">
                            <div className="menu-body-entry-title">
                            Hot Drinks and Milkshakes
                            </div>
                            <div className="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div className="menu-body-entry-amount-container">
                            <div className="decrement-button">-</div>
                            <div className="amount-counter">0</div>
                            <div className="increment-button">+</div>
                        </div>
                        </div>

                        <div className="menu-body-entry-container">
                        <img src="/sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo"  />
                        <div className="menu-body-entry-description-container">
                            <div className="menu-body-entry-title">
                            Hot Drinks and Milkshakes
                            </div>
                            <div className="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div className="menu-body-entry-amount-container">
                            <div className="decrement-button">-</div>
                            <div className="amount-counter">0</div>
                            <div className="increment-button">+</div>
                        </div>
                        </div>

                        <div className="menu-body-entry-container">
                        <img src="/sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo"  />
                        <div className="menu-body-entry-description-container">
                            <div className="menu-body-entry-title">
                            Hot Drinks and Milkshakes
                            </div>
                            <div className="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div className="menu-body-entry-amount-container">
                            <div className="decrement-button">-</div>
                            <div className="amount-counter">0</div>
                            <div className="increment-button">+</div>
                        </div>
                        </div>

                        <div className="menu-body-entry-container">
                        <img src="/sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo"  />
                        <div className="menu-body-entry-description-container">
                            <div className="menu-body-entry-title">
                            Hot Drinks and Milkshakes
                            </div>
                            <div className="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div className="menu-body-entry-amount-container">
                            <div className="decrement-button">-</div>
                            <div className="amount-counter">0</div>
                            <div className="increment-button">+</div>
                        </div>
                        </div>

                        <div className="menu-body-entry-container">
                        <img src="/sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo"  />
                        <div className="menu-body-entry-description-container">
                            <div className="menu-body-entry-title">
                            Hot Drinks and Milkshakes
                            </div>
                            <div className="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div className="menu-body-entry-amount-container">
                            <div className="decrement-button">-</div>
                            <div className="amount-counter">0</div>
                            <div className="increment-button">+</div>
                        </div>
                        </div>

                        <div className="menu-body-entry-container">
                        <img src="/sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo"  />
                        <div className="menu-body-entry-description-container">
                            <div className="menu-body-entry-title">
                            Hot Drinks and Milkshakes
                            </div>
                            <div className="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div className="menu-body-entry-amount-container">
                            <div className="decrement-button">-</div>
                            <div className="amount-counter">0</div>
                            <div className="increment-button">+</div>
                        </div>
                        </div>

                    </div>

                    <div className="menu-body-category-container" id="menu-body-beverages" style={{ display: activeSection === 'waterAndBeverages' ? 'flex' : 'none' }}>

                        <div className="menu-body-entry-container">
                        <img src="/sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo"  />
                        <div className="menu-body-entry-description-container">
                            <div className="menu-body-entry-title">
                            Water and Beverages
                            </div>
                            <div className="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div className="menu-body-entry-amount-container">
                            <div className="decrement-button">-</div>
                            <div className="amount-counter">0</div>
                            <div className="increment-button">+</div>
                        </div>
                        </div>

                        <div className="menu-body-entry-container">
                        <img src="/sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo"  />
                        <div className="menu-body-entry-description-container">
                            <div className="menu-body-entry-title">
                            Water and Beverages
                            </div>
                            <div className="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div className="menu-body-entry-amount-container">
                            <div className="decrement-button">-</div>
                            <div className="amount-counter">0</div>
                            <div className="increment-button">+</div>
                        </div>
                        </div>

                        <div className="menu-body-entry-container">
                        <img src="/sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo"  />
                        <div className="menu-body-entry-description-container">
                            <div className="menu-body-entry-title">
                            Water and Beverages
                            </div>
                            <div className="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div className="menu-body-entry-amount-container">
                            <div className="decrement-button">-</div>
                            <div className="amount-counter">0</div>
                            <div className="increment-button">+</div>
                        </div>
                        </div>

                        <div className="menu-body-entry-container">
                        <img src="/sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo"  />
                        <div className="menu-body-entry-description-container">
                            <div className="menu-body-entry-title">
                            Water and Beverages
                            </div>
                            <div className="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div className="menu-body-entry-amount-container">
                            <div className="decrement-button">-</div>
                            <div className="amount-counter">0</div>
                            <div className="increment-button">+</div>
                        </div>
                        </div>

                        <div className="menu-body-entry-container">
                        <img src="/sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo"  />
                        <div className="menu-body-entry-description-container">
                            <div className="menu-body-entry-title">
                            Water and Beverages
                            </div>
                            <div className="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div className="menu-body-entry-amount-container">
                            <div className="decrement-button">-</div>
                            <div className="amount-counter">0</div>
                            <div className="increment-button">+</div>
                        </div>
                        </div>

                        <div className="menu-body-entry-container">
                        <img src="/sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo"  />
                        <div className="menu-body-entry-description-container">
                            <div className="menu-body-entry-title">
                            Water and Beverages
                            </div>
                            <div className="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div className="menu-body-entry-amount-container">
                            <div className="decrement-button">-</div>
                            <div className="amount-counter">0</div>
                            <div className="increment-button">+</div>
                        </div>
                        </div>

                        <div className="menu-body-entry-container">
                        <img src="/sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo"  />
                        <div className="menu-body-entry-description-container">
                            <div className="menu-body-entry-title">
                            Water and Beverages
                            </div>
                            <div className="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div className="menu-body-entry-amount-container">
                            <div className="decrement-button">-</div>
                            <div className="amount-counter">0</div>
                            <div className="increment-button">+</div>
                        </div>
                        </div>

                    </div>

                </div>

            </main>

        </div>
    );
};

export default OrderNow;