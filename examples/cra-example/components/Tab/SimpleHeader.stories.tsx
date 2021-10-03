import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import MenuIcon from "@mdi/svg/svg/menu.svg";
import SimpleHeader from "react-native-simple-widgets/widgets/SimpleHeader";
import { ScrollableTab } from "react-native-simple-widgets/widgets/Tab";
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const viewportParams = {
    viewports: {
        ...INITIAL_VIEWPORTS,
    },
    defaultViewport: "responsive",
};

const onBackButtonPress = action("onBackButtonClick");

storiesOf("Tab", module)
    .addDecorator(withKnobs)
    .add("Default", () => {
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
                    onViewProfileClick={action("onViewProfileClick")}
                    onLogoutClick={action("onLogoutClick")}
                />
            </>
        )
    })
    .add("ScrollableTab", () => {
        return(
            <ScrollableTab
                options={[
                    {
                        label: "Home home 0",
                    },
                    {
                        label: "Home home 0",
                    },
                    {
                        label: "Home home 0",
                    },
                    {
                        label: "Home home 0",
                    },
                    {
                        label: "Home home 0",
                    },
                ]}
                style={{
                    width: "100%",
                }}
            />
        )
    }, {
        viewport: {
            ...viewportParams,
            defaultViewport: "iphonex",
        },
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
        )
    });
