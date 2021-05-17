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
    marginBottom: 80
  },

  imageSquare: {
    width: 140,
    height: 140,
    borderRadius: 13,
    marginTop: 50
  },

  bodyContainer: {
    flex: 2,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 40,
    paddingVertical: 30,
    backgroundColor: Colours.white,
  },

  body: {
    backgroundColor: Colours.textInputBox,
    flexDirection: 'row',
    width: "87%",
    height: 45,
    borderWidth: 1,
    borderRadius: 30,
    marginBottom: 20,
    marginHorizontal: 20,
    marginVertical: 10,
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
  },
});

export default styles;