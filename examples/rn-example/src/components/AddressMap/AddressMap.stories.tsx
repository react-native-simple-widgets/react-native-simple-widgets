import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import AddressMap from "react-native-simple-widgets/widgets/AddressMap";
import { Circle, Marker } from "react-native-maps";
import { StyleSheet, View } from "react-native";
import Button from "react-native-simple-elements/components/Button";
import Text from "react-native-simple-elements/components/Text";

// const {width, height} = Dimensions.get('window');
// const ASPECT_RATIO = width / height;
// const LATITUDE = 37.78825;
// const LONGITUDE = -122.4324;
const LATITUDE = 10.8469123;
const LONGITUDE = 106.6409313;
// const LATITUDE_DELTA = 0.0922;
// const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;

const sampleRegion = {
    // latitude: 38.685516,
    latitude: 10.8469123,
    // longitude: -101.073324,
    longitude: 106.6409313,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
};

const markers = [
    {
        coordinate: {
            latitude: LATITUDE + SPACE,
            longitude: LONGITUDE + SPACE,
        },
    },
];

const DefaultExample = (props) => {
    const [ , setRegion ] = React.useState(sampleRegion);
    const [ jump, setJump ] = React.useState(false);
    const [ position, setPosition ] = React.useState("");

    const mapRef = React.useRef(null);
    const marker1 = React.useRef(null);
    // const marker2 = React.useRef(null);

    return (
        <View
            style={{
                flex: 1,
                borderWidth: 1,
                borderColor: "red",
            }}>
            <AddressMap
                innerRef={mapRef}
                provider="google"
                initialRegion={sampleRegion}
                // region={{
                //     latitude: region.latitude,
                //     longitude: region.longitude,
                //     latitudeDelta: region.latitudeDelta,
                //     longitudeDelta: region.longitudeDelta,
                // }}
                // onRegionChange={(nRegion) => setRegion(nRegion)}
                // onMapReady={() => {
                // Platform.OS === 'ios' && mapRef.current?.animateToRegion(region, 0.1);
                // }}
                onRegionChange={() => {
                    if (!jump) {
                        setJump(true);
                    }
                }}
                onRegionChangeComplete={(nRegion) => {
                    setRegion(nRegion);
                    setJump(false);
                    // console.log(nRegion);
                }}
                // showsUserLocation={true}
                // showsMyLocationButton={true}
                onPress={(evt) => {
                    setPosition(JSON.stringify(evt.nativeEvent.coordinate));
                }}>
                <Marker
                    ref={marker1}
                    coordinate={markers[0].coordinate}
                    title="This is a native view"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
                />
                {/* <Marker
                    ref={marker2}
                    coordinate={{
                        latitude: region.latitude,
                        longitude: region.longitude,
                    }}
                    title="Pin"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
                /> */}
                <Circle
                    center={{
                        latitude: markers[0].coordinate.latitude,
                        longitude: markers[0].coordinate.longitude,
                    }}
                    // radius={coords.accuracy}
                    radius={10}
                    strokeColor="rgba(0, 150, 255, 0.5)"
                    fillColor="rgba(0, 150, 255, 0.5)"
                />
            </AddressMap>
            <View pointerEvents="box-none">
                <Button
                    onPress={() => {
                        setRegion(sampleRegion);
                    }}>
                    Current
                </Button>
                <Text>{`${position}`}</Text>
            </View>
            <View
                style={{
                    ...StyleSheet.absoluteFillObject,
                    alignItems: "center",
                    justifyContent: "center",
                }}
                pointerEvents="box-none">
                <Text>{jump ? "Jump" : "Pin"}</Text>
            </View>
        </View>
    );
};

const PlaygroundExample = (props) => {
    return <></>;
};

storiesOf("AddressMap", module)
    .add("Default", () => <DefaultExample />)
    .add("Playground", () => <PlaygroundExample />);
