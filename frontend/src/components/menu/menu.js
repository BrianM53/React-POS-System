import React from 'react';
import { Link } from 'react-router-dom';
import NavOptions from '../utility/navOptions';
import { useRef, useEffect } from 'react';
import './Menu.css'

const Menu = () => 
{
    // const sweetCrepes = useRef(null);
    // const savoryCrepes = useRef(null);
    // const kidsCrepes = useRef(null);
    // const sweetParisWaffles = useRef(null);
    // const breakfastCrepesAndWaffles = useRef(null);
    // const soupsSaladsAndPaninis = useRef(null);
    // const leBar = useRef(null);
    // const hotDrinksAndMilkshakes = useRef(null);
    // const beverages = useRef(null);
  
    // let activeSection = sweetCrepes.current;
  
    // useEffect(() => 
    // {
    //   const sweetCrepesCategory = sweetCrepes.current;
    //   const savoryCrepesCategory = savoryCrepes.current;
    //   const kidsCrepesCategory = kidsCrepes.current;
    //   const sweetParisWafflesCategory = sweetParisWaffles.current;
    //   const breakfastCrepesAndEggsCategory = breakfastCrepesAndWaffles.current;
    //   const soupsSaladsAndPaninisCategory = soupsSaladsAndPaninis.current;
    //   const leBarCategory = leBar.current;
    //   const hotDrinksAndMilkshakesCategory = hotDrinksAndMilkshakes.current;
    //   const waterAndBeveragesCategory = beverages.current;
  
    //   sweetCrepesCategory.addEventListener("click", () => {
    //     activeSection.style.display = "none";
    //     sweetCrepes.current.style.display = "flex";
    //     activeSection = sweetCrepes.current;
    //   });
  
    //   savoryCrepesCategory.addEventListener("click", () => {
    //     activeSection.style.display = "none";
    //     savoryCrepes.current.style.display = "flex";
    //     activeSection = savoryCrepes.current;
    //   });
  
    //   kidsCrepesCategory.addEventListener("click", () => {
    //     activeSection.style.display = "none";
    //     kidsCrepes.current.style.display = "flex";
    //     activeSection = kidsCrepes.current;
    //   });
  
    //   sweetParisWafflesCategory.addEventListener("click", () => {
    //     activeSection.style.display = "none";
    //     sweetParisWaffles.current.style.display = "flex";
    //     activeSection = sweetParisWaffles.current;
    //   });
  
    //   breakfastCrepesAndEggsCategory.addEventListener("click", () => {
    //     activeSection.style.display = "none";
    //     breakfastCrepesAndWaffles.current.style.display = "flex";
    //     activeSection = breakfastCrepesAndWaffles.current;
    //   });
  
    //   soupsSaladsAndPaninisCategory.addEventListener("click", () => {
    //     activeSection.style.display = "none";
    //     soupsSaladsAndPaninis.current.style.display = "flex";
    //     activeSection = soupsSaladsAndPaninis.current;
    //   });
  
    //   leBarCategory.addEventListener("click", () => {
    //     activeSection.style.display = "none";
    //     leBar.current.style.display = "flex";
    //     activeSection = leBar.current;
    //   });
  
    //   hotDrinksAndMilkshakesCategory.addEventListener("click", () => {
    //     activeSection.style.display = "none";
    //     hotDrinksAndMilkshakes.current.style.display = "flex";
    //     activeSection = hotDrinksAndMilkshakes.current;
    //   });
  
    //   waterAndBeveragesCategory.addEventListener("click", () => {
    //     activeSection.style.display = "none";
    //     beverages.current.style.display = "flex";
    //     activeSection = beverages.current;
    //   });
    // }, []);

    return (
        <div className="menu-body">
            <header className="menu-header">Welcome to the Sweet Paris Cafe!</header>
            <nav className="menu-nav">
            <Link to="/settings">
                <i className="fa-solid fa-gear fa-2xl" id="menu-nav-settings-icon"></i>
            </Link>
            <Link to="/app">
                <i className="fa-solid fa-home fa-2xl" id="menu-nav-home-icon"></i>
            </Link>
            <div className="menu-nav-title">Sweet Paris: Crepes and Cafe</div>
            <NavOptions />
            
            </nav>
            <main class="menu-main-menu">
                <div class="menu-main-menu-header">
                Menu
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
                    </div>

                    <div class="menu-body-category-container" id="menu-body-savory-crepes">

                        <div className="menu-body-entry-container">
                                <img src="\sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo" />
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
                            <img src="\sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo" />
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
                            <img src="\sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo" />
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
                            <img src="\sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo" />
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
                            <img src="\sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo" />
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
                            <img src="\sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo" />
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
                            <img src="\sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo" />
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
                            <img src="\sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo" />
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
                            <img src="\sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo" />
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
                            <img src="\sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo" />
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
                            <img src="\sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo" />
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

                    <div class="menu-body-category-container" id="menu-body-kids-crepes">
                        
                        <div className="menu-body-entry-container">
                            <img src="\sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo" />
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
                            <img src="\sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo" />
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
                            <img src="\sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo" />
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
                            <img src="\sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo" />
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
                            <img src="\sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo" />
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
                            <img src="\sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo" />
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

                    <div class="menu-body-category-container" id="menu-body-sweet-paris-waffles">

                        <div className="menu-body-entry-container">
                            <img src="\sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo" />
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
                            <img src="\sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo" />
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
                            <img src="\sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo" />
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
                            <img src="\sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo" />
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

                    <div class="menu-body-category-container" id="menu-body-breakfast-crepes-and-waffles">

                        <div className="menu-body-entry-container">
                            <img src="\sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo" />
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
                            <img src="\sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo" />
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
                            <img src="\sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo" />
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
                            <img src="\sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo" />
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
                            <img src="\sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo" />
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
                            <img src="\sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo" />
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
                            <img src="\sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo" />
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
                            <img src="\sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo" />
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
                            <img src="\sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo" />
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

                    <div class="menu-body-category-container" id="menu-body-soups-salads-and-paninis">

                        <div className="menu-body-entry-container">
                            <img src="\sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo" />
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
                            <img src="\sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo" />
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
                            <img src="\sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo" />
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
                            <img src="\sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo" />
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
                            <img src="\sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo" />
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

                    <div class="menu-body-category-container" id="menu-body-le-bar">

                        <div className="menu-body-entry-container">
                            <img src="\sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo" />
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
                            <img src="\sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo" />
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
                            <img src="\sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo" />
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
                            <img src="\sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo" />
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
                            <img src="\sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo" />
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
                            <img src="\sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo" />
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
                            <img src="\sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo" />
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
                    
                    <div class="menu-body-category-container" id="menu-body-hot-drinks-and-milkshakes">

                        <div className="menu-body-entry-container">
                            <img src="\sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo" />
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
                            <img src="\sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo" />
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
                            <img src="\sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo" />
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
                            <img src="\sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo" />
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
                            <img src="\sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo" />
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
                            <img src="\sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo" />
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
                            <img src="\sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo" />
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
                            <img src="\sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo" />
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
                            <img src="\sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo" />
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
                            <img src="\sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo" />
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
                            <img src="\sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo" />
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
                            <img src="\sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo" />
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
                            <img src="\sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo" />
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
                            <img src="\sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo" />
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
                            <img src="\sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo" />
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
                            <img src="\sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo" />
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

                    <div class="menu-body-category-container" id="menu-body-beverages">

                        <div className="menu-body-entry-container">
                            <img src="\sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo" />
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
                            <img src="\sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo" />
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
                            <img src="\sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo" />
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
                            <img src="\sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo" />
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
                            <img src="\sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo" />
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
                            <img src="\sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo" />
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
                            <img src="\sweetParisLocation.jpeg" alt="menu item" className="menu-body-entry-photo" />
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
                    <i className="fa-brands fa-square-instagram fa-2xl menu-footer-smlink" id="menu-footer-instagram"></i>
                    <i className="fa-brands fa-twitter fa-2xl menu-footer-smlink" id="menu-footer-twitter"></i>
                    <i className="fa-brands fa-facebook fa-2xl menu-footer-smlink" id="menu-footer-facebook"></i>
                    <i className="fa-brands fa-tiktok fa-2xl menu-footer-smlink" id="menu-footer-tiktok"></i>
                </div>
            </footer>
        </div>
    );
};
        
export default Menu;