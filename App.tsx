import {StatusBar} from 'expo-status-bar';
import {View} from 'react-native';
import {useState} from "react";
import Form from "./src/screens/Form/Form";
import Home from "./src/screens/Home/Home";

export default function App() {
    const [currentScreen, setCurrentScreen] = useState('Home');

    const switchScreen = () => {
        setCurrentScreen(currentScreen === 'Home' ? 'Form' : 'Home');
    };

    return (
        <View style={{backgroundColor: '#FFFFFF'}}>
            {currentScreen === 'Home' && <Home switchScreen={switchScreen}/>}
            {currentScreen === 'Form' && <Form switchScreen={switchScreen}/>}
            <StatusBar style="auto"/>
        </View>
    );
}
