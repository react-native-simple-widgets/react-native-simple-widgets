import * as React from "react";
import { storiesOf } from "@storybook/react";
import { select, withKnobs } from "@storybook/addon-knobs";
import RatioBox from "react-native-simple-widgets/widgets/RatioBox";
import Text from "react-native-simple-elements/components/Text";
import { View } from "react-native";

const SUPPORTED_RATIO_KEYS = [
    "1x1",
    "4x3",
    "16x9",
    "21x9",
    "36x9",
];

storiesOf("RatioBox", module)
    .addDecorator(withKnobs)
    .add("Default", () => {

        const ratio = select("ratio", SUPPORTED_RATIO_KEYS, "16x9");

        return (
            <RatioBox
                ratio={ratio}
            >
                <View
                    style={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: "green",
                    }}
                >
                    <Text>Hello</Text>
                </View>
            </RatioBox>
        )
    })
