import * as React from "react";
import { storiesOf } from "@storybook/react";
import { ScrollView, View, Text } from "react-native";
import ViewportVisibilitySensor from "react-native-simple-widgets/widgets/ViewportVisibilitySensor";

const items = [
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

storiesOf("ViewportVisibilitySensor", module)
    .add("Default", () => {

        const [ message, setMessage ] = React.useState("");

        return (
            <ScrollView style={{ flex: 1 }}>
                <Text>{message}</Text>
                {(Array.isArray(items) && items.length > 0) &&
                    items.map((item, index) => {
                        return (
                            <View key={index} style={{ width: "100%", height: "100px" }}>
                                <Text>Hello</Text>
                            </View>
                        )
                    })
                }
                <ViewportVisibilitySensor
                    onChange={(v, opts) => {
                        console.log("Visibility: ", v, " Options ", JSON.stringify(opts || {}))
                        setMessage(`Visible ${v}, Direction ${opts.direction}`);
                    }}
                />
            </ScrollView>
        )
    });
