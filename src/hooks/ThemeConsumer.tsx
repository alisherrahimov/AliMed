import React, {PropsWithChildren} from 'react';
import {ThemeContext} from './ThemeProvider';

const ThemeConsumer: React.FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  return (
    <ThemeContext.Consumer>
      {() => {
        return children;
      }}
    </ThemeContext.Consumer>
  );
};

export default ThemeConsumer;
