import { StyleSheet, StatusBar, Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
        position: 'absolute',
        width: Dimensions.get('window').width,
    },
});