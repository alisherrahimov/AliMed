import {StyleProp, ViewStyle} from 'react-native';
import React, {PropsWithChildren} from 'react';
import MyButton from '../MyButton/MyButton';
import {styles} from './MyStyledButton.style';
interface MyStyledButtonProps extends PropsWithChildren {
  onPress?: () => void | undefined;
  style?: StyleProp<ViewStyle>;
}

const MyStyledButton: React.FunctionComponent<MyStyledButtonProps> = ({
  onPress,
  style,
  children,
}) => {
  return (
    <MyButton onPress={onPress} style={[styles.container, style]}>
      {children}
    </MyButton>
  );
};

export default MyStyledButton;
