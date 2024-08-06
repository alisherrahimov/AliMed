import {
  Input,
  Text,
  Touchable,
  TouchableWithOutKeyBoard,
  View,
} from '@components';
import {COLORS} from '@constants';
import {navigate} from '@routes';

import React, {useCallback, useState} from 'react';
import {KeyboardAvoidingView} from 'react-native';

import {createStyleSheet, useStyles} from 'react-native-unistyles';

const Login = () => {
  const {theme, styles} = useStyles(loginStyles);
  const [phone, setPhone] = useState<string>('');

  const onLoginAction = useCallback(async () => {
    navigate('BottomTab');
  }, []);

  return (
    <View backgroundColor={theme.colors.background} flex={1}>
      <TouchableWithOutKeyBoard>
        <KeyboardAvoidingView style={{flex: 1}} behavior="height">
          <View height={200} paddingHorizontal={20} justifyContent="flex-end">
            <Text fontWeight="bold" fontSize={32}>
              Assalom Alaykum Mehmon 👋
            </Text>
            <Text fontWeight="bold" fontSize={22}>
              AliMed ga xush kelibsiz!
            </Text>
          </View>
          <View marginTop={80} paddingHorizontal={20}>
            <Text>Telefon raqamingizni kiriting</Text>
            <Input
              onChangeText={text => {
                setPhone(text);
              }}
              value={formatPhoneNumber(phone)}
              placeholderTextColor="gray"
              color={theme.colors.typography}
              placeholder="998 99 964 24 12"
              width={'100%'}
              height={50}
              size={18}
              style={styles.input}
              keyboardType="decimal-pad"
              maxLength={16}
            />
          </View>
          <View flex={1} justifyContent="flex-end" padding={20}>
            <Touchable
              onPress={onLoginAction}
              borderRadius={16}
              height={60}
              backgroundColor={COLORS['#25af7c']}
              width={'100%'}
              alignItems="center"
              justifyContent="center">
              <Text fontSize={18} color={'white'}>
                Davom etish
              </Text>
            </Touchable>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithOutKeyBoard>
    </View>
  );
};
// 998 99 964 24 12 like this
const formatPhoneNumber = (value: string) => {
  let cleaned = ('' + value).replace(/\D/g, '');

  // Limit to 12 digits
  if (cleaned.length > 12) {
    cleaned = cleaned.substring(0, 12);
  }

  // Format the cleaned string
  let formatted = cleaned;
  if (cleaned.length > 3) {
    formatted = cleaned.slice(0, 3) + ' ' + cleaned.slice(3);
  }
  if (cleaned.length > 5) {
    formatted = formatted.slice(0, 6) + ' ' + cleaned.slice(5);
  }
  if (cleaned.length > 8) {
    formatted = formatted.slice(0, 10) + ' ' + cleaned.slice(8);
  }
  if (cleaned.length > 10) {
    formatted = formatted.slice(0, 13) + ' ' + cleaned.slice(10);
  }
  return formatted;
};

export default Login;

const loginStyles = createStyleSheet(() => {
  return {
    input: {
      borderBottomColor: COLORS['#25af7c'],
      borderBottomWidth: 1,
    },
  };
});
