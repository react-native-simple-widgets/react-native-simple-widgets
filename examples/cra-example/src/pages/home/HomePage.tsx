import * as React from "react";
import { useHistory } from "react-router-dom";
import Button from "react-native-simple-elements/components/Button";
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from "src/types";
import { ToastExample } from "src/components/Toast/ToastExample";
import MinusBoxIcon from "@mdi/svg/svg/minus-box.svg";
import { ScrollView } from "react-native";
import Card from "react-native-simple-elements/components/Card";

const testData = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
];

type ProfileScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Home'
>;

type Props = {
    navigation: ProfileScreenNavigationProp;
};

export function HomePage(props: Props) {

    const history = useHistory();

    return (
        <>
            <MinusBoxIcon />
            Hello from HomePage
            <Button
                onPress={() => {
                    history.push("/profile", {
                        id: "123",
                    })
                }}
            >
                Go to Profile
            </Button>
            <ToastExample
            />
            <ScrollView
                onScroll={(evt) => {
                    console.log("Scroll: " + JSON.stringify(evt));
                }}
                style={{
                    height: "700px"
                }}
                testID="scrollview_1"
            >
                {(Array.isArray(testData) && testData.length > 0) &&
                    testData.map((item, index) => {
                        return (
                            <Card
                                key={index}
                            >
                                {index}
                            </Card>
                        )
                    })
                }
            </ScrollView>
        </>
    )
}
