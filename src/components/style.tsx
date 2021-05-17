import {StyleSheet} from 'react-native';
import Colours from '../utility/colours';

export const styles =StyleSheet.create({
    inputText: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
      },

      submitButton: {
        marginTop: 30,
        backgroundColor: Colours.blueSubmit,
        width: 150,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        color: Colours.blue
      },

      submitText: {
        fontSize: 20,
        color: Colours.black,
      },
})