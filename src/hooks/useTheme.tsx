import {useContext} from 'react';
import {ThemeContext} from './ThemeProvider';

const useTheme = () => {
  const theme = useContext(ThemeContext);

  return {
    theme: theme.theme,
    colors: theme.colors,
    onChangeTheme: theme.onChangeTheme,
  };
};

export default useTheme;
