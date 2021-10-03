import * as React from "react";
import { RouteProp } from '@react-navigation/native';
import { useParams } from "react-router-dom";
import { RootStackParamList } from "src/types";
import { ScrollviewViewport } from "react-native-simple-elements/components/Container";
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

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Profile'>;

type Props = {
    route: ProfileScreenRouteProp;
};

export function ProfilePage(props: Props) {

    const {
        route,
    } = props;
    const {
        params,
    } = useParams();

    return (
        <>
            <ScrollviewViewport
                scrollEnabled={true}
                onScroll={(evt) => {
                    console.log(evt);
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
            </ScrollviewViewport>
        </>
    )
}
