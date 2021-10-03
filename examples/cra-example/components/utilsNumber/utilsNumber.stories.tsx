import * as React from "react";
import { storiesOf } from "@storybook/react";
import Text from "react-native-simple-elements/components/Text";
import { formatDecimal } from "react-native-simple-widgets/widgets/utils/numberformat";

const PlaygroundExample = () => {

    return (
        <>
            <Text>{formatDecimal(123456.789)}</Text>
            <Text>{formatDecimal(123456.789, "vi-VN")}</Text>
        </>
    )
};

storiesOf("utils/number", module)
    .add("Playground", () => <PlaygroundExample />)
