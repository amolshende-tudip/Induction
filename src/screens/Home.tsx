import React from 'react';
import { View, Image, TouchableOpacity, Alert } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import DatePicker from 'react-native-datepicker';
import stringText from '../utility/string';
import styles from './style';
import { iconImage } from '../assets/icon';
import InputText from '../components/textInput';
import HomeButton from '../components/Button';
import { Constant } from '../utility/constants';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: '',
      last: '',
      img: '',
      date: '',
      check: false,
    };
  }

  chooseImage = () => {
    var choice = {
      title: stringText.selectImg,
      customButtons: [
        {
          name: stringText.clientKey,
          title: stringText.selectImg,
        },
      ],
      storageOptions: {
        path: 'Computer',
        skipBackup: true,
      },
    };

    ImagePicker.launchImageLibrary(choice, res => {
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
    if (
      this.state.first == '' ||
      this.state.last == '' ||
      this.state.date == '' ||
      this.state.img == ''
    ) {
      Alert.alert(stringText.afterSubmit);
    } else {
      var HomeData = {};
      HomeData.img = this.state.img,
        HomeData.first = this.state.first,
        HomeData.last = this.state.last,
        HomeData.date = this.state.date,

        fetch(Constant.baseURL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(HomeData),
        })
          .then(response => response.json())
          .catch(error => {
            const reply = this.ErrorMsg(error);
            Alert.alert(reply);
          });
    }
  };

  ErrorMsg(error) {
    if (
      (error.response && error.response.status === Constant.BAD_GATEWAY_ERROR) ||
      (error.response && error.response.status === Constant.SERVER_ERROR)
    ) {
      return stringText.REQ_NOT_PROCESS;
    }
    else if (
      error.response && error.response.status === Constant.CLIENT_ERROR
    ) {
      return stringText.ACCESS_DENIED;
    }
    return error.response && error.response.data ?
      error.response.data.error_description :
      stringText.CHECK_CONNECTION;
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.image}
          onPress={this.chooseImage}>
          <Image
            source={this.state.img
              ? { uri: this.state.img.uri }
              : iconImage.HomeImage
            }
            style={styles.imageSquare}
            resizeMode="cover" />
        </TouchableOpacity>


        <View style={styles.body}>
          <InputText
            placeholder={stringText.firstName}
            onChangeText={first => {
              this.setState({ first: first }, () => { });
            }} />
        </View>

        <View style={styles.body}>
          <InputText
            placeholder={stringText.lastName}
            onChangeText={last => {
              this.setState({ last: last }, () => { });
            }} />
        </View>

        <View style={styles.dateBody}>
          <DatePicker
            date={this.state.date}
            mode="date"
            placeholder={stringText.dateText}
            format={Constant.dateFormat}
            maxDate={new Date()}
            style={styles.birthDate}
            onDateChange={date => {
              this.setState({ date: date });
            }} />
        </View>

        <HomeButton
          onPress={this.Submit}
          title={stringText.submit} />
      </View>
    );
  }
}
export default Home;