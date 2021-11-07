import * as React from "react";
import { View, Text } from "react-native";
import { storiesOf } from "@storybook/react";
import SelectPicker from "react-native-simple-widgets/widgets/SelectPicker";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

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
    { label: "Item 0" },
    { label: "Item 0" },
    { label: "Item 0" },
    { label: "Item 0" },
    { label: "Item 0" },
    { label: "Item 0" },
    { label: "Item 0" },
    { label: "Item 0" },
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

storiesOf("SelectPicker", module)
    .add("Default", () => <DateTimePickerExample />, iphonexlayout);
