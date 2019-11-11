import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import Tarot from '../components/Tarot';

import TabBarIcon from '../components/TabBarIcon.js';


export default class MajorArcanaScreen extends Component {
    static navigationOptions = {
        tabBarLabel: 'Major',
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
      };
    
    render() {
        return (
            <View style={{backgroundColor: '#000'}}>
                <Text>TESTING</Text>
                <Tarot />
            </View>  
        );
    }
}

