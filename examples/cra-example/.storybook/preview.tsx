import React from 'react';
import { useColorScheme } from 'react-native';
import { addDecorator } from '@storybook/react';
import PaperProviver from 'react-native-simple-elements/components/theme/Provider';
import ToastProvider from 'react-native-simple-elements/components/Toast';
import { Viewport } from 'react-native-simple-elements/components/Container';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    input:focus, textarea:focus, select:focus{
        outline: none !important;
    }
`;

const StoryBookUI = ({ children }) => {

    const colorSchema = useColorScheme();

    return (
        <>
            <GlobalStyle />
            <PaperProviver colorSchemeName={colorSchema}>
                <ToastProvider>
                    <Viewport>
                        {children}
                    </Viewport>
                </ToastProvider>
            </PaperProviver>
        </>
    );
}

addDecorator(storyFn => <StoryBookUI>{storyFn()}</StoryBookUI>);
