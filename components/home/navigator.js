import React from 'react';
import MainScreen from './main';
import InnovaManufacturerScreen from '../manufacturer/InnovaManufacturerScreen'
import { createStackNavigator } from 'react-navigation';

export default createStackNavigator(
  {
    Home: MainScreen,
    Innova: InnovaManufacturerScreen,
    //Discraft: DiscraftManufacturerScreen,
    //Latitude: LatitudeManufacturerScreen
  },
  {
    initialRouteName: 'Home'
  },
)