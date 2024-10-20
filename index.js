/**
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from '@routes';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {ThemeProvider, ThemeConsumer} from '@hooks';

const MainApp = () => {
  return (
    <ThemeProvider>
      <ThemeConsumer>
        <NavigationContainer ref={navigationRef}>
          <SafeAreaProvider>
            <SafeAreaView edges={['bottom']} style={{flex: 1}}>
              <App />
            </SafeAreaView>
          </SafeAreaProvider>
        </NavigationContainer>
      </ThemeConsumer>
    </ThemeProvider>
  );
};

AppRegistry.registerComponent(appName, () => MainApp);
