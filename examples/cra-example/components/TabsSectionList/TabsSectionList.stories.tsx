import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import Text from "react-native-simple-elements/components/Text";
import TabsSectionList from "react-native-simple-widgets/widgets/TabsSectionList";
import { View } from "react-native";

const SECTIONS = [
    {
        title: "Burgers",
        data: Array(5)
            .fill(0)
            .map((_) => ({
                title: "Product 1",
                description: "Product 1 desc",
                price: 10.5,
            })),
    },
    {
        title: "Pizza",
        data: Array(5)
            .fill(0)
            .map((_) => ({
                title: "Product 2",
                description: "Product 2 desc",
                price: 10.5,
            })),
    },
    {
        title: "Sushi and rolls",
        data: Array(10)
            .fill(0)
            .map((_) => ({
                title: "Product 3",
                description: "Product 3 desc",
                price: 10.5,
            })),
    },
    {
        title: "Salads",
        data: Array(10)
            .fill(0)
            .map((_) => ({
                title: "Product 4",
                description: "Product 4 desc",
                price: 10.5,
            })),
    },
    {
        title: "Dessert",
        data: Array(10)
            .fill(0)
            .map((_) => ({
                title: "Product 5",
                description: "Product 5 desc",
                price: 10.5,
            })),
    },
];

const DefaultExample = () => {

    return (
        // <View style={styles.container}>
        <View
            style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#f6f6f6",
            }}>
            <TabsSectionList
                sections={SECTIONS}
                keyExtractor={(item, index) => `${item.title}_${index}`}
                stickySectionHeadersEnabled={false}
                scrollToLocationOffset={50}
                // tabBarStyle={styles.tabBar}
                contentContainerStyle={{
                    height: "100%",
                }}
                tabBarStyle={{
                    backgroundColor: "#fff",
                    borderBottomColor: "#f4f4f4",
                    borderBottomWidth: 1,
                }}
                // ItemSeparatorComponent={() => <View style={styles.separator} />}
                ItemSeparatorComponent={() => (
                    <View
                        style={{
                            height: 0.5,
                            width: "96%",
                            alignSelf: "flex-end",
                            backgroundColor: "#eaeaea",
                        }}
                    />
                )}
                renderTab={({ title, isActive }) => (
                    <View
                        style={[
                            // styles.tabContainer,
                            { borderBottomColor: "#090909" },
                            { borderBottomWidth: isActive ? 1 : 0 },
                        ]}>
                        <Text
                            style={[
                                // styles.tabText,
                                {
                                    padding: 15,
                                    color: "#9e9e9e",
                                    fontSize: 18,
                                    fontWeight: "500",
                                },
                                { color: isActive ? "#090909" : "#9e9e9e" },
                            ]}>
                            {title}
                        </Text>
                    </View>
                )}
                renderSectionHeader={({ section }) => (
                    <View>
                        {/* <View style={styles.sectionHeaderContainer} /> */}
                        <View
                            style={{
                                height: 10,
                                backgroundColor: "#f6f6f6",
                                borderTopColor: "#f4f4f4",
                                borderTopWidth: 1,
                                borderBottomColor: "#f4f4f4",
                                borderBottomWidth: 1,
                            }}
                        />
                        {/* <Text style={styles.sectionHeaderText}>{section.title}</Text> */}
                        <Text
                            style={{
                                color: "#010101",
                                backgroundColor: "#fff",
                                fontSize: 23,
                                fontWeight: "bold",
                                paddingTop: 25,
                                paddingBottom: 5,
                                paddingHorizontal: 15,
                            }}>
                            {section.title}
                        </Text>
                    </View>
                )}
                renderItem={({ item, index }) => (
                    // <View style={styles.itemContainer}>
                    <View
                        style={{
                            paddingVertical: 20,
                            paddingHorizontal: 15,
                            backgroundColor: "#fff",
                        }}>
                        {/* <View style={styles.itemRow}> */}
                        <View style={{ flexDirection: "row" }}>
                            {/* <Text style={styles.itemTitle}>{item.title}</Text> */}
                            <Text
                                style={{
                                    flex: 1,
                                    fontSize: 20,
                                    color: "#131313",
                                }}>
                                {item.title}
                            </Text>
                            {/* <Text style={styles.itemPrice}>${item.price}</Text> */}
                            <Text
                                style={{
                                    fontSize: 18,
                                    color: "#131313",
                                }}>
                                {item.price}
                            </Text>
                        </View>
                        {/* <Text style={styles.itemDescription}>{item.description}</Text> */}
                        <Text
                            style={{
                                marginTop: 10,
                                color: "#b6b6b6",
                                fontSize: 16,
                            }}>
                            {`${item.description} ${index}`}
                        </Text>
                    </View>
                )}
            />
        </View>
    );
}

const PlaygroundExample = () => {

    return (
        // <View style={styles.container}>
        <View
            style={{
                flex: 1,
                backgroundColor: "#f6f6f6",
            }}>
            <TabsSectionList
                sections={SECTIONS}
                keyExtractor={(item) => item.title}
                stickySectionHeadersEnabled={false}
                scrollToLocationOffset={50}
                // tabBarStyle={styles.tabBar}
                tabBarStyle={{
                    backgroundColor: "#fff",
                    borderBottomColor: "#f4f4f4",
                    borderBottomWidth: 1,
                }}
                // ItemSeparatorComponent={() => <View style={styles.separator} />}
                ItemSeparatorComponent={() => (
                    <View
                        style={{
                            height: 0.5,
                            width: "96%",
                            alignSelf: "flex-end",
                            backgroundColor: "#eaeaea",
                        }}
                    />
                )}
                renderTab={({ title, isActive }) => (
                    <View
                        style={[
                            // styles.tabContainer,
                            { borderBottomColor: "#090909" },
                            { borderBottomWidth: isActive ? 1 : 0 },
                        ]}>
                        <Text
                            style={[
                                // styles.tabText,
                                {
                                    padding: 15,
                                    color: "#9e9e9e",
                                    fontSize: 18,
                                    fontWeight: "500",
                                },
                                { color: isActive ? "#090909" : "#9e9e9e" },
                            ]}>
                            {title}
                        </Text>
                    </View>
                )}
                renderSectionHeader={({ section }) => (
                    <View>
                        {/* <View style={styles.sectionHeaderContainer} /> */}
                        <View
                            style={{
                                height: 10,
                                backgroundColor: "#f6f6f6",
                                borderTopColor: "#f4f4f4",
                                borderTopWidth: 1,
                                borderBottomColor: "#f4f4f4",
                                borderBottomWidth: 1,
                            }}
                        />
                        {/* <Text style={styles.sectionHeaderText}>{section.title}</Text> */}
                        <Text
                            style={{
                                color: "#010101",
                                backgroundColor: "#fff",
                                fontSize: 23,
                                fontWeight: "bold",
                                paddingTop: 25,
                                paddingBottom: 5,
                                paddingHorizontal: 15,
                            }}>
                            {section.title}
                        </Text>
                    </View>
                )}
                renderItem={({ item }) => (
                    // <View style={styles.itemContainer}>
                    <View
                        style={{
                            paddingVertical: 20,
                            paddingHorizontal: 15,
                            backgroundColor: "#fff",
                        }}>
                        {/* <View style={styles.itemRow}> */}
                        <View style={{ flexDirection: "row" }}>
                            {/* <Text style={styles.itemTitle}>{item.title}</Text> */}
                            <Text
                                style={{
                                    flex: 1,
                                    fontSize: 20,
                                    color: "#131313",
                                }}>
                                {item.title}
                            </Text>
                            {/* <Text style={styles.itemPrice}>${item.price}</Text> */}
                            <Text
                                style={{
                                    fontSize: 18,
                                    color: "#131313",
                                }}>
                                {item.price}
                            </Text>
                        </View>
                        {/* <Text style={styles.itemDescription}>{item.description}</Text> */}
                        <Text
                            style={{
                                marginTop: 10,
                                color: "#b6b6b6",
                                fontSize: 16,
                            }}>
                            {item.description}
                        </Text>
                    </View>
                )}
            />
        </View>
    );
}

storiesOf("TabsSectionList", module)
    .addDecorator(withKnobs)
    .add("Default", () => <DefaultExample />)
    .add("Playground", () => <PlaygroundExample />);
