import React from 'react';
import {MyCorusel, MyStyledButton, MyText, MyView} from '@components';
import {styles} from './Introduction.style';
import {FlatList} from 'react-native';
import {Colors, FONTSIZE, globalStyles} from '@constants';
import {useTheme} from '@hooks';
import FONTS from '@fonts';

const Introduction = () => {
  const {colors} = useTheme();
  return (
    <MyView style={styles.container}>
      <MyView style={styles.coruselView}>
        <FlatList
          bounces={false}
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
        <MyText textAlign="center" size={FONTSIZE.x5} font={FONTS.Medium}>
          The find your doctor app is the easiest way to find a doctor near you
        </MyText>
        <MyText
          marginVertical={10}
          textAlign="center"
          color={colors.textAndIconColor}
          size={FONTSIZE.x5}
          font={FONTS.Medium}>
          The find your doctor app is the easiest way to find a doctor near you
        </MyText>
        <MyView
          style={[
            globalStyles.flexDirection,
            globalStyles.center,
            styles.dotViewContainer,
          ]}>
          {[1, 2, 3].map((item, index) => (
            <MyView key={index} style={styles.dot} />
          ))}
        </MyView>
      </MyView>
      <MyView style={styles.buttonView}>
        <MyStyledButton onPress={() => {}}>
          <MyText color={Colors.dark.textColor} font={FONTS.Medium}>
            Get Started
          </MyText>
        </MyStyledButton>
      </MyView>
    </MyView>
  );
};

export default Introduction;
