import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import Button from "react-native-simple-elements/components/Button";
import openMaps from "react-native-simple-widgets/widgets/utils/OpenMapsUtils";

const start = "SOHO, New York City, NY";
const end = "Chinatown, New York City, NY";
// csonst travelType = 'public_transport'; // drive, walk

storiesOf("OpenMapsHelpr", module).add("Default", () => {
    const handleOpenMaps = () => {
        openMaps({
            latitude: 37.865101,
            longitude: -119.53833,
            // query: 'Yosemite Trails',
            // zoom: 0,
        });
    };

    const handleOpenMapsDirections = () => {
        openMaps({
            start,
            end,
        });
    };

    return (
        <>
            <Button onPress={handleOpenMaps}>Open Maps Target</Button>
            <Button onPress={handleOpenMapsDirections}>
                Open Maps Directions
            </Button>
        </>
    );
});
