// @ts-nocheck
import React, { ReactNode, useState } from "react";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import { dark, light } from "cryption-uikit-v2";

const ThemeContext = React.createContext({
  isDark: true,
  toggleTheme: () => null,
});

const ThemeContextProvider: React.FC<ReactNode> = ({ children }) => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(() => !isDark);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <SCThemeProvider theme={isDark ? dark : light}>
        {children}
      </SCThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
