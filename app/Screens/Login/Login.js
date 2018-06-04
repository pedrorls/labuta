import React, { Component } from 'react';
import { KeyboardAvoidingView, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Input, Text, Button, SocialIcon } from 'react-native-elements';
import { firebase, auth } from '../../config/firebase';
import styles from './styles';

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = { email: '', pass: ''};
    }

    onLoginPress(){
    }

    render(){
        return (
            <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss() }>
                <View  style={ styles.container }>
                        <Text h2>Login</Text>
                        <Input
                            placeholder='Email'
                            leftIcon={{ name: 'email' }}
                            onChangeText={ email => this.setState({email}) }
                        />
                        <Input
                            placeholder='Password'
                            leftIcon={{ name: 'lock' }}
                            secureTextEntry
                            onchangeText={ pass => this.setState({pass}) }
                        />
                    <Button
                        title='Login'
                        buttonStyle={ styles.loginButton }
                        titleStyle={ styles.loginButtonText }
                        onPress={this.onLoginPress()}
                    />
                    <Text h5> or </Text>
                    <SocialIcon
                        title='Sign in with Facebook'
                        button
                        type='facebook'
                        style={{ width: 300, borderRadius: 10 }}
                        disabled
                    />
                </View>
            </TouchableWithoutFeedback>
        );
    }
}