import "./categories.css"

/**
 * Component for displaying menu categories.
 * @component
 * @function Categories
 * @param {Object} props - Component props.
 * @param {string} props.activeSection - The currently active category.
 * @param {Function} props.setActiveSection - Function to set the active category.
 * @returns {JSX.Element} - Rendered component.
 */
export function Categories( {activeSection, setActiveSection} ) {
    return (
        <div className="menu-main-menu-categories">
          <div 
          className={activeSection === "Sweet Crepes" ? 'category-item-active' : 'category-item-passive'} 
          id="menu-main-menu-sweet-crepes" 
          onClick={() => setActiveSection('Sweet Crepes')}
          >
            Sweet Crepes
          </div>
          <div 
          className={activeSection === "Savory Crepes" ? 'category-item-active' : 'category-item-passive'}  
          id="menu-main-menu-savory-crepes" 
          onClick={() => setActiveSection('Savory Crepes')}    
          >
            Savory Crepes
          </div>
          <div 
          className={activeSection === "Kids Crepes" ? 'category-item-active' : 'category-item-passive'} 
          id="menu-main-menu-kids-crepes" 
          onClick={() => setActiveSection('Kids Crepes')}       
          >
            Kids Crepes
          </div>
          <div 
          className={activeSection === "Waffles" ? 'category-item-active' : 'category-item-passive'} 
          id="menu-main-menu-sweet-paris-waffles" 
          onClick={() => setActiveSection('Waffles')}        
          >
            Waffles
          </div>
          <div 
          className={activeSection === "Breakfast Crepes" ? 'category-item-active' : 'category-item-passive'}  
          id="menu-main-menu-breakfast-crepes-and-eggs" 
          onClick={() => setActiveSection('Breakfast Crepes')}    
          >
            Breakfast Crepes
          </div>
          <div 
          className={activeSection === "Salads" ? 'category-item-active' : 'category-item-passive'}  
          id="menu-main-menu-soups-salads-and-paninis" 
          onClick={() => setActiveSection('Salads')}      
          >
            Salads
          </div>
          <div 
          className={activeSection === "Paninis" ? 'category-item-active' : 'category-item-passive'}  
          id="menu-main-menu-soups-salads-and-paninis" 
          onClick={() => setActiveSection('Paninis')}      
          >
            Paninis
          </div>
          <div 
          className={activeSection === "Hot Drinks" ? 'category-item-active' : 'category-item-passive'}  
          id="menu-main-menu-hot-drinks-and-milkshakes" 
          onClick={() => setActiveSection('Hot Drinks')}      
          >
            Hot Drinks
          </div>
          <div 
          className={activeSection === "Milkshakes" ? 'category-item-active' : 'category-item-passive'} 
          id="menu-main-menu-hot-drinks-and-milkshakes" 
          onClick={() => setActiveSection('Milkshakes')}      
          >
            Milkshakes
          </div>
          <div 
          className={activeSection === "Beverages" ? 'category-item-active' : 'category-item-passive'}  
          id="menu-main-menu-water-and-beverages" 
          onClick={() => setActiveSection('Beverages')}     
          >
            Beverages
          </div>
          <div 
          className={activeSection === "Seasonal" ? 'category-item-active' : 'category-item-passive'}  
          id="menu-main-menu-seasonal" 
          onClick={() => setActiveSection('Seasonal')}     
          >
            Seasonal
          </div>
        </div>
    );
}