import React from 'react';
import SpecialFontText from "../specialFontText/SpecialFontText";

function PopularItems() {
    return (
        <div>

          <SpecialFontText as="div" className="menu-main-app-square-title" fontSize="3rem">
            Popular Picks
          </SpecialFontText>

          <div className="menu-main-app-square-description">
            Can't decide on what to order? Here's some fan favorites!
          </div>
          <div className="menu-main-app-square-container-top">
            {/* <div className="arrow-circle" onClick={() => handleScroll('left')}>
              <FontAwesomeIcon icon={['fas', 'arrow-left']} className="fa-2x" id="back-arrow-id" />
            </div> */}
            <div className="menu-main-app-square-container">
            {/* <div className="menu-main-app-square-container" ref={scrollContainerRef}> */}

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
            
            {/* <div className="back-arrow-circle" onClick={() => handleScroll('right')}>
              <FontAwesomeIcon icon={['fas', 'arrow-right']} className="fa-2x" id="forward-arrow-id" />
            </div> */}

          </div>
        </div>
    );
}

export default PopularItems;