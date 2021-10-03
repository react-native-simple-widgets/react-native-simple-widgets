import * as React from "react";
import { storiesOf } from "@storybook/react";
import Text from "react-native-simple-elements/components/Text";
import DropdownPicker from "react-native-simple-widgets/widgets/DropdownPicker";
import TextInput from "react-native-simple-elements/components/TextInput";
import { Dimensions, View } from "react-native";

const WindowWidth = Dimensions.get("window").width;

const Example = (props) => {

    const [ visible, setVisible ] = React.useState(false);
    const [ text, setText ] = React.useState("");
    const [ data, setData ] = React.useState([]);

    const _handleClose = () => {
        setVisible(false);
    }

    const _handleOpen = () => {
        setVisible(true);
    }

    const _handleChange = (text) => {
        setText(text);
        setData([]);
        setVisible(text.length > 0);
    }

    return (
        <View
            style={{
                padding: 16,
            }}
        >
            <TextInput
            />
            <DropdownPicker
                visible={visible}
                onDismiss={_handleClose}
                anchor={
                    <TextInput
                        value={text}
                        onChangeText={_handleChange}
                    />
                }
                style={{
                    width: WindowWidth - 32,
                }}
            >
                <View style={{
                    width: "100%",
                }}>
                    <Text>Hello</Text>
                </View>
            </DropdownPicker>
            <TextInput
            />
        </View>
    );
}

storiesOf("DropdownPicker", module)
    .add("Default", () => <Example />)
