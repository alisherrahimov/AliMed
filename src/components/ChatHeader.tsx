import React from 'react';
import {View, Touchable} from '@components';
import {RowLeftIcon} from '@icons';
import {goBack} from '@routes';
import {COLORS} from '@constants';
import {Platform} from 'react-native';
const ChatHeader = () => {
  return (
    <View
      backgroundColor={COLORS['#ffffff']}
      alignItems="flex-start"
      justifyContent="flex-end"
      height={Platform.OS === 'ios' ? 110 : 70}>
      <View marginHorizontal={10} bottom={10}>
        <Touchable
          onPress={() => {
            goBack();
          }}
          width={35}
          height={35}
          borderRadius={20}
          alignItems="center"
          justifyContent="center">
          <RowLeftIcon color={COLORS['#25af7c']} />
        </Touchable>
      </View>
    </View>
  );
};

export default ChatHeader;
