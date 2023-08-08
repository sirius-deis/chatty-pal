import { createContext, useState } from 'react';

export const ThemeContext = createContext({
  theme: 'light',
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const changeTheme = (theme) => {
    setTheme(theme);
  };

  const value = {
    theme,
    changeTheme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
