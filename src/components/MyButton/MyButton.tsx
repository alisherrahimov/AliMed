import {StyleProp, TouchableOpacity, ViewStyle} from 'react-native';
import React, {PropsWithChildren} from 'react';

interface MyButtonProps extends PropsWithChildren {
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

const MyButton: React.FunctionComponent<MyButtonProps> = ({
  onPress,
  children,
  style,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={style} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

export default MyButton;
