import React from 'react';
import {styles} from "./Styles";
import Logo from "../../components/Logo/Logo";
import Action from "../../components/Action/Action";
import {View} from "react-native";

// @ts-ignore
export default function Home({switchScreen}) {
    return (
        <View style={styles.container}>
            <Logo/>
            <Action switchScreen={switchScreen} buttonText='Active Bat Signal'/>
        </View>
    );
}
