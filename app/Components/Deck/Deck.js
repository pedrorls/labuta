import React, { Component } from 'react';
import {
    View,
    Animated, 
    PanResponder,
    Dimensions
} from 'react-native';
import styles from './style';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 0.5 * SCREEN_WIDTH;

export default class Deck extends Component {
    constructor(props){
        super(props);
        const position = new Animated.ValueXY();
        const panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (event, gesture) => {
                position.setValue({ x: gesture.dx, y: gesture.dy });
            },
            onPanResponderRelease: (event, gesture) => {
                if(gesture.dx > SWIPE_THRESHOLD){
                    console.log('Like!');
                }else if(gesture.dx < -SWIPE_THRESHOLD){
                    console.log('Dislike!');
                }
                this.resetPostion();
            }
        });
        this.state = { panResponder, position };
    }

    resetPostion(){
        Animated.spring(this.state.position, {
            toValue: {x: 0, y: 0}
        }).start();
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
                        style={ [styles.container, this.cardAnimationStyle()] }
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