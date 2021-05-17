import React from 'react';
import {
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  Text
} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import DatePicker from 'react-native-datepicker';
import stringText from '../utility/string';
import Colours from '../utility/colours';
import styles from './style';
import {iconImage} from '../assets/icon';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      name2: '',
      photo: '',
      date: '',
      check: false,
    };
  }

  chooseImage = () => {
    var options = {
      title: stringText.selectImg,
      customButtons: [
        {
          name: stringText.clientKey,
          title: stringText.selectImg,
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.launchImageLibrary(options, res => {
      if (res.didCancel) {
        Alert.alert(stringText.alertText);
      }
      else {
        let source = res;
        this.setState({
          photo: source,
        });
      }
    });
  };

  Submit = () => {
    var profileDetails = {};
    profileDetails.photo = this.state.photo,
      profileDetails.name = this.state.name,
      profileDetails.name2 = this.state.name2,
      profileDetails.date = this.state.date,

      fetch('http://localhost:8090/profile/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profileDetails),
      })
        .then(response => response.json())
        .catch(error => {
          const msg = this.ErrorMsg(error);
          Alert.alert(msg);
        });
  };

  ErrorMsg(error) {
    if (
      (error.response && error.response.status === stringText.BAD_GATEWAY_ERROR) ||
      (error.response && error.response.status === stringText.SERVER_ERROR)
    ) {
      return stringText.REQ_NOT_PROCESS;
    } else if (
      error.response &&
      error.response.status === stringText.CLIENT_ERROR
    ) {
      return stringText.ACCESS_DENIED;
    }
    return error.response && error.response.data
      ? error.response.data.error_description
      : stringText.CHECK_CONNECTION;
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.image}
          onPress={this.chooseImage}>
          <Image
            source={this.state.photo
              ? { uri: this.state.photo.uri }
              : iconImage.HomeImage
            }
            style={styles.imageSquare}
            resizeMode="cover"
          />
        </TouchableOpacity>


        <View style={styles.body}>
          <TextInput
            placeholder={stringText.firstName}
            placeholderTextColor={Colours.placeHolder}
            style={styles.inputText}
            onChangeText={name => {
              this.setState({ name: name }, () => { });
            }}
          />
        </View>

        <View style={styles.body}>
          <TextInput
            placeholder={stringText.lastName}
            placeholderTextColor={Colours.placeHolder}
            style={styles.inputText}
            onChangeText={name2 => {
              this.setState({ name2: name2 }, () => { });
            }}
          />
        </View>
        <View style={styles.body}>
          <DatePicker
            date={this.state.date}
            mode="date"
            placeholder={stringText.dateText}
            format={stringText.dateFormat}
            maxDate={new Date()}
            style={styles.birthDate}
            onDateChange={date => {
              this.setState({ date: date });
            }} />
        </View>

        <TouchableOpacity
          style={styles.submitButton}
          onPress={this.Submit}>
          <Text style={styles.submitText}> {stringText.submit} </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default Home;