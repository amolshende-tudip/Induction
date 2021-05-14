import React from 'react';
import {
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
  Alert,
  Text
} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import DatePicker from 'react-native-datepicker';
import stringText from '../components/string';
import Colours from '../components/colours';
import styles from './style';

class Profile extends React.Component {
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

  selectFile = () => {
    var options = {
      title: 'Select Image',
      customButtons: [
        {
          name: 'customOptionKey',
          title: 'Select Image',
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
      } else if (res.errorMessage) {
      } else {
        let source = res;
        this.setState({
          photo: source,
        });
      }
    });
  };

  onSubmit = () => {
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
          const msg = this.fetchErrorMessage(error);
        });
  };

  fetchErrorMessage(error) {
    if (
      (error.response && error.response.status === stringText.HTTP_ERROR1) ||
      (error.response && error.response.status === stringText.HTTP_ERROR2)
    ) {
      return stringText.ERROR_Return1;
    } else if (
      error.response &&
      error.response.status === stringText.HTTP_ERROR3
    ) {
      return stringText.ERROR_Return2;
    }
    return error.response && error.response.data
      ? error.response.data.error_description
      : stringText.ERROR_Return3;
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}> {stringText.welcome} </Text>
        <TouchableOpacity
          style={styles.image}
          onPress={this.selectFile}>
            <Image
              source={this.state.photo
              ? {uri: this.state.photo.uri}
            : require('../assets/proimg.png')
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
            style={{ width: 347 }}
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0,
              },
              dateInput: {
                marginLeft: 36,
              },
            }}
            onDateChange={date => {
              this.setState({ date: date });
            }} />
        </View>

        <Button
          onPress={this.onSubmit}
          title={stringText.submitButton}
        />
      </View>
    );
  }
}
export default Profile;