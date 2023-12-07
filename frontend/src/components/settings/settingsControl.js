import { createContext, useContext, useState, useEffect } from "react";

/**
 * Context to manage user settings.
 * @typedef {Object} SettingsContext
 * @property {string} colorStyle - The current color style.
 * @property {function} setColorStyle - Function to set the color style.
 * @property {string} fontSize - The current font size.
 * @property {function} setFontSize - Function to set the font size.
 */
const SettingsContext = createContext();

/**
 * Provider component to manage user settings.
 * @component
 * @function SettingsProvider
 * @param {Object} props - React props.
 * @param {React.ReactNode} props.children - Child components.
 * @returns {JSX.Element} - Rendered component.
 */
export function SettingsProvider({ children }) {
    const [colorStyle, setColorStyle] = useState( localStorage.getItem("color-style") || "dark");
    const [fontSize, setFontSize] = useState( localStorage.getItem("font-size") || "normal");
    
    useEffect(() => {
      localStorage.setItem("color-style", colorStyle);
      
      if (colorStyle === "light") {
        document.documentElement.style.setProperty("--dark", "#DDE8E0");
        // document.documentElement.style.setProperty("--text-color", "black");
        document.documentElement.style.setProperty("--white", "black");
        document.documentElement.style.setProperty("--new-text-color", "black");
        document.documentElement.style.setProperty("--landing-text", "black");
        document.documentElement.style.setProperty("--landing-text-order", "#9C3E21");
        
        document.documentElement.style.setProperty("--shade1", "#89b3ae");
        document.documentElement.style.setProperty("--shade2", "#81a7a2");
        document.documentElement.style.setProperty("--normal", "#A7C8C5");
        document.documentElement.style.setProperty("--bright", "#81a7a2");
        
        document.documentElement.style.setProperty("--shadow", "rgba(0, 0, 0, 0.66)");
        // document.documentElement.style.setProperty("--shade1", "#6E8F8B");
        // document.documentElement.style.setProperty("--shade2", "#5F7A77");
        // document.documentElement.style.setProperty("--normal", "#81a7a2");
        // document.documentElement.style.setProperty("--bright", "#BDE3DF");
        
    } else if (colorStyle === "dark") {
        document.documentElement.style.setProperty("--dark", "#1c221d");
        document.documentElement.style.setProperty("--text-color", "white");
        document.documentElement.style.setProperty("--new-text-color", "white");
        document.documentElement.style.setProperty("--white", "white");
        document.documentElement.style.setProperty("--landing-text", "white");
        document.documentElement.style.setProperty("--landing-text-order", "#A7C8C5");
        
        // document.documentElement.style.setProperty("--shade1", "#89b3ae");
        // document.documentElement.style.setProperty("--shade2", "#81a7a2");
        // document.documentElement.style.setProperty("--normal", "#A7C8C5");
        // document.documentElement.style.setProperty("--bright", "#81a7a2");
        document.documentElement.style.setProperty("--shade1", "#6E8F8B");
        document.documentElement.style.setProperty("--shade2", "#5F7A77");
        document.documentElement.style.setProperty("--normal", "#81a7a2");
        document.documentElement.style.setProperty("--bright", "#6A8A86");
        document.documentElement.style.setProperty("--shadow", "rgba(255, 255, 255, 0.66)");
        
      } else if (colorStyle === "high-contrast") {
        document.documentElement.style.setProperty("--dark", "#000000");
        document.documentElement.style.setProperty("--text-color", "white");
        document.documentElement.style.setProperty("--new-text-color", "white");
        document.documentElement.style.setProperty("--white", "#00B2FF");
        document.documentElement.style.setProperty("--landing-text", "white");
        document.documentElement.style.setProperty("--landing-text-order", "#00B2FF");
        
        document.documentElement.style.setProperty("--shade1", "#89b3ae");
        document.documentElement.style.setProperty("--shade2", "#81a7a2");
        document.documentElement.style.setProperty("--normal", "#94C2BC");
        document.documentElement.style.setProperty("--shadow", "white");
        document.documentElement.style.setProperty("--bright", "white");
    }
    }, [colorStyle]);

    useEffect(() => {
      localStorage.setItem("font-size", fontSize);
    }, [fontSize]);

    return (
        <SettingsContext.Provider
        value={{
            colorStyle,
            setColorStyle,
            fontSize,
            setFontSize,
        }}
        >
        {children}
        </SettingsContext.Provider>
    );
}

/**
 * Custom hook to access user settings.
 * @function useSettings
 * @returns {SettingsContext} - Context with user settings.
 */
export function useSettings() {
  return useContext(SettingsContext);
}

// export function getUserRole() {
//   return localStorage.getItem("userRole") || "customer";
// }
// export function getUserName() {
//   return localStorage.getItem("userName") || "John Doe";
// }
// export function getUserEmail() {
//   return localStorage.getItem("userEmail") || "john@doe.com";
// }
// export function getEmployeeId() {
//   return localStorage.getItem("employeeId") || 1;
// }
