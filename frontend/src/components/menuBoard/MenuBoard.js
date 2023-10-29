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

    return {

    }

}

export default MenuBoard;