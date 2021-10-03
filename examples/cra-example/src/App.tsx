import * as React from 'react';
import { ThemeProvider } from "styled-components";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LightTheme from "react-native-simple-elements/components/theme/LightTheme";
import ToastProvider from 'react-native-simple-elements/components/Toast';
import { Viewport } from "react-native-simple-elements/components/Container";
import { Switch, Route } from 'react-router-dom';
import './App.css';

import { useWindowDimensions } from 'react-native';
import { HomePage } from './pages/home/HomePage';
import { ProfilePage } from './pages/profile/ProfilePage';
import { SettingPage } from './pages/setting/SettingPage';

function SplashScreen() {
    return (
        <div>
            Loading...
        </div>
    )
}

const linking = {
    prefixes: ['https://mychat.com', 'mychat://'],
    config: {
        screens: {
            Home: '',
            Profile: ':id/profile',
            Setting: ':id/blog',
        }
    },
};

const Stack = createStackNavigator();

function App() {
    const { height, scale, width } = useWindowDimensions();

    return (
        <ThemeProvider theme={LightTheme}>
            <ToastProvider>
                <Viewport testID="viewport_1">
                    <Switch>
                        <Route path="/" component={HomePage} exact={true}/>
                        <Route path="/home" component={HomePage} />
                        <Route path="/profile" component={ProfilePage} />
                        <Route path="/setting" component={SettingPage} />
                    </Switch>
                </Viewport>
            </ToastProvider>
        </ThemeProvider>
    );
}

export default App;
