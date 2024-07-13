import React from 'react';
import {styles} from "./Styles";
import {Text, TouchableOpacity} from "react-native";

// @ts-ignore
export default function Action({switchScreen, buttonText}) {
    return (
        <TouchableOpacity onPress={() => switchScreen('Form')}>
            <Text style={styles.action}>{buttonText}</Text>
        </TouchableOpacity>
    );
}
