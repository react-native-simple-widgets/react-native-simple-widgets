import * as React from "react";
import MenuIcon from "@mdi/svg/svg/menu.svg";
import Menu from "react-native-simple-elements/components/Menu";
import Appbar from "react-native-simple-elements/components/Appbar";

const ProfileDropdown = (props) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const openMenu = () => {
        setIsOpen(true);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <Menu
            visible={isOpen}
            onDismiss={closeMenu}
            anchor={<Appbar.Action icon={MenuIcon} onPress={openMenu} />}
        >
            <Menu.Item title="Item 1" />
            <Menu.Item title="Item 2" />
        </Menu>
    );
};

export default ProfileDropdown;
