import * as React from "react";
import { storiesOf } from "@storybook/react";
import ValidationTextInput from "react-native-simple-widgets/widgets/ValidationTextInput";
import { Masks } from "react-native-simple-widgets/widgets/MaskInput";

const ValidationTextInputExample = (props) => {

    return (
        <ValidationTextInput
            value="value"
            onChange={(value) => {
                // do someting
            }}
            errorMessage="Has error"
        />
    );
};

const WithMaskedExample = (props) => {
    const [ value, setValue ] = React.useState("");

    return (
        <ValidationTextInput
            value={value}
            onChange={setValue}
            errorMessage="Has error"
            masked={true}
            mask={Masks.DATE_MMDDYYYY}
        />
    );
};

storiesOf("ValidationTextInput", module)
    .add("Default", () => {
        return (
            <ValidationTextInputExample
            />
        );
    })
    .add("with masked", () => <WithMaskedExample />);
