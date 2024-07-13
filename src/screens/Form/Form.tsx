import React from 'react';
import {Image, Text, TextInput, View} from "react-native";
import {styles} from "./Styles";
import logo from '../../../assets/logo.png';
import Action from "../../components/Action/Action";

// @ts-ignore
export default function Form({switchScreen}) {
    const [name, setName] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [location, setLocation] = React.useState('');
    const [observations, setObservations] = React.useState('');

    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.logo}/>
            <Text style={styles.text}>Name</Text>
            <TextInput style={styles.input} value={name} onChangeText={text => setName(text)}/>
            <Text style={styles.text}>Phone</Text>
            <TextInput style={styles.input} value={phone} onChangeText={text => setPhone(text)}/>
            <Text style={styles.text}>Current Location</Text>
            <TextInput style={styles.input} value={location} onChangeText={text => setLocation(text)}/>
            <Text style={styles.text}>Observations</Text>
            <TextInput style={styles.inputArea} numberOfLines={5} maxLength={5} multiline value={observations} onChangeText={text => setObservations(text)}/>
            <Action switchScreen={switchScreen} buttonText='Sent'/>
        </View>
    );
}
