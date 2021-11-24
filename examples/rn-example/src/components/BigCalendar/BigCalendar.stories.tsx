import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import BigCalendar from "react-native-simple-widgets/widgets/BigCalendar";

const events = [
    {
        title: "Meeting",
        start: new Date(2021, 9, 3, 10, 0),
        end: new Date(2021, 9, 3, 10, 30),
    },
    {
        title: "Coffee break",
        start: new Date(2020, 1, 11, 15, 45),
        end: new Date(2020, 1, 11, 16, 30),
    },
];

const DefaultExample = (props) => {
    return (
        <>
            <BigCalendar events={events} height={600} />
        </>
    );
};

const PlaygroundExample = (props) => {
    return <></>;
};

storiesOf("BigCalendar", module)
    .add("Default", () => <DefaultExample />)
    .add("Playground", () => <PlaygroundExample />);
