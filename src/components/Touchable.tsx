import {DimensionValue, TouchableOpacity, ViewStyle} from 'react-native';
import React, {PropsWithChildren} from 'react';

interface TouchableProps extends PropsWithChildren {
  onPress?: () => void;
  style?: ViewStyle;
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  alignSelf?: 'center' | 'flex-start' | 'flex-end';
  flexWrap?: 'wrap' | 'nowrap';
  justifyContent?:
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'flex-start'
    | 'flex-end';
  flex?: number;
  width?: DimensionValue | undefined;
  height?: DimensionValue | undefined;
  backgroundColor?: string;
  borderRadius?: number;
}

const Touchable: React.FC<TouchableProps> = ({
  children,
  onPress,
  style,
  alignItems,
  alignSelf,
  flexWrap,
  justifyContent,
  flex,
  width,
  height,
  backgroundColor,
  borderRadius,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={{
        alignItems,
        alignSelf,
        flexWrap,
        justifyContent,
        flex,
        width,
        borderRadius,
        backgroundColor,
        height,
        ...style,
      }}>
      {children}
    </TouchableOpacity>
  );
};

export default Touchable;
