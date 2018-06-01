import React, { Component } from 'react';
import { View, Text, Animated } from 'react-native';
import styles from './style';
import DATA from '../../config/data';

console.log(DATA);

export default class Deck extends Component {
    render(){
        return(
            <View style= {styles.container}>
                <Text>Boilerplate</Text>
            </View>
        );
    }
}