import React from 'react';
import {BlurView as BlurViewX} from '@react-native-community/blur';
import {ViewStyle} from 'react-native';

interface BlurViewProps extends React.PropsWithChildren<{}> {
  blurType?:
    | (
        | 'dark'
        | 'light'
        | 'xlight'
        | 'prominent'
        | 'regular'
        | 'extraDark'
        | 'chromeMaterial'
        | 'material'
        | 'thickMaterial'
        | 'thinMaterial'
        | 'ultraThinMaterial'
        | 'chromeMaterialDark'
        | 'materialDark'
        | 'thickMaterialDark'
        | 'thinMaterialDark'
        | 'ultraThinMaterialDark'
        | 'chromeMaterialLight'
        | 'materialLight'
        | 'thickMaterialLight'
        | 'thinMaterialLight'
        | 'ultraThinMaterialLight'
      )
    | undefined;
  blurAmount?: number | undefined;
  blurRadius?: number | undefined;
  style?: ViewStyle;
  flex?: number;
}

const BlurView: React.FC<BlurViewProps> = ({
  children,
  blurAmount,
  blurType,
  blurRadius,
  style,
  flex,
}) => {
  return (
    <BlurViewX
      blurRadius={blurRadius}
      blurAmount={blurAmount}
      blurType={blurType}
      style={{flex, ...style}}>
      {children}
    </BlurViewX>
  );
};

export default BlurView;
