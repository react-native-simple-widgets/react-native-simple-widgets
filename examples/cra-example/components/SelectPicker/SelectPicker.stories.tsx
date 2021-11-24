import * as React from "react";
import { View, Text, Button } from "react-native";
import { storiesOf } from "@storybook/react";
import SelectPicker from "react-native-simple-widgets/widgets/SelectPicker";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

const viewportParams = {
    viewports: {
        ...INITIAL_VIEWPORTS,
    },
    defaultViewport: "responsive",
}

const iphonexlayout = {
    viewport: {
        ...viewportParams,
        defaultViewport: "iphonex",
    },
}

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

const DateTimePickerExample = () => {

    const [isDatePickerVisible, setDatePickerVisibility] = React.useState("");

    const handleConfirm = (date) => {
        setDatePickerVisibility(date);
    };

    return (
        <View
            style={{
                flex: 1,
            }}
        >
            <SelectPicker
                selectedValue={isDatePickerVisible}
                onValueChange={handleConfirm}
                data-testid="selectpicker"
            >
                {(Array.isArray(items) && items.length > 0) &&
                    items.map((item, index) => {
                        return (
                            <Text key={index}>{item.label}</Text>
                        )
                    })
                }
            </SelectPicker>
        </View>
    )
}

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
    .addDecorator(withKnobs)
    .add("Default", () => <DateTimePickerExample />, iphonexlayout)
    .add("MobileView", () => <MobileViewExample />, iphonexlayout);
