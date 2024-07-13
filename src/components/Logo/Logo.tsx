import React from 'react';
import {styles} from "./Styles";
import {Image} from "react-native";
import logo from '../../../assets/logo.png';

export type LogoProps = {}

export default function Logo({}: LogoProps) {
    return (
        <Image source={logo} style={styles.logo}/>
    );
}
