import React, { Component } from 'react';
import {ScrollView, View, Text, Animated } from 'react-native';
import styles from './style';

export default class Deck extends Component {
    renderCards(){
        return this.props.data.map((item)=> {
            return this.props.renderCard(item);
        });
    }

    render(){
        return(
            <ScrollView style={ styles.container }>
                { this.renderCards() }
            </ScrollView>
        );
    }
}