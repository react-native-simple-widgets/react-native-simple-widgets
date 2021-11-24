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
import AuthorizedUserMenu from "react-native-simple-widgets/widgets/AuthorizedUserMenu";
import SettingsIcon from "@mdi/svg/svg/cog.svg";
import AccountIcon from "@mdi/svg/svg/account.svg";
import IconButton from "react-native-simple-elements/components/IconButton";
import { ThemeContext } from "styled-components";

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

    const { colors } = React.useContext(ThemeContext);

    return (
        <>
            <SimpleHeader
                backButtonIcon={MenuIcon}
                onBackActionPress={onBackButtonPress}
                title={title}
                desktopLeft={() => (
                    <>
                        <IconButton
                            icon={HomeIcon}
                            color={colors.white}
                        />
                        <Title style={{ color: colors.white }}>SimpleHeader</Title>
                    </>
                )}
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
                        );
                    })
                }
            </ScrollviewViewport>
        </>
    );
};

const WithContainerFluidExample = (props) => {
    const title = text("title", "Title");

    const { colors } = React.useContext(ThemeContext);

    return (
        <>
            <SimpleHeader
                backButtonIcon={MenuIcon}
                onBackActionPress={onBackButtonPress}
                title={title}
                fluid={true}
                desktopLeft={() => (
                    <>
                        <IconButton
                            icon={HomeIcon}
                            color={colors.white}
                        />
                        <Title style={{ color: colors.white }}>SimpleHeader</Title>
                    </>
                )}
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
                        );
                    })
                }
            </ScrollviewViewport>
        </>
    );
};

const WithLoggedInUserExample = () => {

    const { colors } = React.useContext(ThemeContext);

    return(
        <>
            <SimpleHeader
                backButtonIcon={MenuIcon}
                onBackActionPress={onBackButtonPress}
                title={"with loggedInUser"}
                desktopLeft={() => (
                    <>
                        <IconButton
                            icon={HomeIcon}
                            color={colors.white}
                        />
                        <Title style={{ color: colors.white }}>SimpleHeader</Title>
                    </>
                )}
                desktopRight={() => (
                    <View
                        style={{
                            justifyContent: "center",
                        }}
                    >
                        <AuthorizedUserMenu
                            circle={true}
                            avatarSize={36}
                            avatarStyle={{
                                backgroundColor: colors.white,
                            }}
                            loggedInUser={{
                                userId: "123",
                                firstName: "Username",
                                fullName: "Username",
                                // avatarUrl: "https://via.placeholder.com/350",
                            }}
                            onViewProfileClick={action("onViewProfileClick")}
                            onLogoutClick={action("onLogoutClick")}
                            userMenuItems={[
                                {
                                    label: "Profile",
                                    icon: AccountIcon,
                                    url: "/profile",
                                },
                                {
                                    label: "Settings",
                                    icon: SettingsIcon,
                                    url: "/settings",
                                },
                            ]}
                            onUserMenuItemPress={() => {
                                alert("MenuItem pressed");
                            }}
                        />
                    </View>
                )}
            />
        </>
    );
};

const WithScrollbarSizeExample = () => {

    const { colors } = React.useContext(ThemeContext);

    return(
        <>
            <SimpleHeader
                backButtonIcon={MenuIcon}
                onBackActionPress={onBackButtonPress}
                title={"with loggedInUser"}
                desktopLeft={() => (
                    <>
                        <IconButton
                            icon={HomeIcon}
                            color={colors.white}
                        />
                        <Title style={{ color: colors.white }}>SimpleHeader</Title>
                    </>
                )}
                shouldCheckScrollbarSize={true}
            />
        </>
    );
};

const WithMobileRenderExample = () => {

    const { colors } = React.useContext(ThemeContext);

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
                        <AuthorizedUserMenu
                            circle={true}
                            avatarSize={36}
                            avatarStyle={{
                                backgroundColor: colors.white,
                            }}
                            loggedInUser={{
                                userId: "123",
                                firstName: "Username",
                                fullName: "Username",
                                avatarUrl: "https://via.placeholder.com/350",
                            }}
                            onViewProfileClick={action("onViewProfileClick")}
                            onLogoutClick={action("onLogoutClick")}
                            userMenuItems={[
                                {
                                    label: "Profile",
                                    icon: AccountIcon,
                                    url: "/profile",
                                },
                                {
                                    label: "Settings",
                                    icon: SettingsIcon,
                                    url: "/settings",
                                },
                            ]}
                            onUserMenuItemPress={() => {
                                alert("MenuItem pressed");
                            }}
                        />
                    </>
                )}
            />
        </>
    );
};

const WithDesktopRenderExample = () => {

    const { colors } = React.useContext(ThemeContext);

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
                        <AuthorizedUserMenu
                            circle={true}
                            avatarSize={36}
                            avatarStyle={{
                                backgroundColor: colors.white,
                            }}
                            loggedInUser={{
                                userId: "123",
                                firstName: "Username",
                                fullName: "Username",
                                avatarUrl: "https://via.placeholder.com/350",
                            }}
                            onViewProfileClick={action("onViewProfileClick")}
                            onLogoutClick={action("onLogoutClick")}
                            userMenuItems={[
                                {
                                    label: "Profile",
                                    icon: AccountIcon,
                                    url: "/profile",
                                },
                                {
                                    label: "Settings",
                                    icon: SettingsIcon,
                                    url: "/settings",
                                },
                            ]}
                            onUserMenuItemPress={() => {
                                alert("MenuItem pressed");
                            }}
                        />
                    </>
                )}
            />
        </>
    );
};

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
                                            // do something
                                        }}
                                    >
                                        Click
                                    </Button>
                                    <Button
                                        onPress={() => {
                                            // do something
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
            />
        </>
    );
};

const PlaygroundExample = () => {

    const { colors } = React.useContext(ThemeContext);

    return(
        <>
            <SimpleHeader
                backButtonIcon={MenuIcon}
                onBackActionPress={onBackButtonPress}
                title={"with loggedInUser"}
                desktopLeft={() => (
                    <>
                        <IconButton
                            icon={HomeIcon}
                            color={colors.white}
                        />
                        <Title style={{ color: colors.white }}>SimpleHeader</Title>
                    </>
                )}
            />
        </>
    );
};

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
