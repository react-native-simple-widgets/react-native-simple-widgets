import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import { withKnobs } from "@storybook/addon-knobs";
import { ScrollableTab } from "react-native-simple-widgets/widgets/Tab";

storiesOf("Tab", module)
    .addDecorator(withKnobs)
    .add("Default", () => {
        return(
            <ScrollableTab
                options={[
                    {
                        label: "Home home 0",
                    },
                    {
                        label: "Home home 0",
                    },
                    {
                        label: "Home home 0",
                    },
                    {
                        label: "Home home 0",
                    },
                    {
                        label: "Home home 0",
                    },
                ]}
            />
        )
    })
    .add("ScrollableTab", () => {
        return(
            <ScrollableTab
                options={[
                    {
                        label: "Home home 0",
                    },
                    {
                        label: "Home home 0",
                    },
                    {
                        label: "Home home 0",
                    },
                    {
                        label: "Home home 0",
                    },
                    {
                        label: "Home home 0",
                    },
                ]}
            />
        )
    })
    .add("Playground", () => {
        return(
            <ScrollableTab
                options={[
                    {
                        label: "Home home 0",
                    },
                    {
                        label: "Home home 0",
                    },
                    {
                        label: "Home home 0",
                    },
                    {
                        label: "Home home 0",
                    },
                    {
                        label: "Home home 0",
                    },
                ]}
            />
        )
    });
