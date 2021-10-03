import * as React from "react";
import { Linking } from "react-native";
import { storiesOf } from "@storybook/react";
import Text from "react-native-simple-elements/components/Text";

const Example = (props) => {

    return (
        <>
            <Text>Getting Started</Text>
            <Text
                onPress={() => Linking.openURL("https://github.com/react-native-simple-widgets/react-native-simple-elements")}
            >
                GitHub
            </Text>
        </>
    );
}

storiesOf("00 Getting Started", module)
    .add("Default", () => <Example />)
