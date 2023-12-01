import { createContext, useContext, useState, useEffect } from "react";

const SettingsContext = createContext();

export function SettingsProvider({ children }) {
    const [colorStyle, setColorStyle] = useState( localStorage.getItem("color-style") || "dark");
    const [fontSize, setFontSize] = useState( localStorage.getItem("font-size") || "normal");

    useEffect(() => {
      localStorage.setItem("color-style", colorStyle);

      if (colorStyle === "light") {
        document.documentElement.style.setProperty("--dark", "#DDE8E0");
        // document.documentElement.style.setProperty("--text-color", "black");
        document.documentElement.style.setProperty("--white", "black");
        document.documentElement.style.setProperty("--landing-text", "black");
        document.documentElement.style.setProperty("--landing-text-order", "#9C3E21");
        
        document.documentElement.style.setProperty("--shade1", "#6E8F8B");
        document.documentElement.style.setProperty("--shade2", "#5F7A77");
        document.documentElement.style.setProperty("--normal", "#81a7a2");
        document.documentElement.style.setProperty("--bright", "#BDE3DF");
        
    } else if (colorStyle === "dark") {
        document.documentElement.style.setProperty("--dark", "#1c221d");
        document.documentElement.style.setProperty("--text-color", "white");
        document.documentElement.style.setProperty("--white", "white");
        document.documentElement.style.setProperty("--landing-text", "white");
        document.documentElement.style.setProperty("--landing-text-order", "#A7C8C5");
        
        document.documentElement.style.setProperty("--shade1", "#89b3ae");
        document.documentElement.style.setProperty("--shade2", "#81a7a2");
        document.documentElement.style.setProperty("--normal", "#A7C8C5");
        document.documentElement.style.setProperty("--bright", "#BDE3DF");
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
