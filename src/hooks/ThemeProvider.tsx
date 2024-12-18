import React, {PropsWithChildren} from 'react';
import mmkv from '../cache/mmkv';
import {ColorsI, darkTheme, lightTheme} from '../constants/colors';

interface ThemeProviderProps extends PropsWithChildren {
  theme: 'light' | 'dark';
  onChangeTheme: (value: 'light' | 'dark') => void;
  colors: ColorsI;
}

export const ThemeContext = React.createContext<ThemeProviderProps>({
  theme: 'light',
  onChangeTheme: () => {},
  colors: lightTheme,
});

const ThemeProvider: React.FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const [theme, setTheme] = React.useState<'light' | 'dark'>(() => {
    const val = mmkv.get('theme');
    return val === 'light' ? 'light' : 'dark';
  });

  const onChangeTheme = (value: 'light' | 'dark') => {
    setTheme(value);
    mmkv.set('theme', value);
  };

  const colors = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider
      value={{
        theme,
        onChangeTheme,
        colors,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
