import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const SVGComponent = (props: SvgProps) => (
  <Svg
    width={props.width || 24}
    height={props.height || 24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}>
    <Path
      d="M2 13L5.52642 15.8211C6.35374 16.483 7.55365 16.3848 8.2624 15.5973L16 7M8 13L11.5264 15.8211C12.3537 16.483 13.5536 16.3848 14.2624 15.5973L22 7"
      stroke={props.color || '#000'}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SVGComponent;
