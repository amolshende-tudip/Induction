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

  birthDate: {
    width: 347,
    backgroundColor: Colours.dateText,
    borderRadius: 13,
  },

});

export default styles;