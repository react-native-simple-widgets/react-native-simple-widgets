import * as React from "react";
import { storiesOf } from "@storybook/react";
import Text from "react-native-simple-elements/components/Text";
import DropdownInput from "react-native-simple-widgets/widgets/DropdownInput";
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

    const _handleFocus = () => {
        _handleOpen();
    }

    const _handleChange = (text) => {
        setText(text);
        setData([]);
        // setVisible(text.length > 0);
    }

    const _handleKeyPress = (evt) => {
        if (evt.nativeEvent.key === "Enter") {
            _handleClose();
        }
    }

    return (
        <View
            style={{
                padding: 16,
            }}
        >
            <TextInput
                style={{
                    marginBottom: 16,
                }}
            />
            <DropdownInput
                visible={visible}
                onDismiss={_handleClose}
                anchor={
                    <TextInput
                        value={text}
                        onChangeText={_handleChange}
                        onFocus={() => _handleFocus()}
                        onKeyPress={_handleKeyPress}
                        style={{
                            marginBottom: 16,
                        }}
                    />
                }
                style={{
                    width: WindowWidth - 32,
                    marginBottom: 16,
                }}
            >
                <View style={{
                    width: "100%",
                }}>
                    <Text>Hello</Text>
                </View>
            </DropdownInput>
            <TextInput
                style={{
                    marginBottom: 16,
                }}
            />
        </View>
    );
}

storiesOf("DropdownInput", module)
    .add("Default", () => <Example />)
