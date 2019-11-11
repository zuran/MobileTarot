import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import Tarot from '../components/Tarot';

import TabBarIcon from '../components/TabBarIcon.js';


export default class MajorArcanaScreen extends Component {
    static navigationOptions = {
        tabBarLabel: 'Major Arcana',
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={
              Platform.OS === 'ios'
                ? `ios-information-circle${focused ? '' : '-outline'}`
                : 'md-information-circle'
            }
          />
        ),
        header: null
      };
    
    render() {
        return <Tarot/>;
    }
}

