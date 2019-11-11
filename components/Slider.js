import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles, { sliderWidth } from '../styles/Slider.style';

export default class Entry extends Component {

    get image () {
        const { data: { image }} = this.props;

        return (<Image
                source={{ uri: image }}
                />
        );
    }

    render () {
        const { data: { title, desc, image }} = this.props;

        const upperCaseTitle = 
            (<Text style={styles.title}>{ title.toUpperCase() }</Text>);

        return (
            <TouchableOpacity
                style={styles.slideInnerContainer}
                activeOpacity={1}
                onPress={() => { alert('')}}>

                <View style={styles.shadow} />
                <View style={styles.imageContainer}>
                    <Image style={styles.image}
                        source={image}
                        style={{height: 500, width: 250, resizeMode: "stretch"}}
                    />
                    <View style={styles.radiusMask}/>
                </View>
                <View style={styles.textContainer}>
                    {upperCaseTitle}
                    <Text style={styles.subtitle}>
                        { desc }
                    </Text>                
                </View>
            </TouchableOpacity>
        );
    }
}