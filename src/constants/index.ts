import {FONTS, FONTSIZE} from './font';
import {Dimensions} from 'react-native';
import {MAIN_URL} from './urls';
import {Colors} from './colors';
import globalStyles from './styles';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export {WIDTH, HEIGHT, MAIN_URL, FONTS, FONTSIZE, Colors, globalStyles};
