import React from 'react';
import {
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
  Alert
} from 'react-native';
import styles from './style';
import * as ImagePicker from 'react-native-image-picker';
import DatePicker from 'react-native-datepicker';

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
        Alert.alert('Cancelled');
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
        .then(profileDetails => {
        })
        .catch(error => {
          const msg = this.fetchErrorMessage(error);
        });
  };

  fetchErrorMessage(error) {
    if (
      (error.response && error.response.status === 502) ||
      (error.response && error.response.status === 500)
    ) {
      return "error";
    } else if (
      error.response &&
      error.response.status === 400
    ) {
      return "Access error";
    }
    return error.response && error.response.data
      ? error.response.data.error_description
      : "check network";
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.image}
          onPress={this.selectFile}>
          {this.state.photo === null ? (
            <Image
              source={require('../../src/screens/proimg.png')}
              style={styles.imageSquare}
              resizeMode="cover"
            />
          ) : (
            <Image
              source={{ uri: this.state.photo.uri }}
              style={styles.imageSquare}
              resizeMode="cover"
            />
          )}
        </TouchableOpacity>


        <View style={styles.body}>
          <TextInput
            placeholder="First Name"
            placeholderTextColor="#283747"
            style={styles.inputText}
            onChangeText={name => {
              this.setState({ name: name }, () => { });
            }}
          />
        </View>

        <View style={styles.body}>
          <TextInput
            placeholder="Last Name"
            placeholderTextColor="#283747"
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
            placeholder="date-of-birth"
            format="YYYY-MM-DD"
            maxDate="2021-06-01"
            style={{ width: 280 }}
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
          title="Submit"
        />
      </View>
    );
  }
}
export default Profile;