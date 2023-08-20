import { createContext, useState } from 'react';

export const ThemeContext = createContext({
  theme: 'light',
  changeTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const changeTheme = (theme) => {
    console.log(theme);
    setTheme(theme);
  };

  const value = {
    theme,
    changeTheme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
