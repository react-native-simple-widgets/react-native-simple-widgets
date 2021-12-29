import * as React from "react";
import { Animated } from "react-native";

const SimplePageTransition = (props) => {

    const {
        children,
    } = props;

    const opacityValue = React.useRef(new Animated.Value(0)).current;
    const transformValue = React.useRef(new Animated.Value(0.9)).current;

    const pageIn = () => {
        Animated.parallel([
            Animated.timing(opacityValue, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }),
            Animated.timing(transformValue, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }),
        ]).start();
    };

    const pageOut = () => {
        Animated.parallel([
            Animated.timing(opacityValue, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }),
            Animated.timing(transformValue, {
                toValue: 1.1,
                duration: 300,
                useNativeDriver: true,
            }),
        ]).start();
    };

    React.useEffect(() => {
        pageIn();

        return () => {
            pageOut();
        };
    }, []);

    return (
        <Animated.View
            style={{
                opacity: opacityValue,
                transform: [
                    { scale: transformValue },
                ]
            }}
        >
            {children}
        </Animated.View>
    );
};

export default SimplePageTransition;
