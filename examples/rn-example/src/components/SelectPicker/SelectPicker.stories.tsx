import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import SelectPicker from "react-native-simple-widgets/widgets/SelectPicker";
import { Button, View } from "react-native";

const items = [
    { label: "Item 0", value: 0 },
    { label: "Item 1", value: 1 },
    { label: "Item 2", value: 2 },
    { label: "Item 3", value: 3 },
    { label: "Item 4", value: 4 },
    { label: "Item 5", value: 5 },
    { label: "Item 6", value: 6 },
    { label: "Item 7", value: 7 },
];

const MobileViewExample = () => {

    const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        action("onConfirm")(date);
        setDatePickerVisibility(false);
    };

    return (
        <View
            style={{
                flex: 1,
            }}
        >
            <Button title="Show Picker" onPress={showDatePicker} />
            <SelectPicker
                isVisible={isDatePickerVisible}
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
                data-testid="selectpicker"
                options={items}
            />
        </View>
    )
}

storiesOf("SelectPicker", module)
    .add("Default", () => {
        return (
            <MobileViewExample
            />
        )
    })
