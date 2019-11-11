import React, { Component } from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import MajorArcanaScreen from '../screens/MajorArcanaScreen';
import TouchableBounce from 'react-native/Libraries/Components/Touchable/TouchableBounce';


// const LinksStack = createStackNavigator(
//   {
//     Links: LinksScreen,
//   },
//   config
// );

// LinksStack.navigationOptions = {
//   tabBarLabel: 'Links',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
//   ),
// };

// LinksStack.path = '';

// const SettingsStack = createStackNavigator(
//   {
//     Settings: SettingsScreen,
//   },
//   config
// );

// SettingsStack.navigationOptions = {
//   tabBarLabel: 'Settings',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
//   ),
// };

// SettingsStack.path = '';
const tabBarIcon = (name) => ({
    tintColor,
    horizontal,
  }) => (
    <MaterialIcons name={name} color={tintColor} size={horizontal ? 17 : 24} />
  );

  class ContactsScreen extends Component {
    static navigationOptions = {
      tabBarLabel: 'Contacts',
      tabBarIcon: tabBarIcon('contacts'),
      tabBarButtonComponent: TouchableBounce,
    };
  
    render() {
      return <View />;
    }
  }

export default createBottomTabNavigator({
  MajorArcanaScreen,
  ContactsScreen
  //LinksStack,
  //SettingsStack,
},
{
    initialRouteName: 'MajorArcanaScreen',
}
);


// class AlbumsScreen extends Component {
//     static navigationOptions = {
//       tabBarLabel: 'Albums',
//       tabBarIcon: tabBarIcon('photo-album'),
//       tabBarButtonComponent: TouchableBounce,
//     };
  
//     render() {
//       return <View />;
//     }
//   }
  
//   class ArticleScreen extends Component {
//     static navigationOptions = {
//       tabBarLabel: 'Article',
//       tabBarIcon: tabBarIcon('chrome-reader-mode'),
//       tabBarButtonComponent: TouchableBounce,
//     };
  
//     render() {
//       return <View />;
//     }
//   }
  
//   class ChatScreen extends Component {
//     static navigationOptions = {
//       tabBarLabel: 'Chat',
//       tabBarIcon: tabBarIcon('chat-bubble'),
//       tabBarButtonComponent: TouchableBounce,
//     };
  
//     render() {
//       return <View />;
//     }
//   }
  
//   class ContactsScreen extends Component {
//     static navigationOptions = {
//       tabBarLabel: 'Contacts',
//       tabBarIcon: tabBarIcon('contacts'),
//       tabBarButtonComponent: TouchableBounce,
//     };
  
//     render() {
//       return <View />;
//     }
//   }
  
//   export default createBottomTabNavigator(
//     {
//       AlbumsScreen,
//       ArticleScreen,
//       ChatScreen,
//       ContactsScreen,
//     },
//     {
//       initialRouteName: 'AlbumsScreen',
//     }
//   );
