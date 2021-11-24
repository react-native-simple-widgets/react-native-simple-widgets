import * as React from "react";
import { storiesOf } from "@storybook/react";
import Text from "react-native-simple-elements/components/Text";
import { formatCurrency } from "react-native-simple-widgets/widgets/utils/currencyformat";

const PlaygroundExample = () => {

    return (
        <>
            <Text>{formatCurrency(123456.7)}</Text>
            <Text>{formatCurrency(123456.7, "vi-VN", "VND")}</Text>
        </>
    );
};

storiesOf("utils/currency", module)
    .add("Playground", () => <PlaygroundExample />);
