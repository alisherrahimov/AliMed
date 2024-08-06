import {
  ColorValue,
  DimensionValue,
  FlexAlignType,
  ViewStyle,
  View as ViewX,
} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {UnistylesRuntime} from 'react-native-unistyles';

interface ViewProps extends PropsWithChildren {
  style?: ViewStyle;
  flex?: number;
  flexDirection?: 'row' | 'column';
  justifyContent?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?: FlexAlignType | undefined;
  alignSelf?: 'center' | 'flex-start' | 'flex-end';
  flexWrap?: 'wrap' | 'nowrap';
  flexGrow?: number;
  flexShrink?: number;
  flexBasis?: number;
  margin?: number;
  padding?: number;
  marginTop?: DimensionValue | undefined;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  marginHorizontal?: number;
  marginVertical?: number;
  paddingHorizontal?: number;
  paddingVertical?: number;
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
  backgroundColor?: ColorValue | undefined;
  width?: DimensionValue | undefined;
  height?: number;
  borderRadius?: number;
  borderWidth?: number;
  borderColor?: string;
  shadowColor?: string;
  shadowOffset?: {width: number; height: number};
  shadowOpacity?: number;
  shadowRadius?: number;
  elevation?: number;
  position?: 'absolute' | 'relative';
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  zIndex?: number;
  opacity?: number;
  overflow?: 'visible' | 'hidden' | 'scroll';
}

const View: React.FC<ViewProps> = ({
  children,
  style,
  flex,
  flexDirection,
  justifyContent,
  alignItems,
  alignSelf,
  flexWrap,
  flexGrow,
  flexShrink,
  flexBasis,
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
  paddingRight,
  backgroundColor,
  width,
  height,
  borderRadius,
  borderWidth,
  borderColor,
  shadowColor,
  shadowOffset,
  shadowOpacity,
  shadowRadius,
  elevation,
  position,
  top,
  bottom,
  left,
  right,
  zIndex,
  opacity,
  overflow,
}) => {
  const back = UnistylesRuntime.colorScheme === 'dark' ? '#000' : '#fff';
  return (
    <ViewX
      style={[
        {
          flex,
          flexDirection,
          justifyContent,
          alignItems,
          alignSelf,
          flexWrap,
          flexGrow,
          flexShrink,
          flexBasis,
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
          paddingRight,
          overflow,
          backgroundColor: backgroundColor || back,
          width,
          height,
          borderRadius,
          borderWidth,
          borderColor,
          shadowColor,
          shadowOffset,
          shadowOpacity,
          shadowRadius,
          elevation,
          position,
          top,
          bottom,
          left,
          right,
          zIndex,
          opacity,
        },
        style,
      ]}>
      {children}
    </ViewX>
  );
};

export default View;
