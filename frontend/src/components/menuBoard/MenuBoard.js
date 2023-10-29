import React from 'react';
import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';

const MenuBoard = () => 
{
    const sweetCrepes = useRef(null);
    const savoryCrepes = useRef(null);
    const kidsCrepes = useRef(null);
    const sweetParisWaffles = useRef(null);
    const breakfastCrepesAndWaffles = useRef(null);
    const soupsSaladsAndPaninis = useRef(null);
    const leBar = useRef(null);
    const hotDrinksAndMilkshakes = useRef(null);
    const beverages = useRef(null);
  
    let activeSection = sweetCrepes.current;
  
    useEffect(() => 
    {
      const sweetCrepesCategory = sweetCrepes.current;
      const savoryCrepesCategory = savoryCrepes.current;
      const kidsCrepesCategory = kidsCrepes.current;
      const sweetParisWafflesCategory = sweetParisWaffles.current;
      const breakfastCrepesAndEggsCategory = breakfastCrepesAndWaffles.current;
      const soupsSaladsAndPaninisCategory = soupsSaladsAndPaninis.current;
      const leBarCategory = leBar.current;
      const hotDrinksAndMilkshakesCategory = hotDrinksAndMilkshakes.current;
      const waterAndBeveragesCategory = beverages.current;
  
      sweetCrepesCategory.addEventListener("click", () => {
        activeSection.style.display = "none";
        sweetCrepes.current.style.display = "flex";
        activeSection = sweetCrepes.current;
      });
  
      savoryCrepesCategory.addEventListener("click", () => {
        activeSection.style.display = "none";
        savoryCrepes.current.style.display = "flex";
        activeSection = savoryCrepes.current;
      });
  
      kidsCrepesCategory.addEventListener("click", () => {
        activeSection.style.display = "none";
        kidsCrepes.current.style.display = "flex";
        activeSection = kidsCrepes.current;
      });
  
      sweetParisWafflesCategory.addEventListener("click", () => {
        activeSection.style.display = "none";
        sweetParisWaffles.current.style.display = "flex";
        activeSection = sweetParisWaffles.current;
      });
  
      breakfastCrepesAndEggsCategory.addEventListener("click", () => {
        activeSection.style.display = "none";
        breakfastCrepesAndWaffles.current.style.display = "flex";
        activeSection = breakfastCrepesAndWaffles.current;
      });
  
      soupsSaladsAndPaninisCategory.addEventListener("click", () => {
        activeSection.style.display = "none";
        soupsSaladsAndPaninis.current.style.display = "flex";
        activeSection = soupsSaladsAndPaninis.current;
      });
  
      leBarCategory.addEventListener("click", () => {
        activeSection.style.display = "none";
        leBar.current.style.display = "flex";
        activeSection = leBar.current;
      });
  
      hotDrinksAndMilkshakesCategory.addEventListener("click", () => {
        activeSection.style.display = "none";
        hotDrinksAndMilkshakes.current.style.display = "flex";
        activeSection = hotDrinksAndMilkshakes.current;
      });
  
      waterAndBeveragesCategory.addEventListener("click", () => {
        activeSection.style.display = "none";
        beverages.current.style.display = "flex";
        activeSection = beverages.current;
      });
    }, []);

    return (
        <div className="menu-body">
            <header className="menu-header">Welcome to the Sweet Paris Cafe!</header>
            <nav className="menu-nav">
            <Link to="settings.html">
                <i className="fa-solid fa-gear fa-2xl" id="menu-nav-settings-icon"></i>
            </Link>
            <Link to="index.html">
                <i className="fa-solid fa-home fa-2xl" id="menu-nav-home-icon"></i>
            </Link>
            <div className="menu-nav-title">Sweet Paris: Crepes and Cafe</div>
            <div className="menu-nav-container">
                <Link to="ordernow.html">
                <button className="menu-nav-container-button" id="menu-nav-container-button-ordernow">Order Now</button>
                </Link>
                <Link to="menu.html">
                <button className="menu-nav-container-button" id="menu-nav-container-button-menu">Menu</button>
                </Link>
                <Link to="aboutus.html">
                <button className="menu-nav-container-button" id="menu-nav-container-button-aboutus">About Us</button>
                </Link>
                <Link to="contactus.html">
                <button className="menu-nav-container-button" id="menu-nav-container-button-contactus">Contact Us</button>
                </Link>
            </div>
            <button className="menu-nav-admin-login">Admin Login</button>
            </nav>
            
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
        
export default MenuBoard;