import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import { DatePicker } from ".";

const baseProps = {
    dateTimePickerProps: {
        minimumDate: new Date('2019-01-30'),
        maximumDate: new Date('2019-01-30'),
    },
    dateFormat: "dd/MM/yyyy",
    placeholder: 'DD/MM/YYYY',
    value: '22/02/2020',
};

storiesOf("DateTimePicker", module)
    .add("Default", () => {
        return (
            <DatePicker
                {...baseProps}
            />
        )
    })
