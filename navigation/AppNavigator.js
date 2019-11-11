import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {
    Assets as StackAssets,
    createStackNavigator,
    NavigationStackScreenProps,
  } from 'react-navigation-stack';
import MainTabNavigator from './MainTabNavigator';
import MajorArcanaScreen from '../screens/MajorArcanaScreen';

export default createAppContainer(
  createStackNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator,
  },
  {
      initialRouteName: 'Main',
      headerMode: 'none'
  })
);