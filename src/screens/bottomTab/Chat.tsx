import {Input, Text, Touchable, View} from '@components';
import {WIDTH} from '@constants';
import {SearchIcon} from '@icons';
import {navigate} from '@routes';
import React from 'react';
import {ScrollView} from 'react-native';
import {createStyleSheet, useStyles} from 'react-native-unistyles';

const Header = () => {
  const {styles} = useStyles(stylesChat);
  return (
    <View height={180} justifyContent="flex-end">
      <View marginVertical={10} marginHorizontal={20}>
        <Text fontSize={26} fontWeight="bold">
          Messages
        </Text>
      </View>
      <View
        alignItems="center"
        flexDirection="row"
        justifyContent="center"
        marginVertical={10}>
        <View
          style={styles.view}
          height={45}
          width={45}
          alignItems="center"
          justifyContent="center"
          backgroundColor="#f2f2f2">
          <SearchIcon width={20} height={20} color="gray" />
        </View>
        <Input
          style={styles.input}
          width={WIDTH - 40 - 45}
          height={45}
          backgroundColor="#f2f2f2"
          placeholder="Search"
        />
      </View>
    </View>
  );
};

const Chat = () => {
  return (
    <View flex={1}>
      <Header />
      <ScrollView>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((item, index) => (
          <Touchable
            key={index}
            onPress={() => {
              navigate('PrivateChat');
            }}>
            <View
              flexDirection="row"
              justifyContent="space-between"
              padding={10}>
              <View>
                <Text fontSize={18}>User {item}</Text>
                <Text fontSize={16} color="gray">
                  Last message
                </Text>
              </View>
              <View>
                <Text fontSize={16} color="gray">
                  12:00 PM
                </Text>
              </View>
            </View>
          </Touchable>
        ))}
      </ScrollView>
    </View>
  );
};

export default Chat;

const stylesChat = createStyleSheet(() => {
  return {
    input: {
      borderTopRightRadius: 20,
      borderBottomRightRadius: 20,
    },
    view: {
      borderTopLeftRadius: 20,
      borderBottomLeftRadius: 20,
    },
  };
});
