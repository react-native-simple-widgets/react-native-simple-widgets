import * as React from 'react';
import { View } from 'react-native';
import { storiesOf } from "@storybook/react-native";
import TextInput from 'react-native-simple-elements/components/TextInput';
import HelperText from 'react-native-simple-elements/components/HelperText';

const HelperTextExample = () => {
    const [text, setText] = React.useState('');

    const onChangeText = text => setText(text);

    const hasErrors = () => {
        return !text.includes('@');
    };

    return (
        <View>
            <TextInput label="Email" value={text} onChangeText={onChangeText} />
            <HelperText type="error" visible={hasErrors()}>
                Email address is invalid!
      </HelperText>
        </View>
    );
};

storiesOf("HelperText", module)
    .add("Default", () => {
        return (
            <HelperTextExample
            />
        )
    })
