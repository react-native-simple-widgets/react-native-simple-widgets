import * as React from "react";
import Menu from "react-native-simple-elements/components/Menu";
import ImageButton from "react-native-simple-elements/components/ImageButton";
import Divider from "react-native-simple-elements/components/Divider";

export type MenuItemProps = {
    label: string,
    icon?: React.ReactElement,
    url?: string,
};

type Props = {
    circle?: boolean,
    loggedInUser?: Record<string, any>,
    onViewProfileClick?: () => void,
    onLogoutClick?: () => void,
    userMenuItems?: MenuItemProps[],
    onUserMenuItemPress?: (item?) => void,
}

const defaultProps = {
    circle: false,
};

const AuthorizedUserMenu = ({
    loggedInUser,
    circle,
    onViewProfileClick,
    onLogoutClick,
    userMenuItems,
    onUserMenuItemPress,
}: Props) => {

    const {
        firstName,
        avatarUrl,
    } = loggedInUser || {} as any;

    const [ isOpen, setIsOpen ] = React.useState(false);

    const openMenu = () => {
        setIsOpen(true);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const _handleMenuItemPress = (item) => {
        if (onUserMenuItemPress) {
            onUserMenuItemPress(item);
        }
    };

    return (
        <Menu
            visible={isOpen}
            onDismiss={closeMenu}
            anchor={
                <ImageButton
                    source={{ uri: avatarUrl }}
                    circle={circle}
                    onPress={openMenu}
                />
            }
        >
            {loggedInUser?.userId &&
                <Menu.Item
                    title={firstName || ""}
                    titleStyle={{
                        textAlign: "center",
                    }}
                    onPress={() => {
                        if (typeof onViewProfileClick === "function") {
                            onViewProfileClick();
                        }
                    }}
                />
            }
            <Divider
            />
            {Array.isArray(userMenuItems) && userMenuItems.length > 0 ?
                userMenuItems.map((item, index) => {
                    return (
                        <Menu.Item
                            key={index}
                            title={item.label}
                            icon={item.icon}
                            onPress={() => _handleMenuItemPress(item)}
                        />
                    );
                })
                : null
            }
            <Divider
            />
            {loggedInUser?.userId &&
                <Menu.Item
                    title="Logout"
                    onPress={() => {
                        if (typeof onLogoutClick === "function") {
                            onLogoutClick();
                        }
                    }}
                />
            }
        </Menu>
    );
};

AuthorizedUserMenu.defaultProps = defaultProps;

export default AuthorizedUserMenu;
