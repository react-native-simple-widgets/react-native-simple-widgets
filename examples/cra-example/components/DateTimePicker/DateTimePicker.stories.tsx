import * as React from "react";
import { View, Button } from "react-native";
import { storiesOf } from "@storybook/react";
import DateTimePicker from "react-native-simple-widgets/widgets/DateTimePicker/DateTimePicker";
import DateTimePickerPopup from "react-native-simple-widgets/widgets/DateTimePicker/mweb2/Popup";
import { ScrollviewViewport } from "react-native-simple-elements/components/Container";

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
        <ScrollviewViewport>
            <View
                style={{
                    width: "350px",
                    height: "640px",
                    borderWidth: 1,
                    borderColor: "black",
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
        </ScrollviewViewport>
    )
}

const DateTimePickerPopupExample = () => {

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
        <ScrollviewViewport>
            <View
                style={{
                    width: "350px",
                    height: "640px",
                    borderWidth: 1,
                    borderColor: "black",
                }}
            >
                <Button title="Show Date Picker" onPress={showDatePicker} />
                <DateTimePickerPopup
                    visible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                />
            </View>
        </ScrollviewViewport>
    )
}

storiesOf("DateTimePicker", module)
    .add("Default", () => {

        return (
            <DateTimePickerExample />
        );
    })
    .add("DateTimePickerPopup", () => {

        return (
            <DateTimePickerPopupExample />
        );
    })
