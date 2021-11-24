import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import DateTimePicker from 'react-native-simple-widgets/widgets/DateTimePicker';
import { View } from "react-native";
import { Button } from "react-native";
import { action } from "@storybook/addon-actions";

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
        action("onConfirm")(date);
    };

    const handleHide = () => {
        // do something
    }

    return (
        <View
            style={{
                flex: 1,
            }}
        >
            <Button title="Show Date Picker" onPress={showDatePicker} />
            <DateTimePicker
                isVisible={isDatePickerVisible}
                mode="datetime"
                use12Hours={true}
                date={new Date()}
                onHide={handleHide}
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </View>
    )
}

storiesOf("DateTimePicker", module)
    .add("Default", () => <DateTimePickerExample />)
