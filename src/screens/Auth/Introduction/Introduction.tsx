import React from 'react';
import {MyCorusel, MyText, MyView} from '@components';
import {styles} from './Introduction.style';
import {FlatList} from 'react-native';
import {FONTSIZE} from '@constants';

const Introduction = () => {
  return (
    <MyView style={styles.container}>
      <MyView style={styles.coruselView}>
        <FlatList
          pagingEnabled
          horizontal
          data={[
            {
              id: 1,
              title: '123',
              url: 'https://thumbs.dreamstime.com/b/happy-male-medical-doctor-portrait-hospital-190210328.jpg',
              description: '123',
            },
            {
              id: 2,
              title: '123',
              url: 'https://thumbs.dreamstime.com/b/happy-male-medical-doctor-portrait-hospital-190210328.jpg',
              description: '123',
            },
          ]}
          renderItem={({item, index}) => (
            <MyCorusel item={item} index={index} />
          )}
        />
      </MyView>
      <MyView style={styles.titleContainer}>
        <MyText textAlign="center" size={FONTSIZE.x5} font="Quicksand-Bold">
          The find your doctor app is the easiest way to find a doctor near you
        </MyText>
        <MyText
          marginVertical={10}
          textAlign="center"
          size={FONTSIZE.x5}
          font="Quicksand-Regular">
          The find your doctor app is the easiest way to find a doctor near you
        </MyText>
      </MyView>
    </MyView>
  );
};

export default Introduction;
