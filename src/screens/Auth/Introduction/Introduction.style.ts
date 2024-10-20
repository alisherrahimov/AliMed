import {StyleSheet} from 'react-native';
import globalStyles from '../../../constants/styles';
import {HEIGHT} from '@constants';

export const styles = StyleSheet.create({
  container: globalStyles.container,
  coruselView: {
    height: HEIGHT / 1.7,
  },
  titleContainer: {
    marginTop: -20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 1,
    padding: 20,
  },
});
