import {COLORS} from '@constants';

export const lightTheme = {
  colors: {
    typography: COLORS['#000000'],
    background: COLORS['#ffffff'],
    green: COLORS['#199A8E'],
  },
} as const;

export const darkTheme = {
  colors: {
    typography: COLORS['#ffffff'],
    background: COLORS['#000000'],
    green: COLORS['#199A8E'],
  },
} as const;
