import {View, Text, Touchable} from '@components';
import {COLORS, WIDTH} from '@constants';
import {OnBoarding1, OnBoarding2, OnBoarding3} from '@icons';
import React, {useRef} from 'react';
import {ScrollView} from 'react-native';
import {createStyleSheet, useStyles} from 'react-native-unistyles';
import mmkv from '../../cache/mmkv';
import {navigate} from '@routes';

const data = [
  {id: 1, title: 'asdsad', image: <OnBoarding1 width={350} height={350} />},
  {id: 2, title: 'asdsad', image: <OnBoarding2 width={350} height={350} />},
  {id: 3, title: 'asdsad', image: <OnBoarding3 width={350} height={350} />},
];

const Intro = () => {
  const scrollRef = useRef<ScrollView>(null);
  const {styles} = useStyles(introStyles);
  return (
    <View flex={1} alignItems="center" justifyContent="center">
      <View height={400}>
        <ScrollView
          ref={scrollRef}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          style={styles.scrollview}
          horizontal>
          {data.map(item => (
            <View
              alignItems="center"
              justifyContent="center"
              width={WIDTH}
              key={item.id}>
              {item.image}
              <Text>{item.title}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
      <View marginVertical={20} flexDirection="row">
        {data.map(item => {
          return <View key={item.id} style={styles.dot} />;
        })}
      </View>
      <View width={'100%'}>
        <Touchable
          onPress={() => {
            navigate('Login');
          }}
          backgroundColor={COLORS['#25af7c']}
          height={60}
          width={'90%'}
          alignSelf="center"
          alignItems="center"
          borderRadius={20}
          justifyContent="center">
          <Text fontWeight="bold" fontSize={16} color="white">
            Davom etish
          </Text>
        </Touchable>
      </View>
    </View>
  );
};

export default Intro;

const introStyles = createStyleSheet(() => ({
  scrollview: {},
  dot: {
    width: 20,
    height: 4,
    backgroundColor: COLORS['#25af7c'],
    margin: 5,
    borderRadius: 20,
  },
}));
