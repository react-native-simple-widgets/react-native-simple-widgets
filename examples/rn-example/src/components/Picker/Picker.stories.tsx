import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import { Picker } from '@react-native-picker/picker';

const PickerExample = () => {
    const [selectedLanguage, setSelectedLanguage] = React.useState();

    return (
        <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
            }>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
        </Picker>
    )
}
storiesOf("Picker", module)
    .add("Default", () => {

        return (
            <PickerExample
            />
        )
    })
    