import * as React from "react";
import { Dimensions } from "react-native";
import BottomSheet from "react-native-simple-elements/components/BottomSheet";
import Surface from "react-native-simple-elements/components/Surface";
import Text from "react-native-simple-elements/components/Text";

const WindowHeight = Dimensions.get("window").height;

const FullscreenModal = ({
    innerRef,
}) => {

    const [ visible, setVisible ] = React.useState(false);

    React.useImperativeHandle(innerRef, () => ({
        open: () => {
            setVisible(true);
        },
        close: () => {
            setVisible(false);
        },
    }));

    const _handleDismiss = () => {
        innerRef.current.close();
    };

    return (
        <>
            <BottomSheet
                visible={visible}
                onDismiss={_handleDismiss}
            >
                <Surface
                    style={{
                        height: WindowHeight,
                    }}
                >
                    <Text>Hello</Text>
                </Surface>
            </BottomSheet>
        </>
    );
};

export default FullscreenModal;
