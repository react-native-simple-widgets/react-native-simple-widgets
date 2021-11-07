import * as React from "react";
import { View, Button } from "react-native";
import { storiesOf } from "@storybook/react";
import DateTimePicker from "react-native-simple-widgets/widgets/DateTimePicker";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

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
    },
}

const DateTimePickerExample = () => {

    const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        hideDatePicker();
    };

    return (
        <View
            style={{
                flex: 1,
            }}
        >
            <Button title="Show Date Picker" onPress={showDatePicker} />
            <DateTimePicker
                visible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </View>
    )
}

storiesOf("DateTimePicker", module)
    .add("Default", () => <DateTimePickerExample />, iphonexlayout);
