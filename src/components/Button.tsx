import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from './style';

const HomeButton = ({ title, onPress }) => {
    return (
        <View>
            <TouchableOpacity
                onPress={onPress}
                style={styles.submitButton}>
                <Text style={styles.submitText}> {title}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default HomeButton;