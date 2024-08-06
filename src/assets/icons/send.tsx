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
      d="M8.5 12H12M2 9.99999H4M2 14H4M9.45352 4.26033L20.6842 9.87225C22.4386 10.7489 22.4386 13.2511 20.6842 14.1278L9.45352 19.7397C7.45607 20.7378 5.30682 18.6853 6.21382 16.6458L7.85018 12.9662C8.12373 12.3511 8.12373 11.6489 7.85018 11.0338L6.21382 7.35425C5.30682 5.31474 7.45607 3.26221 9.45352 4.26033Z"
      stroke={props.color || '#000'}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SVGComponent;
