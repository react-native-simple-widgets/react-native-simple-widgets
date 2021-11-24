import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import MenuIcon from "@mdi/svg/svg/menu.svg";
import SimpleHeader from "react-native-simple-widgets/widgets/SimpleHeader";
import ValidationTextInput from "react-native-simple-widgets/widgets/ValidationTextInput";
import useForm from "react-native-simple-widgets/widgets/hooks/useForm";
import Button from "react-native-simple-elements/components/Button";

const onBackButtonPress = action("onBackButtonClick");

storiesOf("hooks/useForm", module)
    .addDecorator(withKnobs)
    .add("Default", () => {

        const _handleSubmit = (values) => {
            console.log(values);
        };

        const {
            values,
            createValidationProps,
            handleSubmit,
        } = useForm({

        }, () => _handleSubmit(values));

        return(
            <>
                <ValidationTextInput
                    label={"Nhập khoản chi tiêu"}
                    {...createValidationProps("amount")}
                />
                <Button
                    onPress={() => handleSubmit()}
                >
                    Submit
                </Button>
            </>
        );
    })
    .add("Playground", () => {
        return(
            <>
                <SimpleHeader
                    backButtonIcon={MenuIcon}
                    onBackButtonClick={onBackButtonPress}
                    title={"with loggedInUser"}
                    loggedInUser={{
                        userId: "12345",
                        firstName: "Username",
                        avatarUrl: "https://via.placeholder.com/350",
                    }}
                    onLoginClick={action("onLoginClick")}
                    onLogoutClick={action("onLogoutClick")}
                />
            </>
        );
    });
