import * as React from 'react';
import { View, FlatList } from 'react-native';
import { storiesOf } from "@storybook/react-native";
import TextInput from 'react-native-simple-elements/components/TextInput';
import HelperText from 'react-native-simple-elements/components/HelperText';

const data = [{ id: "1", title: "1" }, { id: "2", title: "2" }];

const FlatListExample = () => {
    const [text, setText] = React.useState('');

    const onChangeText = text => setText(text);

    const hasErrors = () => {
        return !text.includes('@');
    };

    const renderItem = ({ item, index }) => {
        return (
            <View
                style={{
                    borderWidth: 1,
                    borderColor: "red",
                    alignSelf: "stretch",
                }}
            >
                <TextInput label="Email" value={text} onChangeText={onChangeText} />
                <HelperText type="error" visible={hasErrors()}>
                    Email address is invalid!
                </HelperText>
                {index === 0 ?
                    <HelperText type="error" visible={hasErrors()}>
                        Email address is invalid! 2
                    </HelperText> : null
                }
            </View>
        );
    }
    
    return (
        <View>
            <FlatList
                horizontal
                data={data}
                renderItem={renderItem}
            />
        </View>
    );
};

storiesOf("FlatList", module)
    .add("Default", () => {
        return (
            <FlatListExample
            />
        )
    })
