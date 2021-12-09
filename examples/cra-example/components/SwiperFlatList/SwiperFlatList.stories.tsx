import * as React from "react";
import { Dimensions, FlatList, ImageBackground, StyleSheet, Text, View } from "react-native";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import RatioBox, { SUPPORTED_PERCENTAGE_RATIOS } from "react-native-simple-elements/components/RatioBox";
import SwiperFlatList from "react-native-simple-widgets/widgets/SwiperFlatList";

import { fox, cat, background, element, lion } from "./images";
import { CustomPagination } from "./CustomPagination";
import Image from "react-native-simple-elements/components/Image";
import { AbsoluteView } from "react-native-simple-elements/components/Container";

const { width } = Dimensions.get("window");

const newImage = [ lion, fox, cat, background, element ];
const image = (index) => ({ image: newImage[index % newImage.length] });
const items = Array.from(Array(5)).map((_, index) => image(index));

const SwiperFlatListExample = () => {
    return (
        <RatioBox
            width={width}
            ratio={SUPPORTED_PERCENTAGE_RATIOS.WH_36x9}
        >
            <AbsoluteView>
                <SwiperFlatList
                    autoplay={false}
                    autoplayDelay={2}
                    // index={3}
                    // autoplayLoop
                    // autoplayInvertDirection
                    data={items}
                    renderItem={({ item, index }) => (
                        <Image
                            style={styles.image}
                            source={item.image}
                            testID={`container_swiper_renderItem_screen_${index}`}
                        />
                    )}
                    showPagination
                    PaginationComponent={CustomPagination}
                    paginationStyle={{
                        alignItems: "flex-end",
                    }}
                    e2eID="container_swiper_renderItem"
                />
            </AbsoluteView>
        </RatioBox>
    );
};

const WithAutoplayExample = () => {
    return (
        <SwiperFlatList
            autoplay={true}
            autoplayDelay={2}
            // index={3}
            // autoplayLoop
            // autoplayInvertDirection
            data={items}
            renderItem={({ item, index }) => (
                <ImageBackground
                    style={styles.image}
                    source={item.image}
                    testID={`container_swiper_renderItem_screen_${index}`}
                >
                    <Text style={styles.text}>Item at index {index}</Text>
                </ImageBackground>
            )}
            showPagination
            PaginationComponent={CustomPagination}
            paginationStyle={{
                alignItems: "flex-end",
            }}
            e2eID="container_swiper_renderItem"
        />
    );
};

const FlatListExample = () => {
    return (
        <FlatList
            data={items}
            renderItem={({ item, index }) => (
                <ImageBackground
                    style={styles.image}
                    source={item.image}
                    testID={`container_swiper_renderItem_screen_${index}`}
                >
                    <Text style={styles.text}>Item at index {index}</Text>
                </ImageBackground>
            )}
            horizontal={true}
        />
    );
};

const styles = StyleSheet.create({
    image: {
        width: width,
        // height: "auto",
        resizeMode: "cover",
        justifyContent: "flex-end",
    },
    text: {
        fontSize: width * 0.1,
        color: "whitesmoke",
        textAlign: "center",
    },
});

storiesOf("SwiperFlatList", module)
    .addDecorator(withKnobs)
    .add("Default", () => <SwiperFlatListExample />)
    .add("Autoplay", () => <WithAutoplayExample />)
    .add("FlatListExample", () => <FlatListExample />)
    .add("Loop", () => {
        return (
            <SwiperFlatList
                autoplay
                autoplayDelay={2}
                // index={3}
                autoplayLoop={true}
                autoplayLoopKeepAnimation={true}
                // autoplayInvertDirection
                data={items}
                renderItem={({ item, index }) => (
                    <ImageBackground
                        style={styles.image}
                        source={item.image}
                        testID={`container_swiper_renderItem_screen_${index}`}
                    >
                        <Text style={styles.text}>Item at index {index}</Text>
                    </ImageBackground>
                )}
                showPagination
                PaginationComponent={CustomPagination}
                e2eID="container_swiper_renderItem"
            />
        );
    })
    .add("Playground", () => {
        return (
            <SwiperFlatListExample
            />
        );
    });
