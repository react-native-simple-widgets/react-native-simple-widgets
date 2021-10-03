import * as React from "react";
import styled from "styled-components";
import { space, SpaceProps } from "styled-system";
import { useScrollbarSize } from "react-scrollbar-size";
import HomeIcon from "@mdi/svg/svg/home.svg";
import Appbar from "react-native-simple-elements/components/Appbar";
import ProfileDropdown from "./ProfileDropdown";
import AppContext from "components/appContext";

const HeaderContainer = styled.div<SpaceProps>({
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    zIndex: 3,
}, space);

const ContentContainer = styled.div({
    marginRight: "auto",
});

type Props = {
    children?: React.ReactNode;
};

export default function Header(props: Props) {
    const { children } = props;
    const { leftnavIsOpen, setLeftnavIsOpen } = React.useContext(AppContext);

    const { width } = useScrollbarSize();

    const _handleBackActionPress = () => {
        setLeftnavIsOpen(!leftnavIsOpen);
    };

    return (
        <HeaderContainer
            marginRight={[ "0", width ]}
        >
            <Appbar.Header>
                <Appbar.BackAction onPress={_handleBackActionPress} />
                <ContentContainer>{children}</ContentContainer>
                <Appbar.Action icon={HomeIcon} />
                <ProfileDropdown />
            </Appbar.Header>
        </HeaderContainer>
    );
}
