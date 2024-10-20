import {ViewStyle} from 'react-native';
import React, {PropsWithChildren} from 'react';
import MyButton from '../MyButton/MyButton';
interface MyStyledButtonProps extends PropsWithChildren {
  onPress: () => void;
  style: ViewStyle | ViewStyle[];
}

const MyStyledButton: React.FunctionComponent<MyStyledButtonProps> = ({
  onPress,
  style,
  children,
}) => {
  return (
    <MyButton onPress={onPress} style={Array.isArray(style) ? style : [style]}>
      {children}
    </MyButton>
  );
};

export default MyStyledButton;
