import React, { Component } from 'react';
import {
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Button
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
          title: 'Choose file from Custom Option',
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.launchImageLibrary(options, res => {
      console.log('Response = ', res);

      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.errorMessage) {
        console.log('ImagePicker Error: ', res.errorMessage);
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
        console.log('Success:', profileDetails);
      })
      .catch(error => {
        const msg = this.fetchErrorMessage(error);
      });
  };

  fetchErrorMessage(error) {
    if (
      (error.response && error.response.status === TEXT.HTTP_ERROR_CODE) ||
      (error.response && error.response.status === TEXT.SERVER_NOT_FOUND)
    ) {
      return TEXT.REQ_FAILED;
    } else if (
      error.response &&
      error.response.status === TEXT.UNAUTHORIZED_ACCESS_CODE
    ) {
      return TEXT.UNAUTHORIZED_ACCESS_FOUND;
    }
    return error.response && error.response.data
      ? error.response.data.error_description
      : TEXT.NETWORK_ERROR;
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <TouchableOpacity
            style={styles.imageButton}
            onPress={this.selectFile}>
            {this.state.photo === null ? (
              <Image
                source={require('../../src/screens/proimg.png')}
                style={styles.imageBox}
                resizeMode="cover"
              />
            ) : (
              <Image
                source={{ uri: this.state.photo.uri }}
                style={styles.imageBox}
                resizeMode="cover"
              />
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.body}>
          <ScrollView>
            <View style={styles.action}>
              <TextInput
                placeholder="First Name"
                placeholderTextColor="#283747"
                style={styles.input}
                onChangeText={name => {
                  this.setState({ name: name }, () => { });
                }}
              />
            </View>

            <View style={styles.action}>
              <TextInput
                placeholder="Last Name"
                placeholderTextColor="#283747"
                style={styles.input}
                onChangeText={name2 => {
                  this.setState({ name2: name2 }, () => { });
                }}
              />
            </View>
            <View style={styles.action}>
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
              disabled={
                (this.state.name && this.state.name2 && this.state.date) == ''
                  ? true
                  : false
              }
              onPress={this.onSubmit}
              title="Submit"
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}
export default Profile;