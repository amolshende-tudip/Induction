import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2980B9",
  },

  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageButton: {
    borderColor: 'black',
    borderWidth: 1,
    width: 140,
    height: 140,
    borderRadius: 100,
  },

  imageBox: {
    width: 140,
    height: 140,
    borderRadius: 100,
    backgroundColor: '#fff',
  },

  body: {
    flex: 3,
    backgroundColor: "#D0D3D4",
    paddingHorizontal: 20,
    paddingVertical: 30,
    flexDirection: 'column',
  },

  action: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
  dropdown: {
    marginHorizontal: 50,
  },
  
  input: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  
  
 
});

export default styles;