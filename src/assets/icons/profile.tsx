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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.9848 15.3462C8.11719 15.3462 4.81433 15.931 4.81433 18.2729C4.81433 20.6148 8.09624 21.2205 11.9848 21.2205C15.8524 21.2205 19.1543 20.6348 19.1543 18.2938C19.1543 15.9529 15.8734 15.3462 11.9848 15.3462Z"
      stroke={props.color || '#000'}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.9848 12.0059C14.5229 12.0059 16.58 9.94781 16.58 7.40971C16.58 4.87162 14.5229 2.81448 11.9848 2.81448C9.44667 2.81448 7.38858 4.87162 7.38858 7.40971C7.38001 9.93924 9.42382 11.9973 11.9524 12.0059H11.9848Z"
      stroke={props.color || '#000'}
      strokeWidth={1.42857}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SVGComponent;