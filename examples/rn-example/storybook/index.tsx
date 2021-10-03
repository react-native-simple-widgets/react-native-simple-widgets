import * as React from 'react';
import { AppRegistry, View } from 'react-native';
import { getStorybookUI, configure, addDecorator } from '@storybook/react-native';
import PaperProviver from 'react-native-simple-elements/components/theme/Provider';
import LightTheme from 'react-native-simple-elements/components/theme/LightTheme';
import { loadStories } from './storyLoader';

import './rn-addons';

configure(() => {
    addDecorator((storyFn) => (
        // <LocaleProvider locale={'EN-gb'}>
            <PaperProviver theme={LightTheme}>
                <View
                    style={{
                        flex: 1,
                    }}
                >
                    {storyFn()}
                </View>
            </PaperProviver>
        // </LocaleProvider>
    ));

    loadStories()
}, module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({
    asyncStorage: require('@react-native-community/async-storage').default || require('react-native').AsyncStorage || null
});

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you can safely remove this line.
AppRegistry.registerComponent('mobile', () => StorybookUIRoot);

export default StorybookUIRoot;
