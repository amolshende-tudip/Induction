import {StyleSheet} from 'react-native';
import Colours from '../utility/colours';

export const styles =StyleSheet.create({
    inputText: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
      fontSize: 15,
      },

      submitButton: {
        marginTop: 50,
        backgroundColor: Colours.blueSubmit,
        width: 150,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        color: Colours.blue,
        marginLeft: 75,
      },

      submitText: {
        fontSize: 23,
        color: Colours.black,
      },
})