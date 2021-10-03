import * as React from "react";
import { View } from "react-native";
import Button from "react-native-simple-elements/components/Button";
import Text from "react-native-simple-elements/components/Text";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { OrderCard } from "widgets/OrderCard/OrderCard";
import Layout from "components/layout";
import calculateViewMeasure from "react-native-simple-elements/components/apis/calculateViewMeasure";
import AppContext from "components/appContext";

export default function OrderListPage(props) {

    const router = useRouter();
    const {
        wWidth,
        wHeight,
    } = React.useContext(AppContext);
    const myViewRef = React.useRef(null);
    const [ visitorVisible, setVisitorVisible ] = React.useState(false);
    const [ scrollDirection, setScrollDirection ] = React.useState(0);

    const orders = useSelector(({ orderListReducer }) => orderListReducer.orders);

    React.useEffect(() => {
        if (visitorVisible && scrollDirection === 1) {
            alert("Hello");
        }
    }, [ visitorVisible, scrollDirection ]);

    const _handleScroll = (opts) => {
        calculateViewMeasure(myViewRef, { wWidth: wWidth, wHeight: wHeight }, (isVisible) => {
            console.info("isVisible ", isVisible, "direction ", opts.direction);
            setVisitorVisible(isVisible);
            setScrollDirection(opts.direction);
        });
    };

    return (
        <Layout
            scrollCallback={_handleScroll}
        >
            <Text>Order List Page</Text>
            <Button
                onPress={() => {
                    router.back();
                }}
            >
                Go Back
            </Button>
            {(Array.isArray(orders) && orders.length > 0) &&
                orders
                    .map((order, index) => {
                        return (
                            <OrderCard
                                key={index}
                            />
                        );
                    })
            }
            <Text>Order List Page</Text>
            <Text>Order List Page</Text>
            <Text>Order List Page</Text>
            <Text>Order List Page</Text>
            <Text>Order List Page</Text>
            <Text>Order List Page</Text>
            <Text>Order List Page</Text>
            <Text>Order List Page</Text>
            <Text>Order List Page</Text>
            <Text>Order List Page</Text>
            <View ref={myViewRef}>
                <Text>{"Hello"}</Text>
            </View>
        </Layout>
    );
}
