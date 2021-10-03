import * as React from "react";
import styled from "styled-components";
import nativeStyled from "styled-components/native";
import { ScrollView, View, Text, useWindowDimensions } from "react-native";
import { compose, layout, LayoutProps, space, SpaceProps } from "styled-system";
import { Header } from "widgets/Appbar";
import { LeftNav } from "widgets/LeftNav";
import { ProfileDropdown } from "widgets/ProfileDropdown";
import { Viewport } from "react-native-simple-elements/components/Container";
import useScrollInfo from "react-native-simple-elements/components/hooks/useScrollInfo";
import ViewportBg from "react-native-simple-elements/components/Container/ViewportBg";

const PageContainer = styled.div<LayoutProps & SpaceProps>({
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    maxWidth: "100%",
    flex: 1,
}, compose(layout, space));

PageContainer.defaultProps = {
    height: "100vh",
};

const StyledScrollView = nativeStyled(ScrollView)<LayoutProps & SpaceProps>({

}, compose(layout, space));

type Props = {
    children?: React.ReactNode,
    scrollCallback?: (opts?: Record<string, any>) => void,
};

function Layout(props: Props) {

    const scrollViewRef = React.useRef();
    const myViewRef = React.useRef(null);
    const { height: wHeight } = useWindowDimensions();

    const {
        children,
        scrollCallback,
    } = props;

    const [ scrollViewPos, setScrollViewPos ] = React.useState(0);

    useScrollInfo(myViewRef, (isVisible) => {
        // console.info("isVisible ", isVisible);
    });

    const _handleScroll = (evt) => {
        console.info("Scroll ", evt.nativeEvent.contentOffset.y);
        setScrollViewPos(evt.nativeEvent.contentOffset.y);

        if (myViewRef.current) {
            myViewRef.current.measure((x, y, width, height, pageX, pageY) => {
                // const scrollInfo = {
                //     rectTop: pageY,
                //     rectBottom: pageY + height,
                //     rectWidth: pageX + width
                // };

                // const isVisible =
                //     scrollInfo.rectBottom != 0 &&
                //     scrollInfo.rectTop >= 0 &&
                //     scrollInfo.rectBottom <= wHeight &&
                //     scrollInfo.rectWidth > 0 &&
                //     scrollInfo.rectWidth <= wWwidth;

                // console.info("isVisible ", isVisible, "direction ", evt.nativeEvent.contentOffset.y - scrollViewPos);
            });
        }

        if (typeof scrollCallback === "function") {
            scrollCallback({
                direction: evt.nativeEvent.contentOffset.y - scrollViewPos < 0 ? -1 : 1,
            });
        }
    }

    return (
        <Viewport style={{ flex: 1 }}>
            <ViewportBg
            />
            <Header>
                <ProfileDropdown
                />
            </Header>
            <LeftNav
            />
            {/* <PageContainer
                data-testid="RNSP__viewport_container"
                height={wHeight}
                paddingTop={"56px"}
                paddingLeft={[ "0", "240px" ]}
            > */}
            <StyledScrollView
                ref={scrollViewRef}
                onScroll={_handleScroll}
                height={wHeight}
                style={{
                    height: wHeight,
                }}
                paddingTop={"56px"}
                paddingLeft={"240px"}
            >
                {children}
                <View ref={myViewRef}>
                    <Text>{"Hello"}</Text>
                </View>
            </StyledScrollView>
            {/* </PageContainer> */}
        </Viewport>
    );
}

export default Layout;
