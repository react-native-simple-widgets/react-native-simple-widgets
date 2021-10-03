import * as React from "react";
import { useWindowDimensions } from "react-native";
import styled from "styled-components/native";
import { layout, LayoutProps, space, SpaceProps } from "styled-system";
import { Viewport } from "react-native-simple-elements/components/Container";

const DefaultScrollview = styled.ScrollView<LayoutProps & SpaceProps>(
    layout,
    space,
);

DefaultScrollview.defaultProps = {
    overflowY: "scroll",
};

function ScrollviewViewport(props) {
    const { height } = useWindowDimensions();
    const {
        children,
        paddingTop,
        ...rest
    } = props;

    return (
        <Viewport
            {...rest}
            paddingLeft={[ "0", "240px"]}
        >
            <DefaultScrollview
                height={height}
                paddingTop={paddingTop}
            >
                {children}
            </DefaultScrollview>
        </Viewport>
    );
}

ScrollviewViewport.defaultProps = {
    paddingTop: 0,
};

export default ScrollviewViewport;
