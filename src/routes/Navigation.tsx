import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Chat, Intro, Login, Main, PrivateChat, Profile} from '@screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MyTabBar from './BottomTab';

const Stack = createNativeStackNavigator();
const BottomStack = createBottomTabNavigator();
const BottomTab = () => {
  return (
    <BottomStack.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <MyTabBar {...props} />}>
      {screens.slice(0, 3).map(({name, component}) => (
        <BottomStack.Screen key={name} name={name} component={component} />
      ))}
    </BottomStack.Navigator>
  );
};

const screens = [
  {
    name: 'Main',
    component: Main,
  },
  {
    name: 'Chat',
    component: Chat,
  },
  {
    name: 'Profile',
    component: Profile,
  },
  {
    name: 'Intro',
    component: Intro,
  },
  {
    name: 'BottomTab',
    component: BottomTab,
  },
  {
    name: 'PrivateChat',
    component: PrivateChat,
  },
  {
    name: 'Login',
    component: Login,
  },
];

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Intro"
      screenOptions={{headerShown: false}}>
      {screens.map(({name, component}) => (
        <Stack.Screen key={name} name={name} component={component} />
      ))}
    </Stack.Navigator>
  );
};

export default StackNavigation;
