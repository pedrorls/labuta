import React, { Component } from 'react';
import { KeyboardAvoidingView, View } from 'react-native';
import { Input, Text, Button, SocialIcon } from 'react-native-elements';
import firebase from '../../config/firebase';
import styles from './styles';

export default class Login extends Component {
    render(){
        return (
            <View  style={ styles.container }>
                    <Text h2>Login</Text>
                    <Input
                        placeholder='Email'
                        leftIcon={{ name: 'email' }}
                    />
                    <Input
                        placeholder='Password'
                        leftIcon={{ name: 'lock' }}
                        secureTextEntry
                    />
                <Button
                    title='Login'
                    buttonStyle={ styles.loginButton }
                    titleStyle={ styles.loginButtonText }
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
        );
    }
}