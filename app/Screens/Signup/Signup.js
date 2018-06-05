import React, { Component } from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Input, Button, Text, SocialIcon } from 'react-native-elements';
import { Space } from '../../Components/Space';
import styles from './styles';


export default class Signup extends Component {
    constructor(props){
        super(props);
        this.state = {'email': '', 'password': '', 'passConfirmation': ''}
    }
    render(){
        return(
            <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss() }>
                <View style={ styles.container }>
                    <Text h3 style={styles.displayText}> Signup</Text>
                    <Input
                        placeholder={ 'Email' }
                        leftIcon={{name: 'email'}}
                        onChangeText= { email => this.setState({ email }) }
                    />
                    <Space/>
                    <Input
                        placeholder={ 'Password' }
                        leftIcon={{name: 'lock'}}
                        onChangeText= { pass => this.setState({ pass }) }
                        secureTextEntry
                    />
                    <Space/>
                    <Input
                        placeholder={ 'Password Again' }
                        leftIcon={{name: 'lock'}}
                        onChangeText= { pass_confirmation => this.setState({ passConfirmation }) }
                        secureTextEntry
                    />
                    <Button
                        title={ 'Sign up' }
                        buttonStyle={ styles.buttonStyle }
                        titleStyle={ styles.buttonTextStyle }
                        onPress={() => console.log('Sign me up!')}
                    />
                    <Text h5>or</Text>
                    <SocialIcon
                        title={ 'Sign up with Facebook' }
                        button
                        type='facebook'
                        style={{ width: 300, borderRadius: 10 }}
                        onPress={() => console.log('Sign me up with my facebook')}
                    />
                </View>
            </TouchableWithoutFeedback>
        );
    }
}