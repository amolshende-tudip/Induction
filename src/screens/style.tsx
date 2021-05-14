import { StyleSheet } from 'react-native';
import Colours from '../components/colours';

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
    backgroundColor: Colours.imageSquare,
  },

  body: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: Colours.imageColor,
    borderRadius: 10,
  },

  inputText: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 20,
    backgroundColor: Colours.imageSquare,
    borderRadius: 10,
  },

  welcome: {
    fontSize: 25, 
    color: "black", 
    padding: 10,
    fontWeight: 'bold',
    marginBottom: 30,
  }

});

export default styles;