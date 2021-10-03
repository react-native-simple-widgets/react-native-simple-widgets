import * as React from "react";
import { FlexResponsiveContainer } from "react-native-simple-elements/components/Container";
import Modal from "react-native-simple-elements/components/Modal";
import Surface from "react-native-simple-elements/components/Surface";
import Text from "react-native-simple-elements/components/Text";

const ResponsiveModal = ({
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
            <Modal
                visible={visible}
                onDismiss={_handleDismiss}
            >
                <FlexResponsiveContainer>
                    <Surface>
                        <Text>Hello</Text>
                    </Surface>
                </FlexResponsiveContainer>
            </Modal>
        </>
    );
};

export default ResponsiveModal;
