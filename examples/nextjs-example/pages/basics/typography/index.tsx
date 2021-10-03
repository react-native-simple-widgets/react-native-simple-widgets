import * as React from "react";
import Button from "react-native-simple-elements/components/Button";
import { Text } from "react-native-simple-elements/components/Typography";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { OrderCard } from "widgets/OrderCard/OrderCard";
import Layout from "components/layout";
import Head from "next/head";

export default function TypographyPage(props) {

    const router = useRouter();
    const orders = useSelector(({ orderListReducer }) => orderListReducer.orders);

    return (
        <Layout>
            <Head>Typography</Head>
            <Text>Typography Page</Text>
            <Button
                onPress={() => {
                    router.back();
                }}
            >
                Typography
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
        </Layout>
    );
}
