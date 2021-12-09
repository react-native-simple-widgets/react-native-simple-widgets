import React from 'react';
import { useColorScheme } from 'react-native';
import { addDecorator } from '@storybook/react';
import LocaleProvider from 'react-native-simple-widgets/widgets/utils/i18n';
import PaperProviver from 'react-native-simple-elements/components/theme/Provider';
import ToastProvider from 'react-native-simple-elements/components/Toast';
import { Viewport } from 'react-native-simple-elements/components/Container';
import { createGlobalStyle } from 'styled-components';
import defaultLocale from './i18n/defaultLocale';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    input:focus, textarea:focus, select:focus{
        outline: none !important;
    }

    [data-paging-enabled-fix] > div {
        flex-direction: row;
        width: 100%;
    }

    [data-paging-enabled-fix] > div > div {
        flex-direction: row;
        width: 100%;
    }

    [data-paging-enabled-fix] > div > div > div {
        flex-direction: row;
        width: 100%;
    }

    [data-paging-enabled-fix] > div > div > div {
        height: 100%;
    }
`;

const StoryBookUI = ({ children }) => {

    const colorSchema = useColorScheme();

    const _handleFetchJSON = async() => {
        console.log("NODE_ENV", process.env.NODE_ENV);
        return {
            status: 200,
            ok: true,
            data: defaultLocale,
        };
    }

    return (
        <>
            <GlobalStyle />
            <PaperProviver colorSchemeName={colorSchema}>
                <ToastProvider>
                    <LocaleProvider
                        locale="en-us"
                        isInit={true}
                        fetchLocaleJson={_handleFetchJSON}
                    >
                        <Viewport>
                            {children}
                        </Viewport>
                    </LocaleProvider>
                </ToastProvider>
            </PaperProviver>
        </>
    );
}

addDecorator(storyFn => <StoryBookUI>{storyFn()}</StoryBookUI>);
