import * as React from "react";
import { storiesOf } from "@storybook/react";
import SimplePageTransition from "react-native-simple-widgets/widgets/SimplePageTransition";
import { DrawerContext } from "react-native-simple-elements/components/Drawer";
import Button from "react-native-simple-elements/components/Button";
import Text from "react-native-simple-elements/components/Text";

const SimpleDrawerExample = (props) => {
    const { drawerIsOpen, setDrawerIsOpen } = React.useContext(DrawerContext);

    return (
        <SimplePageTransition>
            <Button
                onPress={() => setDrawerIsOpen(!drawerIsOpen)}
            >
                Toggle Drawer
            </Button>
            <Text>Hello</Text>
        </SimplePageTransition>
    )
}

storiesOf("SimplePageTransition", module)
    .add("Default", () => {
        return(
            <SimpleDrawerExample
            />
        )
    })
