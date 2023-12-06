import SpecialFontText from '../../fonts/specialFontText/SpecialFontText';


export default function Donate() {
    return (
        <div>

          <SpecialFontText as="div" className="menu-main-app-square-title" fontSize="3rem">
            Buy One, We Donate One!
          </SpecialFontText>

          <div className="menu-main-app-square-description">
            Still stumped? Order one of these and we'll donate a meal!
          </div>
          <div className="menu-main-app-square-container-top">
            <div className="menu-main-app-square-container">

              <div className="square-container-item">
                <SpecialFontText as="div" className="square-container-item-title" fontSize="2.5rem">
                  Truffled Caprese
                </SpecialFontText>
                <img src="/truffled-caprese.jpg" alt="popular pick menu item 1" className="popular-picks-photo"  />
              </div>

              <div className="square-container-item">
                <SpecialFontText as="div" className="square-container-item-title" fontSize="2.5rem">
                  Lemon and Sugar
                </SpecialFontText>
                <img src="/lemon-and-sugar.jpg" alt="popular pick menu item 1" className="popular-picks-photo"  />
              </div>

              <div className="square-container-item">
                <SpecialFontText as="div" className="square-container-item-title" fontSize="2.5rem">
                  Allison's Parfait
                </SpecialFontText>
                <img src="/allison's-parfait.jpg" alt="popular pick menu item 1" className="popular-picks-photo"  />
              </div>

            </div>
            
          </div>
        </div>
    );
}