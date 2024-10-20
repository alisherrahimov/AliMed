import React from 'react';
import MyView from '../MyView/MyView';
import {styles} from './MyCorusel.style';
import {Image} from 'react-native';

type MyCoruselProps = {
  item: any;
  index: number;
};

const MyCorusel: React.FunctionComponent<MyCoruselProps> = ({item}) => {
  return (
    <MyView style={styles.container}>
      <Image source={{uri: item.url}} style={styles.image} />
    </MyView>
  );
};

export default MyCorusel;
