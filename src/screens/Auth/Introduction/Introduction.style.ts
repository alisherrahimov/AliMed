import {StyleSheet} from 'react-native';
import globalStyles from '../../../constants/styles';
import {Colors, HEIGHT} from '@constants';

export const styles = StyleSheet.create({
  container: globalStyles.container,
  coruselView: {
    height: HEIGHT / 1.7,
  },
  titleContainer: {
    marginTop: -20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.dark.x7563f7,
    marginHorizontal: 5,
  },
  buttonView: {
    // marginTop: 30,
  },
  dotViewContainer: {
    marginVertical: 20,
  },
});
