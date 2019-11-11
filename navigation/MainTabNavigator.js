import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text, Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import MajorArcanaScreen from '../screens/MajorArcanaScreen';
import TouchableBounce from 'react-native/Libraries/Components/Touchable/TouchableBounce';

const tabBarIcon = (name) => ({tintColor, horizontal}) => (
  <MaterialCommunityIcons name={name} color={tintColor} size={horizontal ? 17 : 24} />
);

const tabBarIcon2 = (name) => ({tintColor, horizontal}) => (
  <Ionicons name={name} color={tintColor} size={horizontal ? 17 : 24} />
);

class SwordsScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Swords',
    tabBarIcon: tabBarIcon('sword'),
    tabBarButtonComponent: TouchableBounce,
  };
  
  render() {
    return (
      <View style={styles.container}>
        <FlatList 
          data={[
            {key: 'Ace of Swords', image: require('../assets/images/cards/minor/Swords01.jpg')},
            {key: 'Two of Swords', image: require('../assets/images/cards/minor/Swords02.jpg')},
            {key: 'Three of Swords', image: require('../assets/images/cards/minor/Swords03.jpg')},
            {key: 'Four of Swords', image: require('../assets/images/cards/minor/Swords04.jpg')},
            {key: 'Five of Swords', image: require('../assets/images/cards/minor/Swords05.jpg')},
            {key: 'Six of Swords', image: require('../assets/images/cards/minor/Swords06.jpg')},
            {key: 'Seven of Swords', image: require('../assets/images/cards/minor/Swords07.jpg')},
            {key: 'Eight of Swords', image: require('../assets/images/cards/minor/Swords08.jpg')},
            {key: 'Nine of Swords', image: require('../assets/images/cards/minor/Swords09.jpg')},
            {key: 'Ten of Swords', image: require('../assets/images/cards/minor/Swords10.jpg')},
            {key: 'Page of Swords', image: require('../assets/images/cards/minor/Swords11.jpg')},
            {key: 'Knight of Swords', image: require('../assets/images/cards/minor/Swords12.jpg')},
            {key: 'Queen of Swords', image: require('../assets/images/cards/minor/Swords13.jpg')},
            {key: 'King of Swords', image: require('../assets/images/cards/minor/Swords14.jpg')},
          ]}
          renderItem={({item}) => (
            <View style={styles.entry}>
              <Image source={item.image} style={{width:60, height:108}} />
              <Text style={styles.item}>{item.key}</Text>
            </View>
            )
          }
        />
      </View>
    );
  }
}

class CupsScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Cups',
    tabBarIcon: tabBarIcon('cup'),
    tabBarButtonComponent: TouchableBounce,
  };
  
  render() {
    return (
      <View style={styles.container}>
        <FlatList 
          data={[
            {key: 'Ace of Cups', image: require('../assets/images/cards/minor/Cups01.jpg')},
            {key: 'Two of Cups', image: require('../assets/images/cards/minor/Cups02.jpg')},
            {key: 'Three of Cups', image: require('../assets/images/cards/minor/Cups03.jpg')},
            {key: 'Four of Cups', image: require('../assets/images/cards/minor/Cups04.jpg')},
            {key: 'Five of Cups', image: require('../assets/images/cards/minor/Cups05.jpg')},
            {key: 'Six of Cups', image: require('../assets/images/cards/minor/Cups06.jpg')},
            {key: 'Seven of Cups', image: require('../assets/images/cards/minor/Cups07.jpg')},
            {key: 'Eight of Cups', image: require('../assets/images/cards/minor/Cups08.jpg')},
            {key: 'Nine of Cups', image: require('../assets/images/cards/minor/Cups09.jpg')},
            {key: 'Ten of Cups', image: require('../assets/images/cards/minor/Cups10.jpg')},
            {key: 'Page of Cups', image: require('../assets/images/cards/minor/Cups11.jpg')},
            {key: 'Knight of Cups', image: require('../assets/images/cards/minor/Cups12.jpg')},
            {key: 'Queen of Cups', image: require('../assets/images/cards/minor/Cups13.jpg')},
            {key: 'King of Cups', image: require('../assets/images/cards/minor/Cups14.jpg')},
          ]}
          renderItem={({item}) => (
            <View style={styles.entry}>
              <Image source={item.image} style={{width:60, height:108}} />
              <Text style={styles.item}>{item.key}</Text>
            </View>
            )
          }
        />
      </View>
    );
  }
}

class WandsScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Wands',
    tabBarIcon: tabBarIcon2('md-color-wand'),
    tabBarButtonComponent: TouchableBounce,
  };
  
  render() {
    return (
      <View style={styles.container}>
        <FlatList 
          data={[
            {key: 'Ace of Wands', image: require('../assets/images/cards/minor/Wands01.jpg')},
            {key: 'Two of Wands', image: require('../assets/images/cards/minor/Wands02.jpg')},
            {key: 'Three of Wands', image: require('../assets/images/cards/minor/Wands03.jpg')},
            {key: 'Four of Wands', image: require('../assets/images/cards/minor/Wands04.jpg')},
            {key: 'Five of Wands', image: require('../assets/images/cards/minor/Wands05.jpg')},
            {key: 'Six of Wands', image: require('../assets/images/cards/minor/Wands06.jpg')},
            {key: 'Seven of Wands', image: require('../assets/images/cards/minor/Wands07.jpg')},
            {key: 'Eight of Wands', image: require('../assets/images/cards/minor/Wands08.jpg')},
            {key: 'Nine of Wands', image: require('../assets/images/cards/minor/Wands09.jpg')},
            {key: 'Ten of Wands', image: require('../assets/images/cards/minor/Wands10.jpg')},
            {key: 'Page of Wands', image: require('../assets/images/cards/minor/Wands11.jpg')},
            {key: 'Knight of Wands', image: require('../assets/images/cards/minor/Wands12.jpg')},
            {key: 'Queen of Wands', image: require('../assets/images/cards/minor/Wands13.jpg')},
            {key: 'King of Wands', image: require('../assets/images/cards/minor/Wands14.jpg')},
          ]}
          renderItem={({item}) => (
            <View style={styles.entry}>
              <Image source={item.image} style={{width:60, height:108}} />
              <Text style={styles.item}>{item.key}</Text>
            </View>
            )
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 24
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  entry: {
    borderWidth: 2,
    borderColor: '#d6d7da',
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10
  }
});

class PentaclesScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Pentacles',
    tabBarIcon: tabBarIcon('coin'),
    tabBarButtonComponent: TouchableBounce,
  };
  
  render() {
    return (
      <View style={styles.container}>
        <FlatList 
          data={[
            {key: 'Ace of Pentacles', image: require('../assets/images/cards/minor/Pents01.jpg')},
            {key: 'Two of Pentacles', image: require('../assets/images/cards/minor/Pents02.jpg')},
            {key: 'Three of Pentacles', image: require('../assets/images/cards/minor/Pents03.jpg')},
            {key: 'Four of Pentacles', image: require('../assets/images/cards/minor/Pents04.jpg')},
            {key: 'Five of Pentacles', image: require('../assets/images/cards/minor/Pents05.jpg')},
            {key: 'Six of Pentacles', image: require('../assets/images/cards/minor/Pents06.jpg')},
            {key: 'Seven of Pentacles', image: require('../assets/images/cards/minor/Pents07.jpg')},
            {key: 'Eight of Pentacles', image: require('../assets/images/cards/minor/Pents08.jpg')},
            {key: 'Nine of Pentacles', image: require('../assets/images/cards/minor/Pents09.jpg')},
            {key: 'Ten of Pentacles', image: require('../assets/images/cards/minor/Pents10.jpg')},
            {key: 'Page of Pentacles', image: require('../assets/images/cards/minor/Pents11.jpg')},
            {key: 'Knight of Pentacles', image: require('../assets/images/cards/minor/Pents12.jpg')},
            {key: 'Queen of Pentacles', image: require('../assets/images/cards/minor/Pents13.jpg')},
            {key: 'King of Pentacles', image: require('../assets/images/cards/minor/Pents14.jpg')},
          ]}
          renderItem={({item}) => (
            <View style={styles.entry}>
              <Image source={item.image} style={{width:60, height:108}} />
              <Text style={styles.item}>{item.key}</Text>
            </View>
            )
          }
        />
      </View>
    );
  }
}

export default createBottomTabNavigator({
  MajorArcanaScreen,
  WandsScreen,
  CupsScreen,
  SwordsScreen,
  PentaclesScreen
},
{
    initialRouteName: 'WandsScreen',
}
);