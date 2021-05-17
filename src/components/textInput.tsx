import React from 'react';
import {TextInput} from 'react-native';
import Colours from '../utility/colours';
import {styles} from './style';

const InputText =({placeholder, onChangeText}) => {
    return(
        <TextInput
        placeholder={placeholder}
        placeholderTextColor={Colours.placeHolder}
        style={styles.inputText}
        onChangeText={onChangeText} />
    );
};
export default InputText;
