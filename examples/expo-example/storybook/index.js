import React from 'react';
import { AppRegistry } from 'react-native';
import { getStorybookUI, configure, addDecorator } from '@storybook/react-native';
import { ThemeProvider } from 'styled-components';
import { LightTheme } from 'react-native-simple-elements';
import { loadStories } from './storyLoader';

import './rn-addons';

configure(() => {
    addDecorator((storyFn) => (
        // <LocaleProvider locale={'EN-gb'}>
            <ThemeProvider theme={LightTheme}>
                {storyFn()}
            </ThemeProvider>
        // </LocaleProvider>
    ));

    loadStories()
}, module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({});

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you can safely remove this line.
AppRegistry.registerComponent('mobile', () => StorybookUIRoot);

export default StorybookUIRoot;
