import {FONTS, FONTSIZE} from './font';
import {Dimensions} from 'react-native';
import {MAIN_URL} from './urls';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export * from './colors';
export {WIDTH, HEIGHT, MAIN_URL, FONTS, FONTSIZE};
