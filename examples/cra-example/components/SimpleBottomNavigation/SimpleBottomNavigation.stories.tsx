import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import SimpleBottomNavigation from "react-native-simple-widgets/widgets/SimpleBottomNavigation";
import { DrawerContext } from "react-native-simple-elements/components/Drawer";
import Button from "react-native-simple-elements/components/Button";
import Text from "react-native-simple-elements/components/Text";
import HomeIcon from "@mdi/svg/svg/home.svg";
import ReloadIcon from "@mdi/svg/svg/reload.svg";
import ActionIcon from "@mdi/svg/svg/gesture-tap.svg";
import EmailIcon from "@mdi/svg/svg/email.svg";
import SettingsIcon from "@mdi/svg/svg/cog.svg";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { View } from "react-native";

const viewportParams = {
    viewports: {
        ...INITIAL_VIEWPORTS,
    },
    defaultViewport: "responsive",
};

const items = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
];

const SimpleBottomNavigationExample = (props) => {
    const { drawerIsOpen, setDrawerIsOpen } = React.useContext(DrawerContext);

    return (
        <>
            <Button
                onPress={() => setDrawerIsOpen(!drawerIsOpen)}
            >
                Toggle Drawer
            </Button>
            <Text>Hello</Text>
            {(Array.isArray(items) && items.length > 0) &&
                items.map((item, index) => {
                    return (
                        <View key={index} style={{ width: "100%", height: "100px" }}>
                            <Text>Hello</Text>
                        </View>
                    )
                })
            }
            <SimpleBottomNavigation
                items={[
                    { label: "Home", value: "home", icon: HomeIcon },
                    { label: "History", value: "history", icon: ReloadIcon },
                    { label: "Action", value: "action", icon: ActionIcon },
                    { label: "Inbox", value: "inbox", icon: EmailIcon },
                    { label: "Settings", value: "settings", icon: SettingsIcon },
                ]}
                onItemPress={action("onItemPress")}
            />
        </>
    )
}

storiesOf("SimpleBottomNavigation", module)
    .add("Default", () => {
        return(
            <SimpleBottomNavigationExample
            />
        )
    })
    .add("Mobile View", () => {
        return(
            <SimpleBottomNavigationExample
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
            <SimpleBottomNavigationExample
            />
        )
    });
