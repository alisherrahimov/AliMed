import {DimensionValue, TextStyle, Text as TextX} from 'react-native';
import React from 'react';
import {UnistylesRuntime} from 'react-native-unistyles';
import {COLORS} from '@constants';
import FONTS from '@fonts';

type TextProps = {
  children: React.ReactNode;
  color?: string;
  fontSize?: number;
  fontWeight?:
    | 'bold'
    | 'normal'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  lineHeight?: number;
  align?: 'center' | 'left' | 'right';
  fontFamily?: string;
  style?: TextStyle;
  margin?: DimensionValue | undefined;
  padding?: DimensionValue | undefined;
  marginTop?: DimensionValue | undefined;
  marginBottom?: DimensionValue | undefined;
  marginLeft?: DimensionValue | undefined;
  marginRight?: DimensionValue | undefined;
  marginHorizontal?: DimensionValue | undefined;
  marginVertical?: DimensionValue | undefined;
  paddingHorizontal?: DimensionValue | undefined;
  paddingVertical?: DimensionValue | undefined;
  paddingTop?: DimensionValue | undefined;
  paddingBottom?: DimensionValue | undefined;
  paddingLeft?: DimensionValue | undefined;
  backgroundColor?: string;
};

const Text: React.FC<TextProps> = ({
  children,
  align,
  color,
  fontFamily = FONTS.Medium,
  fontSize = 14,
  fontWeight,
  lineHeight,
  style,
  margin,
  padding,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  marginHorizontal,
  marginVertical,
  paddingHorizontal,
  paddingVertical,
  paddingTop,
  paddingBottom,
  paddingLeft,
  backgroundColor,
}) => {
  const colors =
    UnistylesRuntime.colorScheme === 'dark'
      ? COLORS['#ffffff']
      : COLORS['#000000'];
  const fw = fontWeight || '600';
  return (
    <TextX
      style={[
        {
          color: color || colors,
          fontSize,
          fontWeight: fw,
          lineHeight,
          textAlign: align,
          fontFamily,
          margin,
          padding,
          marginTop,
          marginBottom,
          marginLeft,
          marginRight,
          marginHorizontal,
          marginVertical,
          paddingHorizontal,
          paddingVertical,
          paddingTop,
          paddingBottom,
          paddingLeft,
          backgroundColor,
        },
        style,
      ]}>
      {children}
    </TextX>
  );
};

export default Text;
