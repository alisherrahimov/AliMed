import {Dimensions} from 'react-native';
import {MAIN_URL} from './urls';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export {default as COLORS} from './colors';
export {WIDTH, HEIGHT, MAIN_URL};
