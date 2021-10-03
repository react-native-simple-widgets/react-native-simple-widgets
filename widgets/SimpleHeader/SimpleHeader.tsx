import * as React from "react";
import styled from "styled-components/native";
import useScrollbarSize from "react-scrollbar-size";
import {
    AppbarAction,
    AppbarBackAction,
    AppbarContent,
    AppbarHeader,
} from "react-native-simple-elements/components/Appbar";
import useScreenSize from "react-native-simple-elements/components/Container/utils/useScreenSize";
import AuthorizedUserMenu from "../AuthorizedUserMenu";
import { MenuItemProps } from "../AuthorizedUserMenu/AuthorizedUserMenu";
import HomeIcon from "@mdi/svg/svg/home.svg";
import AccountIcon from "@mdi/svg/svg/account.svg";
import { View } from "react-native";

const HeaderContainer = styled.View({
    zIndex: 3,
});

const DesktopLeftContentWrapper = styled.View({
    width: 240,
    flexDirection: "row",
    alignItems: "center",
});

type Props = {
    title?: string,
    subtitle?: string,
    showBackIcon?: boolean,
    backButtonIcon?: React.ReactElement,
    mobileLeft?: (props?) => React.ReactNode,
    mobileContent?: (props?) => React.ReactNode,
    mobileRight?: (props?) => React.ReactNode,
    desktopLeft?: (props?) => React.ReactNode;
    desktopContent?: (props?) => React.ReactNode;
    desktopRight?: (props?) => React.ReactNode,
    onHomeActionPress?: () => void,
    onBackActionPress?: () => void,
    loggedInUser?: Record<string, any>;
    isUserIconCircle?: boolean,
    shouldCheckScrollbarSize?: boolean,
    onLoginClick?: () => void,
    onViewProfileClick?: () => void,
    onLogoutClick?: () => void,
    userMenuItems?: MenuItemProps[],
    onUserMenuItemPress?: (item?) => void,
};

const defaultProps = {
    isUserIconCircle: true,
    shouldCheckScrollbarSize: false,
};

const SimpleHeader = (props: Props) => {

    const {
        title,
        subtitle,
        mobileLeft,
        mobileContent,
        mobileRight,
        desktopLeft,
        desktopContent,
        desktopRight,
        showBackIcon,
        backButtonIcon,
        onHomeActionPress,
        onBackActionPress,
        loggedInUser,
        isUserIconCircle,
        shouldCheckScrollbarSize,
        onLoginClick,
        onViewProfileClick,
        onLogoutClick,
        userMenuItems,
        onUserMenuItemPress,
    } = props;

    const { isMobileView } = useScreenSize();
    const { width: scrollbarSize } = useScrollbarSize();

    const _handleBackActionPress = () => {
        if (showBackIcon) {
            if (typeof onBackActionPress === "function") {
                onBackActionPress();
            }
        } else {
            if (typeof onHomeActionPress === "function") {
                onHomeActionPress();
            }
        }
    };

    const _handleLoginClick = () => {
        if (typeof onLoginClick === "function") {
            onLoginClick();
        }
    };

    return (
        <HeaderContainer
            style={{
                marginRight: shouldCheckScrollbarSize ? scrollbarSize || 0 : 0,
            }}
        >
            <AppbarHeader>
                {isMobileView ?
                    <>
                        {mobileLeft ? mobileLeft() :
                            <AppbarBackAction
                                icon={showBackIcon ? backButtonIcon : HomeIcon}
                                onPress={_handleBackActionPress}
                            />
                        }
                    </>
                    :
                    null
                }
                {!isMobileView && desktopLeft ?
                    <>
                        <DesktopLeftContentWrapper>
                            {desktopLeft ? desktopLeft() : null}
                        </DesktopLeftContentWrapper>
                    </>
                    :
                    null
                }
                {isMobileView ?
                    <>
                        {mobileContent ? mobileContent() :
                            <AppbarContent
                                title={title}
                                subtitle={subtitle}
                            />
                        }
                    </>
                    :
                    null
                }
                {!isMobileView ?
                    <View
                        style={{
                            flex: 1,
                            flexDirection: "row",
                            alignItems: "center",
                        }}
                    >
                        {desktopContent ? desktopContent() : null}
                    </View>
                    :
                    null
                }
                {isMobileView && mobileRight ? mobileRight() : null}
                {!isMobileView && desktopRight ? desktopRight() : null}
                {loggedInUser?.userId ?
                    <AuthorizedUserMenu
                        circle={isUserIconCircle}
                        loggedInUser={loggedInUser}
                        onViewProfileClick={onViewProfileClick}
                        onLogoutClick={onLogoutClick}
                        userMenuItems={userMenuItems}
                        onUserMenuItemPress={onUserMenuItemPress}
                    /> :
                    <AppbarAction
                        icon={AccountIcon}
                        onPress={_handleLoginClick}
                    />
                }
            </AppbarHeader>
        </HeaderContainer>
    );
};

SimpleHeader.defaultProps = defaultProps;

export default SimpleHeader;
