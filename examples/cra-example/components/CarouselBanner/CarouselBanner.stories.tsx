import * as React from "react";
import { storiesOf } from "@storybook/react";
import CarouselBanner from "react-native-simple-widgets/widgets/CarouselBanner";
import RatioBox from "react-native-simple-widgets/widgets/RatioBox";
import Text from "react-native-simple-elements/components/Text";
import { useWindowDimensions, View } from "react-native";
import { select, withKnobs } from "@storybook/addon-knobs";

const SUPPORTED_RATIO_KEYS = [
    "1x1",
    "4x3",
    "16x9",
    "21x9",
    "36x9",
];

const CarouselBannerExample = () => {

    const { width: viewportWidth } = useWindowDimensions();

    const containerRatio = select("containerRatio", SUPPORTED_RATIO_KEYS, "16x9");

    return (
        <CarouselBanner
            containerRatio={containerRatio}
            sliderWidth={viewportWidth}
            data={[{}, {}, {}]}
            renderItem={({ item, index }) => {
                return (
                    <RatioBox
                        key={index}
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
            }}
        />
    )
}

storiesOf("CarouselBanner", module)
    .addDecorator(withKnobs)
    .add("Default", () => {
        return (
            <CarouselBannerExample
            />
        )
    })
