import * as React from "react";
import styled from "styled-components/native";
import { compose, layout, LayoutProps, position, PositionProps, space, SpaceProps } from "styled-system";

const SUPPORTED_RATIOS = {
    "1x1": "100%",
    "4x3": "75%",
    "16x9": "56.25%",
    "21x9": "42.857143%",
    "36x9": "25%",
};

const StyledBox = styled.View<LayoutProps & SpaceProps & PositionProps>(compose(
    layout,
    space,
    position,
));
StyledBox.defaultProps = {
    position: "relative",
    width: "100%",
};

const StyledBoxHolder = styled.View<LayoutProps & SpaceProps & PositionProps>(compose(
    layout,
    space,
    position,
));
StyledBoxHolder.defaultProps = {
    width: "100%",
};

const StyledBoxConttent = styled.View<LayoutProps & SpaceProps & PositionProps>(compose(
    layout,
    space,
    position,
));
StyledBoxConttent.defaultProps = {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    position: "absolute",
    top: "0",
    right: "0",
    left: "0",
};

type Props = {
    ratio?: string,
    children: React.ReactNode,
}

const defaultProps = {
    ratio: "16x9",
};

const RatioBox = (props: Props) => {

    const {
        ratio,
        children,
    } = props;

    return (
        <StyledBox
            testID="ratiobox"
            height={"auto"}
        >
            <StyledBoxHolder
                paddingTop={SUPPORTED_RATIOS[ratio] ?? SUPPORTED_RATIOS["16x9"]}
                testID="ratiobox_placeholder"
            />
            <StyledBoxConttent
                testID="ratiobox_content"
            >
                {children}
            </StyledBoxConttent>
        </StyledBox>
    );
};

RatioBox.defaultProps = defaultProps;

export default RatioBox;
