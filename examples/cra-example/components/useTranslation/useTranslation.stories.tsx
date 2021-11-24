import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import MenuIcon from "@mdi/svg/svg/menu.svg";
import SimpleHeader from "react-native-simple-widgets/widgets/SimpleHeader";
import { useTranslation } from "react-native-simple-widgets/widgets/utils/i18n";
import Button from "react-native-simple-elements/components/Button";
import TextInput from "react-native-simple-elements/components/TextInput";

const onBackButtonPress = action("onBackButtonClick");

const DefaultExample = () => {
    const translate = useTranslation();

    const handleSubmit = () => {
        // do something
    };

    return(
        <>
            <TextInput
                label={translate("common.message")}
            />
            <Button
                onPress={() => handleSubmit()}
            >
                Submit
            </Button>
        </>
    );
};

storiesOf("utils/useTranslation", module)
    .addDecorator(withKnobs)
    .add("Default", () => <DefaultExample />)
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
