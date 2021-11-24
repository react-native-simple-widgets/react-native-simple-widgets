import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import ImageGallery from "react-native-simple-widgets/widgets/ImageGallery";
import { View } from "react-native";

const DefaultExample = (props) => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "blue",
            }}>
            <ImageGallery
                style={{ flex: 1, backgroundColor: "black" }}
                images={[
                    // { source: require('yourApp/image.png'), dimensions: { width: 150, height: 150 } },
                    { source: { uri: "http://i.imgur.com/XP2BE7q.jpg" } },
                    { source: { uri: "http://i.imgur.com/XP2BE7q.jpg" } },
                    { source: { uri: "http://i.imgur.com/5nltiUd.jpg" } },
                    { source: { uri: "http://i.imgur.com/6vOahbP.jpg" } },
                    { source: { uri: "http://i.imgur.com/kj5VXtG.jpg" } },
                ]}
            />
        </View>
    );
};

const PlaygroundExample = (props) => {
    return <></>;
};

storiesOf("ImageGallery", module)
    .add("Default", () => <DefaultExample />)
    .add("Playground", () => <PlaygroundExample />);
