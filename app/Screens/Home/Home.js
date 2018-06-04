import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { Deck } from '../../Components/Deck';
import styles from './styles';
import DATA from '../../config/data';

export default class Home extends Component {

    renderCard(item){
        return(
            <Card
                key={ item.id }
                title={ item.text }
                image={{ uri: item.uri }}
            >
                <Text style={{ marginBottom: 10 }}>
                    Customizable Card
                </Text>
                <Button
                    icon={{ name: 'code'}}
                    backgroundColor="#03A9F4"
                    title='View Now'
                />
            </Card>
        );
    }

    renderNoMoreCards(){
        return(
            <View style={ styles.cardStyle }>
                <Card title='This is it!'>
                    <Text style={{ marginTop: 10 }}>
                        No more matches for your settings!
                    </Text>
                </Card>
            </View>
        );
    }

    render(){
        return(
            <Deck
                data={DATA}
                renderCard={this.renderCard}
                renderNoMoreCards={this.renderNoMoreCards}
            />
        );
    }
}
