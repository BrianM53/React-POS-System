import React from 'react';
import { Link } from 'react-router-dom';
import NavOptions from '../utility/navOptions';
import { useEffect } from 'react';
import './OrderNow.css';

/* order now functionality still not working */

const OrderNow = () => 
{
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
                        <i className="fa-solid fa-arrow-left fa-2xl"></i>
                    </Link>
                    <Link to="/ordernowsettings">
                        <i className="fa-solid fa-gear fa-2xl" id="menu-nav-settings-icon"></i>
                    </Link>
                </div>
                <div className="menu-nav-title">Sweet Paris: Crepes and Cafe</div>
                <NavOptions />
                <div className="order-now-nav-right">
                    <Link to="/cart">
                        <i className="fa-solid fa-cart-shopping fa-2xl" id="menu-nav-settings-icon"></i>
                    </Link>
                </div>
            </nav>

            <main class="menu-main-menu">
                <div class="menu-main-menu-header">
                    Order Now
                </div>
                <div class="menu-main-menu-categories">
                    <div class="menu-main-menu-category" id="menu-main-menu-sweet-crepes">
                        Sweet Crepes
                    </div>
                    <div class="menu-main-menu-category" id="menu-main-menu-savory-crepes">
                        Savory Crepes
                    </div>
                    <div class="menu-main-menu-category" id="menu-main-menu-kids-crepes">
                        Kids Crepes
                    </div>
                    <div class="menu-main-menu-category" id="menu-main-menu-sweet-paris-waffles">
                        Sweet Paris Waffles
                    </div>
                    <div class="menu-main-menu-category" id="menu-main-menu-breakfast-crepes-and-eggs">
                        Breakfast Crepes & Eggs
                    </div>
                    <div class="menu-main-menu-category" id="menu-main-menu-soups-salads-and-paninis">
                        Soups, Salads & Paninis
                    </div>
                    <div class="menu-main-menu-category" id="menu-main-menu-le-bar">
                        Le Bar
                    </div>
                    <div class="menu-main-menu-category" id="menu-main-menu-hot-drinks-and-milkshakes">
                        Hot Drinks & Milkshakes
                    </div>
                    <div class="menu-main-menu-category" id="menu-main-menu-water-and-beverages">
                        Water & Beverages
                    </div>
                </div>

                <div class="menu-main-menu-body">

                    <div class="menu-body-category-container" id="menu-body-sweet-crepes">

                        <div class="menu-body-entry-container">
                        <img src="sweetParisLocation.jpeg" alt="menu item" class="menu-body-entry-photo" />
                        <div class="menu-body-entry-description-container">
                            <div class="menu-body-entry-title">
                            Sweet Crepes
                            </div>
                            <div class="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div class="menu-body-entry-amount-container">
                            <div class="decrement-button">-</div>
                            <div class="amount-counter">0</div>
                            <div class="increment-button">+</div>
                        </div>
                        </div>

                        <div class="menu-body-entry-container">
                        <img src="sweetParisLocation.jpeg" alt="menu item" class="menu-body-entry-photo" />
                        <div class="menu-body-entry-description-container">
                            <div class="menu-body-entry-title">
                            Sweet Crepes
                            </div>
                            <div class="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div class="menu-body-entry-amount-container">
                            <div class="decrement-button">-</div>
                            <div class="amount-counter">0</div>
                            <div class="increment-button">+</div>
                        </div>
                        </div>

                        <div class="menu-body-entry-container">
                        <img src="sweetParisLocation.jpeg" alt="menu item" class="menu-body-entry-photo"  />
                        <div class="menu-body-entry-description-container">
                            <div class="menu-body-entry-title">
                            Sweet Crepes
                            </div>
                            <div class="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div class="menu-body-entry-amount-container">
                            <div class="decrement-button">-</div>
                            <div class="amount-counter">0</div>
                            <div class="increment-button">+</div>
                        </div>
                        </div>

                        <div class="menu-body-entry-container">
                        <img src="sweetParisLocation.jpeg" alt="menu item" class="menu-body-entry-photo"  />
                        <div class="menu-body-entry-description-container">
                            <div class="menu-body-entry-title">
                            Sweet Crepes
                            </div>
                            <div class="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div class="menu-body-entry-amount-container">
                            <div class="decrement-button">-</div>
                            <div class="amount-counter">0</div>
                            <div class="increment-button">+</div>
                        </div>
                        </div>

                        <div class="menu-body-entry-container">
                        <img src="sweetParisLocation.jpeg" alt="menu item" class="menu-body-entry-photo"  />
                        <div class="menu-body-entry-description-container">
                            <div class="menu-body-entry-title">
                            Sweet Crepes
                            </div>
                            <div class="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div class="menu-body-entry-amount-container">
                            <div class="decrement-button">-</div>
                            <div class="amount-counter">0</div>
                            <div class="increment-button">+</div>
                        </div>
                        </div>

                        <div class="menu-body-entry-container">
                        <img src="sweetParisLocation.jpeg" alt="menu item" class="menu-body-entry-photo"  />
                        <div class="menu-body-entry-description-container">
                            <div class="menu-body-entry-title">
                            Sweet Crepes
                            </div>
                            <div class="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div class="menu-body-entry-amount-container">
                            <div class="decrement-button">-</div>
                            <div class="amount-counter">0</div>
                            <div class="increment-button">+</div>
                        </div>
                        </div>

                        <div class="menu-body-entry-container">
                        <img src="sweetParisLocation.jpeg" alt="menu item" class="menu-body-entry-photo"  />
                        <div class="menu-body-entry-description-container">
                            <div class="menu-body-entry-title">
                            Sweet Crepes
                            </div>
                            <div class="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div class="menu-body-entry-amount-container">
                            <div class="decrement-button">-</div>
                            <div class="amount-counter">0</div>
                            <div class="increment-button">+</div>
                        </div>
                        </div>

                        <div class="menu-body-entry-container">
                        <img src="sweetParisLocation.jpeg" alt="menu item" class="menu-body-entry-photo"  />
                        <div class="menu-body-entry-description-container">
                            <div class="menu-body-entry-title">
                            Sweet Crepes
                            </div>
                            <div class="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div class="menu-body-entry-amount-container">
                            <div class="decrement-button">-</div>
                            <div class="amount-counter">0</div>
                            <div class="increment-button">+</div>
                        </div>
                        </div>

                        <div class="menu-body-entry-container">
                        <img src="sweetParisLocation.jpeg" alt="menu item" class="menu-body-entry-photo"  />
                        <div class="menu-body-entry-description-container">
                            <div class="menu-body-entry-title">
                            Sweet Crepes
                            </div>
                            <div class="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div class="menu-body-entry-amount-container">
                            <div class="decrement-button">-</div>
                            <div class="amount-counter">0</div>
                            <div class="increment-button">+</div>
                        </div>
                        </div>

                    </div>

                    <div class="menu-body-category-container" id="menu-body-savory-crepes">

                        <div class="menu-body-entry-container">
                        <img src="sweetParisLocation.jpeg" alt="menu item" class="menu-body-entry-photo"  />
                        <div class="menu-body-entry-description-container">
                            <div class="menu-body-entry-title">
                            Savory Crepes
                            </div>
                            <div class="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div class="menu-body-entry-amount-container">
                            <div class="decrement-button">-</div>
                            <div class="amount-counter">0</div>
                            <div class="increment-button">+</div>
                        </div>
                        </div>

                        <div class="menu-body-entry-container">
                        <img src="sweetParisLocation.jpeg" alt="menu item" class="menu-body-entry-photo"  />
                        <div class="menu-body-entry-description-container">
                            <div class="menu-body-entry-title">
                            Savory Crepes
                            </div>
                            <div class="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div class="menu-body-entry-amount-container">
                            <div class="decrement-button">-</div>
                            <div class="amount-counter">0</div>
                            <div class="increment-button">+</div>
                        </div>
                        </div>

                        <div class="menu-body-entry-container">
                        <img src="sweetParisLocation.jpeg" alt="menu item" class="menu-body-entry-photo"  />
                        <div class="menu-body-entry-description-container">
                            <div class="menu-body-entry-title">
                            Savory Crepes
                            </div>
                            <div class="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div class="menu-body-entry-amount-container">
                            <div class="decrement-button">-</div>
                            <div class="amount-counter">0</div>
                            <div class="increment-button">+</div>
                        </div>
                        </div>

                        <div class="menu-body-entry-container">
                        <img src="sweetParisLocation.jpeg" alt="menu item" class="menu-body-entry-photo"  />
                        <div class="menu-body-entry-description-container">
                            <div class="menu-body-entry-title">
                            Savory Crepes
                            </div>
                            <div class="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div class="menu-body-entry-amount-container">
                            <div class="decrement-button">-</div>
                            <div class="amount-counter">0</div>
                            <div class="increment-button">+</div>
                        </div>
                        </div>

                        <div class="menu-body-entry-container">
                        <img src="sweetParisLocation.jpeg" alt="menu item" class="menu-body-entry-photo"  />
                        <div class="menu-body-entry-description-container">
                            <div class="menu-body-entry-title">
                            Savory Crepes
                            </div>
                            <div class="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div class="menu-body-entry-amount-container">
                            <div class="decrement-button">-</div>
                            <div class="amount-counter">0</div>
                            <div class="increment-button">+</div>
                        </div>
                        </div>

                        <div class="menu-body-entry-container">
                        <img src="sweetParisLocation.jpeg" alt="menu item" class="menu-body-entry-photo"  />
                        <div class="menu-body-entry-description-container">
                            <div class="menu-body-entry-title">
                            Savory Crepes
                            </div>
                            <div class="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div class="menu-body-entry-amount-container">
                            <div class="decrement-button">-</div>
                            <div class="amount-counter">0</div>
                            <div class="increment-button">+</div>
                        </div>
                        </div>

                        <div class="menu-body-entry-container">
                        <img src="sweetParisLocation.jpeg" alt="menu item" class="menu-body-entry-photo"  />
                        <div class="menu-body-entry-description-container">
                            <div class="menu-body-entry-title">
                            Savory Crepes
                            </div>
                            <div class="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div class="menu-body-entry-amount-container">
                            <div class="decrement-button">-</div>
                            <div class="amount-counter">0</div>
                            <div class="increment-button">+</div>
                        </div>
                        </div>

                        <div class="menu-body-entry-container">
                        <img src="sweetParisLocation.jpeg" alt="menu item" class="menu-body-entry-photo"  />
                        <div class="menu-body-entry-description-container">
                            <div class="menu-body-entry-title">
                            Savory Crepes
                            </div>
                            <div class="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div class="menu-body-entry-amount-container">
                            <div class="decrement-button">-</div>
                            <div class="amount-counter">0</div>
                            <div class="increment-button">+</div>
                        </div>
                        </div>

                        <div class="menu-body-entry-container">
                        <img src="sweetParisLocation.jpeg" alt="menu item" class="menu-body-entry-photo"  />
                        <div class="menu-body-entry-description-container">
                            <div class="menu-body-entry-title">
                            Savory Crepes
                            </div>
                            <div class="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div class="menu-body-entry-amount-container">
                            <div class="decrement-button">-</div>
                            <div class="amount-counter">0</div>
                            <div class="increment-button">+</div>
                        </div>
                        </div>

                        <div class="menu-body-entry-container">
                        <img src="sweetParisLocation.jpeg" alt="menu item" class="menu-body-entry-photo"  />
                        <div class="menu-body-entry-description-container">
                            <div class="menu-body-entry-title">
                            Savory Crepes
                            </div>
                            <div class="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div class="menu-body-entry-amount-container">
                            <div class="decrement-button">-</div>
                            <div class="amount-counter">0</div>
                            <div class="increment-button">+</div>
                        </div>
                        </div>

                        <div class="menu-body-entry-container">
                        <img src="sweetParisLocation.jpeg" alt="menu item" class="menu-body-entry-photo"  />
                        <div class="menu-body-entry-description-container">
                            <div class="menu-body-entry-title">
                            Savory Crepes
                            </div>
                            <div class="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div class="menu-body-entry-amount-container">
                            <div class="decrement-button">-</div>
                            <div class="amount-counter">0</div>
                            <div class="increment-button">+</div>
                        </div>
                        </div>

                    </div>

                    <div class="menu-body-category-container" id="menu-body-kids-crepes">

                        <div class="menu-body-entry-container">
                        <img src="sweetParisLocation.jpeg" alt="menu item" class="menu-body-entry-photo"  />
                        <div class="menu-body-entry-description-container">
                            <div class="menu-body-entry-title">
                            Kids Crepes
                            </div>
                            <div class="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div class="menu-body-entry-amount-container">
                            <div class="decrement-button">-</div>
                            <div class="amount-counter">0</div>
                            <div class="increment-button">+</div>
                        </div>
                        </div>

                        <div class="menu-body-entry-container">
                        <img src="sweetParisLocation.jpeg" alt="menu item" class="menu-body-entry-photo"  />
                        <div class="menu-body-entry-description-container">
                            <div class="menu-body-entry-title">
                            Kids Crepes
                            </div>
                            <div class="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div class="menu-body-entry-amount-container">
                            <div class="decrement-button">-</div>
                            <div class="amount-counter">0</div>
                            <div class="increment-button">+</div>
                        </div>
                        </div>

                        <div class="menu-body-entry-container">
                        <img src="sweetParisLocation.jpeg" alt="menu item" class="menu-body-entry-photo"  />
                        <div class="menu-body-entry-description-container">
                            <div class="menu-body-entry-title">
                            Kids Crepes
                            </div>
                            <div class="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div class="menu-body-entry-amount-container">
                            <div class="decrement-button">-</div>
                            <div class="amount-counter">0</div>
                            <div class="increment-button">+</div>
                        </div>
                        </div>

                        <div class="menu-body-entry-container">
                        <img src="sweetParisLocation.jpeg" alt="menu item" class="menu-body-entry-photo"  />
                        <div class="menu-body-entry-description-container">
                            <div class="menu-body-entry-title">
                            Kids Crepes
                            </div>
                            <div class="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div class="menu-body-entry-amount-container">
                            <div class="decrement-button">-</div>
                            <div class="amount-counter">0</div>
                            <div class="increment-button">+</div>
                        </div>
                        </div>

                        <div class="menu-body-entry-container">
                        <img src="sweetParisLocation.jpeg" alt="menu item" class="menu-body-entry-photo"  />
                        <div class="menu-body-entry-description-container">
                            <div class="menu-body-entry-title">
                            Kids Crepes
                            </div>
                            <div class="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div class="menu-body-entry-amount-container">
                            <div class="decrement-button">-</div>
                            <div class="amount-counter">0</div>
                            <div class="increment-button">+</div>
                        </div>
                        </div>

                        <div class="menu-body-entry-container">
                        <img src="sweetParisLocation.jpeg" alt="menu item" class="menu-body-entry-photo"  />
                        <div class="menu-body-entry-description-container">
                            <div class="menu-body-entry-title">
                            Kids Crepes
                            </div>
                            <div class="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div class="menu-body-entry-amount-container">
                            <div class="decrement-button">-</div>
                            <div class="amount-counter">0</div>
                            <div class="increment-button">+</div>
                        </div>
                        </div>

                    </div>

                    <div class="menu-body-category-container" id="menu-body-sweet-paris-waffles">

                        <div class="menu-body-entry-container">
                        <img src="sweetParisLocation.jpeg" alt="menu item" class="menu-body-entry-photo"  />
                        <div class="menu-body-entry-description-container">
                            <div class="menu-body-entry-title">
                            Sweet Paris Waffles
                            </div>
                            <div class="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div class="menu-body-entry-amount-container">
                            <div class="decrement-button">-</div>
                            <div class="amount-counter">0</div>
                            <div class="increment-button">+</div>
                        </div>
                        </div>

                        <div class="menu-body-entry-container">
                        <img src="sweetParisLocation.jpeg" alt="menu item" class="menu-body-entry-photo"  />
                        <div class="menu-body-entry-description-container">
                            <div class="menu-body-entry-title">
                            Sweet Paris Waffles
                            </div>
                            <div class="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div class="menu-body-entry-amount-container">
                            <div class="decrement-button">-</div>
                            <div class="amount-counter">0</div>
                            <div class="increment-button">+</div>
                        </div>
                        </div>

                        <div class="menu-body-entry-container">
                        <img src="sweetParisLocation.jpeg" alt="menu item" class="menu-body-entry-photo"  />
                        <div class="menu-body-entry-description-container">
                            <div class="menu-body-entry-title">
                            Sweet Paris Waffles
                            </div>
                            <div class="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div class="menu-body-entry-amount-container">
                            <div class="decrement-button">-</div>
                            <div class="amount-counter">0</div>
                            <div class="increment-button">+</div>
                        </div>
                        </div>

                        <div class="menu-body-entry-container">
                        <img src="sweetParisLocation.jpeg" alt="menu item" class="menu-body-entry-photo"  />
                        <div class="menu-body-entry-description-container">
                            <div class="menu-body-entry-title">
                            Sweet Paris Waffles
                            </div>
                            <div class="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div class="menu-body-entry-amount-container">
                            <div class="decrement-button">-</div>
                            <div class="amount-counter">0</div>
                            <div class="increment-button">+</div>
                        </div>
                        </div>

                    </div>

                    <div class="menu-body-category-container" id="menu-body-breakfast-crepes-and-waffles">

                        <div class="menu-body-entry-container">
                        <img src="sweetParisLocation.jpeg" alt="menu item" class="menu-body-entry-photo"  />
                        <div class="menu-body-entry-description-container">
                            <div class="menu-body-entry-title">
                            Breakfast Crepes and Eggs
                            </div>
                            <div class="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div class="menu-body-entry-amount-container">
                            <div class="decrement-button">-</div>
                            <div class="amount-counter">0</div>
                            <div class="increment-button">+</div>
                        </div>
                        </div>

                        <div class="menu-body-entry-container">
                        <img src="sweetParisLocation.jpeg" alt="menu item" class="menu-body-entry-photo"  />
                        <div class="menu-body-entry-description-container">
                            <div class="menu-body-entry-title">
                            Breakfast Crepes and Eggs
                            </div>
                            <div class="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div class="menu-body-entry-amount-container">
                            <div class="decrement-button">-</div>
                            <div class="amount-counter">0</div>
                            <div class="increment-button">+</div>
                        </div>
                        </div>

                        <div class="menu-body-entry-container">
                        <img src="sweetParisLocation.jpeg" alt="menu item" class="menu-body-entry-photo"  />
                        <div class="menu-body-entry-description-container">
                            <div class="menu-body-entry-title">
                            Breakfast Crepes and Eggs
                            </div>
                            <div class="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div class="menu-body-entry-amount-container">
                            <div class="decrement-button">-</div>
                            <div class="amount-counter">0</div>
                            <div class="increment-button">+</div>
                        </div>
                        </div>

                        <div class="menu-body-entry-container">
                        <img src="sweetParisLocation.jpeg" alt="menu item" class="menu-body-entry-photo"  />
                        <div class="menu-body-entry-description-container">
                            <div class="menu-body-entry-title">
                            Breakfast Crepes and Eggs
                            </div>
                            <div class="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div class="menu-body-entry-amount-container">
                            <div class="decrement-button">-</div>
                            <div class="amount-counter">0</div>
                            <div class="increment-button">+</div>
                        </div>
                        </div>

                        <div class="menu-body-entry-container">
                        <img src="sweetParisLocation.jpeg" alt="menu item" class="menu-body-entry-photo"  />
                        <div class="menu-body-entry-description-container">
                            <div class="menu-body-entry-title">
                            Breakfast Crepes and Eggs
                            </div>
                            <div class="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div class="menu-body-entry-amount-container">
                            <div class="decrement-button">-</div>
                            <div class="amount-counter">0</div>
                            <div class="increment-button">+</div>
                        </div>
                        </div>

                        <div class="menu-body-entry-container">
                        <img src="sweetParisLocation.jpeg" alt="menu item" class="menu-body-entry-photo"  />
                        <div class="menu-body-entry-description-container">
                            <div class="menu-body-entry-title">
                            Breakfast Crepes and Eggs
                            </div>
                            <div class="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div class="menu-body-entry-amount-container">
                            <div class="decrement-button">-</div>
                            <div class="amount-counter">0</div>
                            <div class="increment-button">+</div>
                        </div>
                        </div>

                        <div class="menu-body-entry-container">
                        <img src="sweetParisLocation.jpeg" alt="menu item" class="menu-body-entry-photo"  />
                        <div class="menu-body-entry-description-container">
                            <div class="menu-body-entry-title">
                            Breakfast Crepes and Eggs
                            </div>
                            <div class="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div class="menu-body-entry-amount-container">
                            <div class="decrement-button">-</div>
                            <div class="amount-counter">0</div>
                            <div class="increment-button">+</div>
                        </div>
                        </div>

                        <div class="menu-body-entry-container">
                        <img src="sweetParisLocation.jpeg" alt="menu item" class="menu-body-entry-photo"  />
                        <div class="menu-body-entry-description-container">
                            <div class="menu-body-entry-title">
                            Breakfast Crepes and Eggs
                            </div>
                            <div class="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div class="menu-body-entry-amount-container">
                            <div class="decrement-button">-</div>
                            <div class="amount-counter">0</div>
                            <div class="increment-button">+</div>
                        </div>
                        </div>

                        <div class="menu-body-entry-container">
                        <img src="sweetParisLocation.jpeg" alt="menu item" class="menu-body-entry-photo"  />
                        <div class="menu-body-entry-description-container">
                            <div class="menu-body-entry-title">
                            Breakfast Crepes and Eggs
                            </div>
                            <div class="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div class="menu-body-entry-amount-container">
                            <div class="decrement-button">-</div>
                            <div class="amount-counter">0</div>
                            <div class="increment-button">+</div>
                        </div>
                        </div>

                    </div>

                    <div class="menu-body-category-container" id="menu-body-soups-salads-and-paninis">

                        <div class="menu-body-entry-container">
                        <img src="sweetParisLocation.jpeg" alt="menu item" class="menu-body-entry-photo"  />
                        <div class="menu-body-entry-description-container">
                            <div class="menu-body-entry-title">
                            Soups, Salads and Paninis
                            </div>
                            <div class="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div class="menu-body-entry-amount-container">
                            <div class="decrement-button">-</div>
                            <div class="amount-counter">0</div>
                            <div class="increment-button">+</div>
                        </div>
                        </div>

                        <div class="menu-body-entry-container">
                        <img src="sweetParisLocation.jpeg" alt="menu item" class="menu-body-entry-photo"  />
                        <div class="menu-body-entry-description-container">
                            <div class="menu-body-entry-title">
                            Soups, Salads and Paninis
                            </div>
                            <div class="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div class="menu-body-entry-amount-container">
                            <div class="decrement-button">-</div>
                            <div class="amount-counter">0</div>
                            <div class="increment-button">+</div>
                        </div>
                        </div>

                        <div class="menu-body-entry-container">
                        <img src="sweetParisLocation.jpeg" alt="menu item" class="menu-body-entry-photo"  />
                        <div class="menu-body-entry-description-container">
                            <div class="menu-body-entry-title">
                            Soups, Salads and Paninis
                            </div>
                            <div class="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div class="menu-body-entry-amount-container">
                            <div class="decrement-button">-</div>
                            <div class="amount-counter">0</div>
                            <div class="increment-button">+</div>
                        </div>
                        </div>

                        <div class="menu-body-entry-container">
                        <img src="sweetParisLocation.jpeg" alt="menu item" class="menu-body-entry-photo"  />
                        <div class="menu-body-entry-description-container">
                            <div class="menu-body-entry-title">
                            Soups, Salads and Paninis
                            </div>
                            <div class="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div class="menu-body-entry-amount-container">
                            <div class="decrement-button">-</div>
                            <div class="amount-counter">0</div>
                            <div class="increment-button">+</div>
                        </div>
                        </div>

                        <div class="menu-body-entry-container">
                        <img src="sweetParisLocation.jpeg" alt="menu item" class="menu-body-entry-photo"  />
                        <div class="menu-body-entry-description-container">
                            <div class="menu-body-entry-title">
                            Soups, Salads and Paninis
                            </div>
                            <div class="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div class="menu-body-entry-amount-container">
                            <div class="decrement-button">-</div>
                            <div class="amount-counter">0</div>
                            <div class="increment-button">+</div>
                        </div>
                        </div>

                    </div>

                    <div class="menu-body-category-container" id="menu-body-le-bar">

                        <div class="menu-body-entry-container">
                        <img src="sweetParisLocation.jpeg" alt="menu item" class="menu-body-entry-photo"  />
                        <div class="menu-body-entry-description-container">
                            <div class="menu-body-entry-title">
                            Le Bar
                            </div>
                            <div class="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div class="menu-body-entry-amount-container">
                            <div class="decrement-button">-</div>
                            <div class="amount-counter">0</div>
                            <div class="increment-button">+</div>
                        </div>
                        </div>

                        <div class="menu-body-entry-container">
                        <img src="sweetParisLocation.jpeg" alt="menu item" class="menu-body-entry-photo"  />
                        <div class="menu-body-entry-description-container">
                            <div class="menu-body-entry-title">
                            Le Bar
                            </div>
                            <div class="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div class="menu-body-entry-amount-container">
                            <div class="decrement-button">-</div>
                            <div class="amount-counter">0</div>
                            <div class="increment-button">+</div>
                        </div>
                        </div>

                        <div class="menu-body-entry-container">
                        <img src="sweetParisLocation.jpeg" alt="menu item" class="menu-body-entry-photo"  />
                        <div class="menu-body-entry-description-container">
                            <div class="menu-body-entry-title">
                            Le Bar
                            </div>
                            <div class="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div class="menu-body-entry-amount-container">
                            <div class="decrement-button">-</div>
                            <div class="amount-counter">0</div>
                            <div class="increment-button">+</div>
                        </div>
                        </div>

                        <div class="menu-body-entry-container">
                        <img src="sweetParisLocation.jpeg" alt="menu item" class="menu-body-entry-photo"  />
                        <div class="menu-body-entry-description-container">
                            <div class="menu-body-entry-title">
                            Le Bar
                            </div>
                            <div class="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div class="menu-body-entry-amount-container">
                            <div class="decrement-button">-</div>
                            <div class="amount-counter">0</div>
                            <div class="increment-button">+</div>
                        </div>
                        </div>

                        <div class="menu-body-entry-container">
                        <img src="sweetParisLocation.jpeg" alt="menu item" class="menu-body-entry-photo"  />
                        <div class="menu-body-entry-description-container">
                            <div class="menu-body-entry-title">
                            Le Bar
                            </div>
                            <div class="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div class="menu-body-entry-amount-container">
                            <div class="decrement-button">-</div>
                            <div class="amount-counter">0</div>
                            <div class="increment-button">+</div>
                        </div>
                        </div>

                        <div class="menu-body-entry-container">
                        <img src="sweetParisLocation.jpeg" alt="menu item" class="menu-body-entry-photo"  />
                        <div class="menu-body-entry-description-container">
                            <div class="menu-body-entry-title">
                            Le Bar
                            </div>
                            <div class="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div class="menu-body-entry-amount-container">
                            <div class="decrement-button">-</div>
                            <div class="amount-counter">0</div>
                            <div class="increment-button">+</div>
                        </div>
                        </div>

                        <div class="menu-body-entry-container">
                        <img src="sweetParisLocation.jpeg" alt="menu item" class="menu-body-entry-photo"  />
                        <div class="menu-body-entry-description-container">
                            <div class="menu-body-entry-title">
                            Le Bar
                            </div>
                            <div class="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div class="menu-body-entry-amount-container">
                            <div class="decrement-button">-</div>
                            <div class="amount-counter">0</div>
                            <div class="increment-button">+</div>
                        </div>
                        </div>

                    </div>

                    <div class="menu-body-category-container" id="menu-body-hot-drinks-and-milkshakes">

                        <div class="menu-body-entry-container">
                        <img src="sweetParisLocation.jpeg" alt="menu item" class="menu-body-entry-photo"  />
                        <div class="menu-body-entry-description-container">
                            <div class="menu-body-entry-title">
                            Hot Drinks and Milkshakes
                            </div>
                            <div class="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div class="menu-body-entry-amount-container">
                            <div class="decrement-button">-</div>
                            <div class="amount-counter">0</div>
                            <div class="increment-button">+</div>
                        </div>
                        </div>

                        <div class="menu-body-entry-container">
                        <img src="sweetParisLocation.jpeg" alt="menu item" class="menu-body-entry-photo"  />
                        <div class="menu-body-entry-description-container">
                            <div class="menu-body-entry-title">
                            Hot Drinks and Milkshakes
                            </div>
                            <div class="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div class="menu-body-entry-amount-container">
                            <div class="decrement-button">-</div>
                            <div class="amount-counter">0</div>
                            <div class="increment-button">+</div>
                        </div>
                        </div>

                        <div class="menu-body-entry-container">
                        <img src="sweetParisLocation.jpeg" alt="menu item" class="menu-body-entry-photo"  />
                        <div class="menu-body-entry-description-container">
                            <div class="menu-body-entry-title">
                            Hot Drinks and Milkshakes
                            </div>
                            <div class="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div class="menu-body-entry-amount-container">
                            <div class="decrement-button">-</div>
                            <div class="amount-counter">0</div>
                            <div class="increment-button">+</div>
                        </div>
                        </div>

                        <div class="menu-body-entry-container">
                        <img src="sweetParisLocation.jpeg" alt="menu item" class="menu-body-entry-photo"  />
                        <div class="menu-body-entry-description-container">
                            <div class="menu-body-entry-title">
                            Hot Drinks and Milkshakes
                            </div>
                            <div class="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div class="menu-body-entry-amount-container">
                            <div class="decrement-button">-</div>
                            <div class="amount-counter">0</div>
                            <div class="increment-button">+</div>
                        </div>
                        </div>

                        <div class="menu-body-entry-container">
                        <img src="sweetParisLocation.jpeg" alt="menu item" class="menu-body-entry-photo"  />
                        <div class="menu-body-entry-description-container">
                            <div class="menu-body-entry-title">
                            Hot Drinks and Milkshakes
                            </div>
                            <div class="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div class="menu-body-entry-amount-container">
                            <div class="decrement-button">-</div>
                            <div class="amount-counter">0</div>
                            <div class="increment-button">+</div>
                        </div>
                        </div>

                        <div class="menu-body-entry-container">
                        <img src="sweetParisLocation.jpeg" alt="menu item" class="menu-body-entry-photo"  />
                        <div class="menu-body-entry-description-container">
                            <div class="menu-body-entry-title">
                            Hot Drinks and Milkshakes
                            </div>
                            <div class="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div class="menu-body-entry-amount-container">
                            <div class="decrement-button">-</div>
                            <div class="amount-counter">0</div>
                            <div class="increment-button">+</div>
                        </div>
                        </div>

                        <div class="menu-body-entry-container">
                        <img src="sweetParisLocation.jpeg" alt="menu item" class="menu-body-entry-photo"  />
                        <div class="menu-body-entry-description-container">
                            <div class="menu-body-entry-title">
                            Hot Drinks and Milkshakes
                            </div>
                            <div class="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div class="menu-body-entry-amount-container">
                            <div class="decrement-button">-</div>
                            <div class="amount-counter">0</div>
                            <div class="increment-button">+</div>
                        </div>
                        </div>

                        <div class="menu-body-entry-container">
                        <img src="sweetParisLocation.jpeg" alt="menu item" class="menu-body-entry-photo"  />
                        <div class="menu-body-entry-description-container">
                            <div class="menu-body-entry-title">
                            Hot Drinks and Milkshakes
                            </div>
                            <div class="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div class="menu-body-entry-amount-container">
                            <div class="decrement-button">-</div>
                            <div class="amount-counter">0</div>
                            <div class="increment-button">+</div>
                        </div>
                        </div>

                        <div class="menu-body-entry-container">
                        <img src="sweetParisLocation.jpeg" alt="menu item" class="menu-body-entry-photo"  />
                        <div class="menu-body-entry-description-container">
                            <div class="menu-body-entry-title">
                            Hot Drinks and Milkshakes
                            </div>
                            <div class="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div class="menu-body-entry-amount-container">
                            <div class="decrement-button">-</div>
                            <div class="amount-counter">0</div>
                            <div class="increment-button">+</div>
                        </div>
                        </div>

                        <div class="menu-body-entry-container">
                        <img src="sweetParisLocation.jpeg" alt="menu item" class="menu-body-entry-photo"  />
                        <div class="menu-body-entry-description-container">
                            <div class="menu-body-entry-title">
                            Hot Drinks and Milkshakes
                            </div>
                            <div class="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div class="menu-body-entry-amount-container">
                            <div class="decrement-button">-</div>
                            <div class="amount-counter">0</div>
                            <div class="increment-button">+</div>
                        </div>
                        </div>

                        <div class="menu-body-entry-container">
                        <img src="sweetParisLocation.jpeg" alt="menu item" class="menu-body-entry-photo"  />
                        <div class="menu-body-entry-description-container">
                            <div class="menu-body-entry-title">
                            Hot Drinks and Milkshakes
                            </div>
                            <div class="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div class="menu-body-entry-amount-container">
                            <div class="decrement-button">-</div>
                            <div class="amount-counter">0</div>
                            <div class="increment-button">+</div>
                        </div>
                        </div>

                        <div class="menu-body-entry-container">
                        <img src="sweetParisLocation.jpeg" alt="menu item" class="menu-body-entry-photo"  />
                        <div class="menu-body-entry-description-container">
                            <div class="menu-body-entry-title">
                            Hot Drinks and Milkshakes
                            </div>
                            <div class="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div class="menu-body-entry-amount-container">
                            <div class="decrement-button">-</div>
                            <div class="amount-counter">0</div>
                            <div class="increment-button">+</div>
                        </div>
                        </div>

                    </div>

                    <div class="menu-body-category-container" id="menu-body-beverages">

                        <div class="menu-body-entry-container">
                        <img src="sweetParisLocation.jpeg" alt="menu item" class="menu-body-entry-photo"  />
                        <div class="menu-body-entry-description-container">
                            <div class="menu-body-entry-title">
                            Water and Beverages
                            </div>
                            <div class="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div class="menu-body-entry-amount-container">
                            <div class="decrement-button">-</div>
                            <div class="amount-counter">0</div>
                            <div class="increment-button">+</div>
                        </div>
                        </div>

                        <div class="menu-body-entry-container">
                        <img src="sweetParisLocation.jpeg" alt="menu item" class="menu-body-entry-photo"  />
                        <div class="menu-body-entry-description-container">
                            <div class="menu-body-entry-title">
                            Water and Beverages
                            </div>
                            <div class="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div class="menu-body-entry-amount-container">
                            <div class="decrement-button">-</div>
                            <div class="amount-counter">0</div>
                            <div class="increment-button">+</div>
                        </div>
                        </div>

                        <div class="menu-body-entry-container">
                        <img src="sweetParisLocation.jpeg" alt="menu item" class="menu-body-entry-photo"  />
                        <div class="menu-body-entry-description-container">
                            <div class="menu-body-entry-title">
                            Water and Beverages
                            </div>
                            <div class="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div class="menu-body-entry-amount-container">
                            <div class="decrement-button">-</div>
                            <div class="amount-counter">0</div>
                            <div class="increment-button">+</div>
                        </div>
                        </div>

                        <div class="menu-body-entry-container">
                        <img src="sweetParisLocation.jpeg" alt="menu item" class="menu-body-entry-photo"  />
                        <div class="menu-body-entry-description-container">
                            <div class="menu-body-entry-title">
                            Water and Beverages
                            </div>
                            <div class="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div class="menu-body-entry-amount-container">
                            <div class="decrement-button">-</div>
                            <div class="amount-counter">0</div>
                            <div class="increment-button">+</div>
                        </div>
                        </div>

                        <div class="menu-body-entry-container">
                        <img src="sweetParisLocation.jpeg" alt="menu item" class="menu-body-entry-photo"  />
                        <div class="menu-body-entry-description-container">
                            <div class="menu-body-entry-title">
                            Water and Beverages
                            </div>
                            <div class="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div class="menu-body-entry-amount-container">
                            <div class="decrement-button">-</div>
                            <div class="amount-counter">0</div>
                            <div class="increment-button">+</div>
                        </div>
                        </div>

                        <div class="menu-body-entry-container">
                        <img src="sweetParisLocation.jpeg" alt="menu item" class="menu-body-entry-photo"  />
                        <div class="menu-body-entry-description-container">
                            <div class="menu-body-entry-title">
                            Water and Beverages
                            </div>
                            <div class="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div class="menu-body-entry-amount-container">
                            <div class="decrement-button">-</div>
                            <div class="amount-counter">0</div>
                            <div class="increment-button">+</div>
                        </div>
                        </div>

                        <div class="menu-body-entry-container">
                        <img src="sweetParisLocation.jpeg" alt="menu item" class="menu-body-entry-photo"  />
                        <div class="menu-body-entry-description-container">
                            <div class="menu-body-entry-title">
                            Water and Beverages
                            </div>
                            <div class="menu-body-entry-description">
                            Description descirption Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus?
                            </div>
                        </div>
                        <div class="menu-body-entry-amount-container">
                            <div class="decrement-button">-</div>
                            <div class="amount-counter">0</div>
                            <div class="increment-button">+</div>
                        </div>
                        </div>

                    </div>

                </div>

            </main>

        </div>
    );
};

export default OrderNow;