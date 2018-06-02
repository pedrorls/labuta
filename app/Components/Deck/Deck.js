import React, { Component } from 'react';
import {
    View,
    Animated, 
    PanResponder,
    Dimensions
} from 'react-native';
import styles from './style';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class Deck extends Component {
    constructor(props){
        super(props);
        const position = new Animated.ValueXY();
        const panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (event, gesture) => {
                position.setValue({ x: gesture.dx, y: gesture.dy });
            },
            onPanResponderRelease: () => {}
        });
        this.state = { panResponder, position };
    }

    cardAnimationStyle(){
        const { position } = this.state;
        const  rotate = position.x.interpolate({
            inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
            outputRange: ['-120deg', '0deg', '120deg']
        });
        return {
            ...position.getLayout(),
            transform: [{ rotate }]
        };
    }

    renderCards(){
        return this.props.data.map((item, index)=> {
            if(index === 0){
                return(
                    <Animated.View
                        key={ item.id }
                        style={ this.cardAnimationStyle() }
                        {...this.state.panResponder.panHandlers}
                    >
                        { this.props.renderCard(item) }
                    </Animated.View>
                );
            }
            return this.props.renderCard(item);
        });
    }

    render(){
        return(
            <View>
                { this.renderCards() }
            </View>
        );
    }
}