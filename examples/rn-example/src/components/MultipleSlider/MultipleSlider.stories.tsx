import * as React from 'react';
import { storiesOf } from "@storybook/react-native";
import Button from 'react-native-simple-elements/components/Button';
import openMaps from "react-native-simple-widgets/widgets/utils/OpenMapsUtils";
import MultiSlider from "react-native-simple-widgets/widgets/MultipleSlider";

const start = 'SOHO, New York City, NY';
const end = 'Chinatown, New York City, NY';
// const travelType = 'public_transport'; // drive, walk

const OneExample = () => {
    const [, setSliderOneChanging] = React.useState(false);
    const [sliderOneValue, setSliderOneValue] = React.useState([5]);

    const sliderOneValuesChangeStart = () => setSliderOneChanging(true);

    const sliderOneValuesChange = values => setSliderOneValue(values);

    const sliderOneValuesChangeFinish = () => setSliderOneChanging(false);

    return (
        <>
            <MultiSlider
                values={sliderOneValue}
                sliderLength={310}
                onValuesChangeStart={sliderOneValuesChangeStart}
                onValuesChange={sliderOneValuesChange}
                onValuesChangeFinish={sliderOneValuesChangeFinish}
            />
        </>
    )
}

const TwoExample = () => {
    const [multiSliderValue, setMultiSliderValue] = React.useState([3, 7]);

    const multiSliderValuesChange = values => setMultiSliderValue(values);

    return (
        <>
            <MultiSlider
                values={[multiSliderValue[0], multiSliderValue[1]]}
                sliderLength={250}
                onValuesChange={multiSliderValuesChange}
                min={0}
                max={10}
                step={1}
                allowOverlap
                snapped
                // customLabel={CustomLabel}
            />
        </>
    )
}

const ThreeExample = () => {
    const [
        nonCollidingMultiSliderValue,
        setNonCollidingMultiSliderValue,
    ] = React.useState([0, 100]);

    const nonCollidingMultiSliderValuesChange = values =>
        setNonCollidingMultiSliderValue(values);

    return (
        <>
            <MultiSlider
                values={[
                    nonCollidingMultiSliderValue[0],
                    nonCollidingMultiSliderValue[1],
                ]}
                sliderLength={280}
                onValuesChange={nonCollidingMultiSliderValuesChange}
                min={0}
                max={100}
                step={1}
                allowOverlap={false}
                snapped
                minMarkerOverlapDistance={40}
                // customMarker={CustomMarker}
                // customLabel={CustomLabel}
            />
        </>
    )
}

storiesOf("MultipleSlider", module)
    .add("Default", () => {

        const handleOpenMaps = () => {
            openMaps({
                latitude: 37.865101,
                longitude: -119.538330,
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
                <Button
                    onPress={handleOpenMaps}
                >
                    Open Maps Target
                </Button>
                <Button
                    onPress={handleOpenMapsDirections}
                >
                    Open Maps Directions
                </Button>
            </>
        )
    })
    .add("One", () => {

        return (
            <OneExample />
        )
    })
    .add("Two", () => {
        return (
            <TwoExample />
        )
    })
    .add("Three", () => {
        return (
            <ThreeExample />
        )
    })
    .add("Playground", () => {

        const handleOpenMaps = () => {
            openMaps({
                latitude: 37.865101,
                longitude: -119.538330,
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
                <Button
                    onPress={handleOpenMaps}
                >
                    Open Maps Target
                </Button>
                <Button
                    onPress={handleOpenMapsDirections}
                >
                    Open Maps Directions
                </Button>
            </>
        )
    });
