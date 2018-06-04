import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginButton: {
        backgroundColor: 'transparent',
        borderWidth: 1.5,
        borderColor: '#2B60DE',
        width: 300,
        height: 50,
        alignSelf: 'center',
        marginTop: 20,
        borderRadius: 10,
    },
    loginButtonText: {
        color: '#2B60DE',
    }
});