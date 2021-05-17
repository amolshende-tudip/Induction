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
    width: 140,
    height: 140,
    marginBottom: 40
  },

  imageSquare: {
    width: 140,
    height: 140,
    borderRadius: 13,
  },

  body: {
    backgroundColor: Colours.textInputBox,
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
  },

  birthDate: {
    width: 270,
    backgroundColor: Colours.dateText,
  },

  dateBody: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 10,
    borderColor: Colours.imageColor,
    borderRadius: 13,
  },

  dateIcon: {
    position: 'absolute',
    left: 0,
    top: 4,
    marginLeft: 0
  },

  dateInput: {
    marginLeft: 36
  }
});

export default styles;