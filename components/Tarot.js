import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Slider from './Slider';
import { MAJOR } from '../static/cards';
import styles, { colors } from '../styles/index.style';
import { sliderWidth, itemWidth } from '../styles/Slider.style';

export default class Tarot extends Component {
    _renderItem ({item, index}) {
        return <Slider data={item} />
      }
      
      render() {
        return (<View style={styles.exampleContainer}>
          <Carousel
            data={MAJOR}
            renderItem={this._renderItem}
            sliderWidth={sliderWidth}
            itemWidth={275}
            containerCustomStyle={styles.slider}
            contentContainerCustomStyle={styles.sliderContentContainer}
            

          />
        </View>
        );
      }
}