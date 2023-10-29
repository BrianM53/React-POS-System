import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

/* order now functionality still not working */

const OrderNow = () => 
{
    const returnIncrementedID = () => 
    {
        cartID += 1;
        return cartID;
    };
    
    const returnDecrementedID = () => 
    {
    cartID -= 1;
    return cartID;
    };
    
    const addToCart = eachCategoryEntry => {
    const mainCartOrderContainer = document.querySelector('.main-cart-order-container');

    const newCartEntry = document.createElement('div');
    newCartEntry.classList.add('main-cart-entry');
    newCartEntry.id = `main-cart-entry-${returnIncrementedID()}`;

    const newCartEntryTitle = document.createElement('div');
    const title = eachCategoryEntry.querySelector('.menu-body-entry-title').textContent;
    newCartEntryTitle.textContent = title;

    const newCartEntryQuantity = document.createElement('div');
    newCartEntryQuantity.textContent = 1;

    newCartEntry.appendChild(newCartEntryTitle);
    newCartEntry.appendChild(newCartEntryQuantity);

    mainCartOrderContainer.appendChild(newCartEntry);
    };

    const removeFromCart = eachCategoryEntry => {
    let mainCartOrderContainer = document.querySelector('.main-cart-order-container');

    const mainCartEntries = mainCartOrderContainer.querySelectorAll('.main-cart-entry');

    mainCartEntries.forEach(eachEntry => {
        const entryTitle = eachEntry.querySelector('.main-cart-entry-title').textContent;
        const entryQuantity = eachEntry.querySelector('.main-cart-entry-quantity').textContent;

        const eachCategoryEntryTitle = eachCategoryEntry.querySelector('.menu-cart-entry-title');

        if (entryTitle === eachCategoryEntryTitle) {
        mainCartOrderContainer.removeChild(eachEntry);
        }
    });

    returnDecrementedID();
    };

    const incrementCartItem = eachCategoryEntry => {
    let mainCartOrderContainer = document.querySelector('.main-cart-order-container');

    const mainCartEntries = mainCartOrderContainer.querySelectorAll('.main-cart-entry');

    mainCartEntries.forEach(eachEntry => {
        const entryTitle = eachEntry.querySelector('.main-cart-entry-title').textContent;
        const entryQuantity = eachEntry.querySelector('.main-cart-entry-quantity');
        const eachCategoryEntryTitle = eachCategoryEntry.querySelector('.menu-cart-entry-title');

        if (entryTitle === eachCategoryEntryTitle) {
        entryQuantity.textContent = parseInt(entryQuantity.textContent) + 1;
        }
    });
    };

    const decrementCartItem = eachCategoryEntry => {
    let mainCartOrderContainer = document.querySelector('.main-cart-order-container');

    const mainCartEntries = mainCartOrderContainer.querySelectorAll('.main-cart-entry');

    mainCartEntries.forEach(eachEntry => {
        const entryTitle = eachEntry.querySelector('.main-cart-entry-title').textContent;
        const entryQuantity = eachEntry.querySelector('.main-cart-entry-quantity').textContent;

        const eachCategoryEntryTitle = eachCategoryEntry.querySelector('.menu-cart-entry-title');

        if (entryTitle === eachCategoryEntryTitle) {
        entryQuantity.textContent = parseInt(entryQuantity.textContent) - 1;
        }
    });
    };

    useEffect(() => {
    const categories = document.querySelectorAll('.menu-body-category-container');

    categories.forEach(eachCategory => {
        const categoryContainers = Array.from(eachCategory.children);

        let i = 0;
        const idOfCategoryContainer = eachCategory.getAttribute('id');

        categoryContainers.forEach(eachCategoryEntry => {
        const decrementButton = eachCategoryEntry.querySelector('.decrement-button');
        let amountCounter = eachCategoryEntry.querySelector('.amount-counter');
        const incrementButton = eachCategoryEntry.querySelector('.increment-button');

        decrementButton.id = `${idOfCategoryContainer}-minus-${i}`;
        amountCounter.id = `${idOfCategoryContainer}-value-${i}`;
        incrementButton.id = `${idOfCategoryContainer}-plus-${i}`;

        decrementButton.style.cursor = 'pointer';
        incrementButton.style.cursor = 'pointer';

        const itemName = eachCategoryEntry.querySelector('.menu-body-entry-title').textContent;

        decrementButton.addEventListener('click', () => {
            let value = parseInt(amountCounter.textContent);
            if (value >= 1) {
            amountCounter.textContent = (value - 1).toString();
            }

            if (value === 1) {
            removeFromCart(eachCategoryEntry);
            } else if (value >= 2) {
            decrementCartItem(eachCategoryEntry);
            }
        });

        incrementButton.addEventListener('click', () => {
            let value = parseInt(amountCounter.textContent);
            amountCounter.textContent = (value + 1).toString();

            if (value === 0) {
            addToCart(eachCategoryEntry);
            } else if (value >= 1) {
            incrementCartItem(eachCategoryEntry);
            }
        });

        i += 1;
        });
    });
    }, []);

    let cartID = 1;

    return {

    }

}

export default OrderNow;