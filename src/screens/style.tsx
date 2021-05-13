import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7ECB5",
    justifyContent: "center",
    alignItems: 'center',
  },

  image: {
    borderColor: 'black',
    borderWidth: 1,
    width: 140,
    height: 140,
  },

  imageSquare: {
    width: 140,
    height: 140,
    backgroundColor: '#fff',
  },

  body: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'black',
  },

  inputText: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
});

export default styles;