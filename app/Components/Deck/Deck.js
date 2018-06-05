import React, { Component } from 'react';
import {
    View,
    Animated, 
    PanResponder,
    Dimensions,
    LayoutAnimation,
    UIManager,
} from 'react-native';
import styles from './styles';


const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 0.5 * SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 200;

export default class Deck extends Component {
    static defaultProps = {
        onSwipeRight: () => console.log('Like'),
        onSwipeLeft: () => console.log('Dislike'),
        renderNoMoreCards: () => console.log('No More Cards!'),
    }

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
                    this.swipeCard('right');
                }else if(gesture.dx < -SWIPE_THRESHOLD){
                    this.swipeCard('left');
                }else{
                    this.resetPosition();
                }
            }
        });
        this.state = { panResponder, position, index: 0 };
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.data !== this.props.data){
            this.setState({ index: 0})
        }
    }

    componentWillUpdate(){
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        LayoutAnimation.spring();
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

    resetPosition(){
        Animated.timing(this.state.position, {
            toValue: {x: 0, y: 0}
        }).start();
    }

    swipeCard(direction){
        const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH;
        Animated.timing(this.state.position, {
            toValue: {x, y: 0},
            duration: SWIPE_OUT_DURATION
        }).start(() => this.onSwipeComplete(direction));
    }

    onSwipeComplete(direction){
        const { onSwipeLeft, onSwipeRight, data } = this.props;
        const item = data[this.state.index];
        direction === 'right' ? onSwipeRight(item) : onSwipeLeft(item);
        this.state.position.setValue({ x: 0, y: 0});
        this.setState({ index: this.state.index + 1});
    }

    renderCards(){
        if(this.state.index >= this.props.data.length){
            return this.props.renderNoMoreCards();
        }
        return this.props.data.map((item, idx)=> {
            if(idx < this.state.index){
                return null
            }else if(idx === this.state.index){
                return(
                    <Animated.View
                        key={ item.id }
                        style={[
                            this.cardAnimationStyle(),
                            styles.container, {zIndex: 99}
                        ]}
                        {...this.state.panResponder.panHandlers}
                    >
                        { this.props.renderCard(item) }
                    </Animated.View>
                );
            }
            return (
                <Animated.View 
                    key={ item.id }
                    style={[
                        styles.container,
                        { top: 5 * (idx - this.state.index),
                        zIndex: 5}
                    ]}
                >
                    { this.props.renderCard(item) }
                </Animated.View>
            );
        }).reverse();
    }

    render(){
        return(
            <View>
                { this.renderCards() }
            </View>
        );
    }
}