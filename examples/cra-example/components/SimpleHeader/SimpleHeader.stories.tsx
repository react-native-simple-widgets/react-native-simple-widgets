import * as React from "react";
import { storiesOf } from "@storybook/react";
import { text, withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import MenuIcon from "@mdi/svg/svg/menu.svg";
import HomeIcon from "@mdi/svg/svg/home.svg";
import BellIcon from "@mdi/svg/svg/bell.svg";
import SimpleHeader from "react-native-simple-widgets/widgets/SimpleHeader";
import ScrollviewViewport from "react-native-simple-elements/components/Container/ScrollviewViewport";
import { View, Text } from "react-native";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { AppbarAction } from "react-native-simple-elements/components/Appbar";
import { Title } from "react-native-simple-elements/components/Text";
import DropdownInput from "react-native-simple-widgets/widgets/DropdownInput";
import TextInput2 from "react-native-simple-elements/components/TextInput2";
import Button from "react-native-simple-elements/components/Button";

const viewportParams = {
    viewports: {
        ...INITIAL_VIEWPORTS,
    },
    defaultViewport: "responsive",
};

const iphonexlayout = {
    viewport: {
        ...viewportParams,
        defaultViewport: "iphonex",
    },
};

const onBackButtonPress = action("onBackButtonClick");

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
];

const SimpleHeaderExample = (props) => {
    const title = text("title", "Title");

    return (
        <>
            <SimpleHeader
                backButtonIcon={MenuIcon}
                onBackActionPress={onBackButtonPress}
                title={title}
                loggedInUser={{
                    firstName: "Username",
                    avatarUrl: "https://via.placeholder.com/350",
                }}
                onLoginClick={action("onLoginClick")}
                onViewProfileClick={action("onViewProfileClick")}
                onLogoutClick={action("onLogoutClick")}
            />
            <ScrollviewViewport>
                {(Array.isArray(items) && items.length > 0) &&
                    items.map((item, index) => {
                        return (
                            <View
                                key={index}
                                style={{
                                    height: 200,
                                }}
                            >
                                <Text>{`Item ${index}`}</Text>
                            </View>
                        )
                    })
                }
            </ScrollviewViewport>
        </>
    )
}

const WithContainerFluidExample = (props) => {
    const title = text("title", "Title");

    return (
        <>
            <SimpleHeader
                backButtonIcon={MenuIcon}
                onBackActionPress={onBackButtonPress}
                title={title}
                loggedInUser={{
                    firstName: "Username",
                    avatarUrl: "https://via.placeholder.com/350",
                }}
                onLoginClick={action("onLoginClick")}
                onViewProfileClick={action("onViewProfileClick")}
                onLogoutClick={action("onLogoutClick")}
                fluid={true}
            />
            <ScrollviewViewport>
                {(Array.isArray(items) && items.length > 0) &&
                    items.map((item, index) => {
                        return (
                            <View
                                key={index}
                                style={{
                                    height: 200,
                                }}
                            >
                                <Text>{`Item ${index}`}</Text>
                            </View>
                        )
                    })
                }
            </ScrollviewViewport>
        </>
    )
}

const WithLoggedInUserExample = () => {
    return(
        <>
            <SimpleHeader
                backButtonIcon={MenuIcon}
                onBackActionPress={onBackButtonPress}
                title={"with loggedInUser"}
                loggedInUser={{
                    userId: "12345",
                    firstName: "Username",
                    avatarUrl: "https://via.placeholder.com/350",
                }}
                onLoginClick={action("onLoginClick")}
                onViewProfileClick={action("onViewProfileClick")}
                onLogoutClick={action("onLogoutClick")}
            />
        </>
    )
}

const WithScrollbarSizeExample = () => {
    return(
        <>
            <SimpleHeader
                backButtonIcon={MenuIcon}
                onBackActionPress={onBackButtonPress}
                title={"with loggedInUser"}
                loggedInUser={{
                    userId: "12345",
                    firstName: "Username",
                    avatarUrl: "https://via.placeholder.com/350",
                }}
                shouldCheckScrollbarSize={true}
                onLoginClick={action("onLoginClick")}
                onLogoutClick={action("onLogoutClick")}
            />
        </>
    )
}

const WithMobileRenderExample = () => {
    return(
        <>
            <SimpleHeader
                backButtonIcon={MenuIcon}
                onBackActionPress={onBackButtonPress}
                title={"with loggedInUser"}
                subtitle={"Sub title"}
                mobileLeft={() => (
                    <>
                        <AppbarAction
                            icon={HomeIcon}
                        />
                    </>
                )}
                mobileRight={() => (
                    <>
                        <AppbarAction
                            icon={BellIcon}
                        />
                    </>
                )}
                loggedInUser={{
                    userId: "12345",
                    firstName: "Username",
                    avatarUrl: "https://via.placeholder.com/350",
                }}
                onLoginClick={action("onLoginClick")}
                onLogoutClick={action("onLogoutClick")}
            />
        </>
    )
}

const WithDesktopRenderExample = () => {
    return(
        <>
            <SimpleHeader
                backButtonIcon={MenuIcon}
                onBackActionPress={onBackButtonPress}
                title={"with loggedInUser"}
                desktopLeft={() => (
                    <>
                        <AppbarAction
                            icon={HomeIcon}
                        />
                        <Title>Your Project</Title>
                    </>
                )}
                desktopRight={() => (
                    <>
                        <AppbarAction
                            icon={BellIcon}
                        />
                    </>
                )}
                loggedInUser={{
                    userId: "12345",
                    firstName: "Username",
                    avatarUrl: "https://via.placeholder.com/350",
                }}
                onLoginClick={action("onLoginClick")}
                onLogoutClick={action("onLogoutClick")}
            />
        </>
    )
}

const WithDesktopRenderAndSearchExample = () => {
    const [ searchKey, setSearchKey ] = React.useState("");
    const [ showSearchResult, setShowSearchResult ] = React.useState(false);

    return(
        <>
            <SimpleHeader
                backButtonIcon={MenuIcon}
                onBackActionPress={onBackButtonPress}
                title={"with loggedInUser"}
                desktopLeft={() => (
                    <>
                        <AppbarAction
                            icon={HomeIcon}
                        />
                        <Title>Your Project</Title>
                    </>
                )}
                desktopContent={() => (
                    <>
                        <View
                            style={{
                                position: "relative",
                                flexDirection: "column",
                            }}
                        >
                            <DropdownInput
                                visible={showSearchResult}
                                anchor={(
                                    <TextInput2
                                        value={searchKey}
                                        onChangeText={(text) => {
                                            setSearchKey(text);
                                        }}
                                        onFocus={() => {
                                            setShowSearchResult(true);
                                        }}
                                        onKeyPress={(evt) => {
                                            if (evt.nativeEvent.key === "Enter") {
                                                setShowSearchResult(false);
                                            }
                                        }}
                                        containerStyle={{
                                            height: 42,
                                            width: 300,
                                        }}
                                    />
                                )}
                                onDismiss={() => {
                                    setShowSearchResult(false);
                                }}
                                contentStyle={{
                                    width: 280,
                                    marginHorizontal: 10,
                                    paddingHorizontal: 16,
                                }}
                            >
                                <View
                                    style={{
                                    }}
                                >
                                    <Button
                                        onPress={() => {

                                        }}
                                    >
                                        Click
                                    </Button>
                                    <Button
                                        onPress={() => {

                                        }}
                                    >
                                        Click
                                    </Button>
                                    <Text>Hello</Text>
                                </View>
                            </DropdownInput>
                        </View>
                    </>
                )}
                loggedInUser={{
                    userId: "12345",
                    firstName: "Username",
                    avatarUrl: "https://via.placeholder.com/350",
                }}
                onLoginClick={action("onLoginClick")}
                onLogoutClick={action("onLogoutClick")}
            />
        </>
    )
}

const PlaygroundExample = () => {
    return(
        <>
            <SimpleHeader
                backButtonIcon={MenuIcon}
                onBackActionPress={onBackButtonPress}
                title={"with loggedInUser"}
                loggedInUser={{
                    userId: "12345",
                    firstName: "Username",
                    avatarUrl: "https://via.placeholder.com/350",
                }}
                onLoginClick={action("onLoginClick")}
                onLogoutClick={action("onLogoutClick")}
            />
        </>
    )
}

storiesOf("SimpleHeader", module)
    .addDecorator(withKnobs)
    .add("Default", () => <SimpleHeaderExample />)
    .add("Mobile View", () => <SimpleHeaderExample />, iphonexlayout)
    .add("with Container Fluid", () => <WithContainerFluidExample />)
    .add("with loggedInUser", () => <WithLoggedInUserExample />)
    .add("with shouldCheckScrollbarSize", () => <WithScrollbarSizeExample />)
    .add("with mobile render", () => <WithMobileRenderExample />, iphonexlayout)
    .add("with desktop render", () => <WithDesktopRenderExample />)
    .add("with desktop render and search", () => <WithDesktopRenderAndSearchExample />)
    .add("Playground", () => <PlaygroundExample />);
