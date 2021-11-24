import * as React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import Collapsible from "react-native-simple-widgets/widgets/Collapsible";
import Button from "react-native-simple-elements/components/Button";
import Text from "react-native-simple-elements/components/Text";

const DefaultExample = () => {

    const [ collapsed, setCollapsed ] = React.useState(false);

    return (
        <View>
            <Button
                onPress={() => setCollapsed(!collapsed)}
            >
                Toggle Collapse
            </Button>
            <Collapsible
                collapsed={collapsed}
            >
                <Text>Content</Text>
                <Text>Content</Text>
                <Text>Content</Text>
                <Text>Content</Text>
                <Text>Content</Text>
                <Text>Content</Text>
                <Text>Content</Text>
                <Text>Content</Text>
                <Text>Content</Text>
                <Text>Content</Text>
                <Text>Content</Text>
                <Text>Content</Text>
            </Collapsible>
        </View>
    );
};

const PlaygroundExample = () => {

    const [ collapsed, setCollapsed ] = React.useState(false);

    return (
        <View>
            <Button
                onPress={() => setCollapsed(!collapsed)}
            >
                Toggle Collapse
            </Button>
            <Collapsible
                collapsed={collapsed}
            >
                <Text>Content</Text>
                <Text>Content</Text>
                <Text>Content</Text>
                <Text>Content</Text>
                <Text>Content</Text>
                <Text>Content</Text>
                <Text>Content</Text>
                <Text>Content</Text>
                <Text>Content</Text>
                <Text>Content</Text>
                <Text>Content</Text>
                <Text>Content</Text>
            </Collapsible>
        </View>
    );
};

storiesOf("Collapsible", module)
    .addDecorator(withKnobs)
    .add("Default", () => <DefaultExample />)
    .add("Playground", () => <PlaygroundExample />);
