import {View, ViewStyle} from 'react-native';
import React, {PropsWithChildren} from 'react';
import useTheme from '../../hooks/useTheme';

interface MyViewProps extends PropsWithChildren {
  style?: ViewStyle | ViewStyle[];
  margin?: number;
  padding?: number;
  paddingVertical?: number;
  paddingHorizontal?: number;
  marginVertical?: number;
  marginHorizontal?: number;
  backgroundColor?: string;
  borderRadius?: number;
}

const MyView: React.FunctionComponent<MyViewProps> = ({
  style,
  children,
  margin,
  padding,
  paddingVertical,
  paddingHorizontal,
  marginVertical,
  marginHorizontal,
  backgroundColor,
  borderRadius,
}) => {
  const {colors} = useTheme();
  return (
    <View
      style={[
        {
          margin: margin,
          padding: padding,
          paddingVertical: paddingVertical,
          paddingHorizontal: paddingHorizontal,
          marginVertical: marginVertical,
          marginHorizontal: marginHorizontal,
          backgroundColor: backgroundColor || colors.backgroundColor,
          borderRadius: borderRadius,
        },
        style,
      ]}>
      {children}
    </View>
  );
};

export default MyView;
