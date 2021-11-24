import * as React from "react";
import { storiesOf } from "@storybook/react";
import Text from "react-native-simple-elements/components/Text";
import TextInput2 from "react-native-simple-elements/components/TextInput2";
import AutocompleteInput from "react-native-simple-widgets/widgets/AutocompleteInput";
import { Platform, View, StyleSheet } from "react-native";
import Button from "react-native-simple-elements/components/Button";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import TextInput from "react-native-simple-elements/components/TextInput";

const viewportParams = {
    viewports: {
        ...INITIAL_VIEWPORTS,
    },
    defaultViewport: "responsive",
};

const iphonexlayout = {
    viewport: {
        ...viewportParams,
        defaultViewport: "iphonex",
    }
};

const SAMPLE_DATA = [
    "hello",
    "hi",
    "ba",
];

const DefaultExample = (props) => {

    const [ value, setValue ] = React.useState("");
    const [ showResults, setShowResults ] = React.useState(false);

    const filterData = () => {
        return SAMPLE_DATA.filter(item => item.indexOf(value) > -1);
    };

    const _handleKeyPress = (evt) => {
        if (evt.nativeEvent.key === "Enter") {
            // setShowResults(true);
        }
    };

    const _handleOnBlur = () => {
        // setShowResults(false);
    };

    const data = filterData();

    return (
        <>
            <View style={styles.container}>
                <View style={styles.autocompleteContainer}>
                    <AutocompleteInput
                        value={value}
                        data={data}
                        hideResults={!showResults}
                        onChangeText={(text) => {
                            setValue(text);
                        }}
                        onFocus={() => {
                            setShowResults(true);
                        }}
                        flatListProps={{
                            data: data,
                            keyExtractor: (item, idx) => `${idx}`,
                            renderItem: ({ item }) =>
                                <Button onPress={() => {
                                    // do something
                                }}><Text>{item}</Text></Button>,
                        }}
                        renderTextInput={(textInputProps) => (
                            <TextInput2
                                {...textInputProps}
                                placeholder="Test"
                                onBlur={_handleOnBlur}
                                onKeyPress={_handleKeyPress}
                            />
                        )}
                        onBackdropPress={() => setShowResults(false)}
                    />
                </View>
            </View>
        </>
    );
};

const MobileViewExample = (props) => {

    const [ value, setValue ] = React.useState("");
    const [ showResults, setShowResults ] = React.useState(false);
    const [ value2, setValue2 ] = React.useState("");
    const [ showResults2, setShowResults2 ] = React.useState(false);

    const filterData = () => {
        return SAMPLE_DATA.filter(item => item.indexOf(value) > -1);
    };

    const _handleKeyPress = (evt) => {
        if (evt.nativeEvent.key === "Enter") {
            // setShowResults(true);
        }
    };

    const _handleOnBlur = () => {
        // setShowResults(false);
    };

    const data = filterData();

    return (
        <>
            <View style={[ styles.container, { zIndex: 2 } ]}>
                <View style={[ styles.autocompleteContainer, { zIndex: 2 } ]}>
                    <AutocompleteInput
                        value={value}
                        data={data}
                        hideResults={!showResults}
                        onChangeText={(text) => {
                            setValue(text);
                        }}
                        onFocus={() => {
                            setShowResults(true);
                        }}
                        flatListProps={{
                            data: data,
                            keyExtractor: (item, idx) => `${idx}`,
                            renderItem: ({ item }) =>
                                <Button onPress={() => {
                                    // do something
                                }}><Text>{item}</Text></Button>,
                        }}
                        renderTextInput={(textInputProps) => (
                            <TextInput
                                {...textInputProps}
                                placeholder="Test 1"
                                onBlur={_handleOnBlur}
                                onKeyPress={_handleKeyPress}
                            />
                        )}
                        onBackdropPress={() => setShowResults(false)}
                    />
                </View>
            </View>
            <View style={styles.container}>
                <View style={styles.autocompleteContainer}>
                    <AutocompleteInput
                        value={value2}
                        data={data}
                        hideResults={!showResults2}
                        onChangeText={(text) => {
                            setValue2(text);
                        }}
                        onFocus={() => {
                            setShowResults2(true);
                        }}
                        flatListProps={{
                            data: data,
                            keyExtractor: (item, idx) => `${idx}`,
                            renderItem: ({ item }) =>
                                <Button onPress={() => {
                                    // do something
                                }}><Text>{item}</Text></Button>,
                        }}
                        renderTextInput={(textInputProps) => (
                            <TextInput
                                {...textInputProps}
                                placeholder="Test 2"
                                onBlur={_handleOnBlur}
                                onKeyPress={_handleKeyPress}
                            />
                        )}
                        onBackdropPress={() => setShowResults2(false)}
                    />
                </View>
            </View>
        </>
    );
};

storiesOf("AutocompleteInput", module)
    .add("Default", () => <DefaultExample />)
    .add("MobileView", () => <MobileViewExample />, iphonexlayout)
    .add("Playground", () => <DefaultExample />);

const styles = StyleSheet.create({
    container: {
        position: "relative",
        backgroundColor: "#F5FCFF",
        // flex: 1,

        // Android requiers padding to avoid overlapping
        // with content and autocomplete
        paddingTop: 64,

        // Make space for the default top bar
        ...Platform.select({
            web: {
                marginTop: 0,
            },
            default: {
                marginTop: 25,
            },
        }),
    },
    itemText: {
        fontSize: 15,
        margin: 2,
    },
    descriptionContainer: {
        // `backgroundColor` needs to be set otherwise the
        // autocomplete input will disappear on text input.
        backgroundColor: "#F5FCFF",
        marginTop: 8,
    },
    infoText: {
        textAlign: "center",
    },
    autocompleteContainer: {
        // Hack required to make the autocomplete
        // work on Andrdoid
        flex: 1,
        left: 0,
        position: "absolute",
        right: 0,
        top: 0,
        zIndex: 1,
        padding: 5,
    },
});
