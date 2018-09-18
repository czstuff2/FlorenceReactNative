import React from 'react';
import MainScreen from './main';
import ManufacturerScreen from '../manufacturer/manufacturerScreen'
import { createStackNavigator } from 'react-navigation';

export default createStackNavigator(
  {
    Home: MainScreen,
    Manufacturer: ManufacturerScreen
  },
  {
    initialRouteName: 'Home'
  },
)