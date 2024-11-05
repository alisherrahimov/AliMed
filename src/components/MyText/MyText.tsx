import {Text as NativeText, TextProps, TextStyle} from 'react-native';
import React, {PropsWithChildren} from 'react';
import useTheme from '../../hooks/useTheme';
import FONTS from '@fonts';

interface CustomTextProps extends PropsWithChildren {
  color?: string;
  size?: number;
  font?: FONTS;
  margin?: number;
  padding?: number;
  onPress?: () => void;
  props?: TextProps;
  style?: TextStyle;
  marginHorizontal?: number;
  marginVertical?: number;
  paddingVertical?: number;
  paddingHorizontal?: number;
  textAlign?: 'center' | 'left' | 'right' | 'auto' | 'justify' | undefined;
}

const MyText: React.FunctionComponent<CustomTextProps> = ({
  color,
  font,
  margin,
  padding,
  size,
  onPress,
  props,
  style,
  children,
  textAlign,
  paddingHorizontal,
  paddingVertical,
  marginHorizontal,
  marginVertical,
}) => {
  const {colors} = useTheme();
  return (
    <NativeText
      {...props}
      onPress={onPress}
      style={[
        style,
        {
          color: color || colors.textColor,
          fontFamily: font || 'Quicksand-Regular',
          fontSize: size || 16,
          margin: margin,
          padding: padding,
          textAlign: textAlign,
          paddingHorizontal: paddingHorizontal,
          paddingVertical: paddingVertical,
          marginHorizontal: marginHorizontal,
          marginVertical: marginVertical,
        },
      ]}>
      {children}
    </NativeText>
  );
};

export default MyText;
