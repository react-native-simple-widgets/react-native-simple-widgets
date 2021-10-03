import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import { PickerSelect } from ".";

const selectItems = [
    {
      label: 'Java',
      value: 'java',
    },
    {
      label: 'JavaScript',
      value: 'js',
    },
];

storiesOf("SelectPicker", module)
    .add("Default", () => {
        return (
            <PickerSelect
                placeholder="Nationality / Region"
                items={selectItems}
                inputAccessoryProps={{ doneText: 'Done' }}
            />
        )
    })
