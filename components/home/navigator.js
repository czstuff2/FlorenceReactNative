import React from 'react';
import MainScreen from './main'
import { createStackNavigator } from 'react-navigation';

export default createStackNavigator(
  {
    Home: MainScreen,
    Innova: MainScreen
  },
  {
    initialRouteName: 'Home'
  },
)