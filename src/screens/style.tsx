import { StyleSheet } from 'react-native';
import Colours from '../utility/colours';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colours.backColor,
    justifyContent: "center",
    alignItems: 'center',
  },

  image: {
    borderColor: Colours.imageColor,
    borderWidth: 1,
    width: 140,
    height: 140,
    marginBottom: 40
  },

  imageSquare: {
    width: 140,
    height: 140,

  },

  body: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: Colours.imageColor,
    borderRadius: 13,
  },

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

  birthDate: {
    width: 347,
    backgroundColor: Colours.dateText,
    borderRadius: 13,
  },

});

export default styles;