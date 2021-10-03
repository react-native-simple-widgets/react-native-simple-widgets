import * as React from "react";
import Button from "react-native-simple-elements/components/Button";
import Divider from "react-native-simple-elements/components/Divider";
import Menu from "react-native-simple-elements/components/Menu";

const ProfileDropdown = (props) => {

    const [visible, setVisible] = React.useState(false);

    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);

    const _handleMenuItemPress = () => {
        // do somthing
    };

    return (
        <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={<Button onPress={openMenu}>Show menu</Button>}
        >
            <Menu.Item onPress={() => _handleMenuItemPress()} title="Item 1" />
            <Menu.Item onPress={() => _handleMenuItemPress()} title="Item 2" />
            <Divider />
            <Menu.Item onPress={() => _handleMenuItemPress()} title="Item 3" />
        </Menu>
    );
};

export default ProfileDropdown;
