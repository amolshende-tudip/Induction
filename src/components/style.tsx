import { StyleSheet } from 'react-native';
import Colours from '../utility/colours';

export const styles = StyleSheet.create({
    inputText: {
        flex: 1,
        paddingVertical: 5,
        paddingHorizontal: 20,
        backgroundColor: Colours.liteBlue,
        borderRadius: 13,
        textAlign: 'center',
    },

    submitButton: {
        marginTop: 30,
        backgroundColor: '#3498DB',
        width: 150,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        color: 'blue'
    },

    submitText: {
        fontSize: 20,
        color: Colours.black,
    },
})