import React from 'react';
import SpecialFontText from './components/specialFontText/SpecialFontText';

function PopularItems() {
    return (
        <div className="menu-main-app-square-1">

          <SpecialFontText as="div" className="menu-main-app-square-title" fontSize="3rem">
            Popular Picks
          </SpecialFontText>

          <div className="menu-main-app-square-description">
            Can't decide on what to order? Here's some fan favorites!
          </div>
          <div className="menu-main-app-square-container-top">
            <div className="menu-main-app-square-container">

              <div className="square-container-item">
                <SpecialFontText as="div" className="square-container-item-title" fontSize="2.5rem">
                  Smore's Crepeeeeeeeee
                </SpecialFontText>
                <img src="/sweetParisLocation.jpeg" alt="popular pick menu item 1" className="popular-picks-photo"  />
              </div>

              <div className="square-container-item">
                <SpecialFontText as="div" className="square-container-item-title" fontSize="2.5rem">
                  Smore's Crepeeeeeeeee
                </SpecialFontText>
                <img src="/sweetParisLocation.jpeg" alt="popular pick menu item 2" className="popular-picks-photo"  />
              </div>

              <div className="square-container-item">
                <SpecialFontText as="div" className="square-container-item-title" fontSize="2.5rem">
                  Smore's Crepeeeeeeeee
                </SpecialFontText>
                <img src="/sweetParisLocation.jpeg" alt="popular pick menu item 3" className="popular-picks-photo"  />
              </div>

              <div className="square-container-item">
                <SpecialFontText as="div" className="square-container-item-title" fontSize="2.5rem">
                  Smore's Crepeeeeeeeee
                </SpecialFontText>
                <img src="/sweetParisLocation.jpeg" alt="popular pick menu item 4" className="popular-picks-photo"  />
              </div>
            </div>
          </div>
        </div>
    );
}

export default PopularItems;