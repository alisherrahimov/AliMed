export interface ColorsI {
  backgroundColor: string;
  textColor: string;
  x7563f7: string;
  textAndIconColor: string;
}
const Colors = {
  light: {
    backgroundColor: '#fff',
    textColor: '#000',
    x7563f7: '#7563f7',
    xa0a0a1: '#a0a0a1',
  },
  dark: {
    backgroundColor: '#000',
    textColor: '#fff',
    x7563f7: '#7563f7',
    xa0a0a1: '#a0a0a1',
  },
};

const lightTheme: ColorsI = {
  backgroundColor: '#fff',
  textColor: '#000',
  x7563f7: '#7563f7',
  textAndIconColor: '#000',
};

const darkTheme: ColorsI = {
  backgroundColor: '#000',
  textColor: '#fff',
  x7563f7: '#7563f7',
  textAndIconColor: Colors.dark.xa0a0a1,
};

export {darkTheme, lightTheme, Colors};
