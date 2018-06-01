import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { Deck } from './Components/Deck';
import DATA from './config/data';

export default class App extends Component {

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
    render(){
        return(
            <Deck
                data={DATA}
                renderCard={this.renderCard}
            />
        );
    }
}
