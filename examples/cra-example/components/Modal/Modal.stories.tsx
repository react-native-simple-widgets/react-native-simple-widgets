import * as React from "react";
import { storiesOf } from "@storybook/react";
import { FullscreenModal, ResponsiveModal } from "react-native-simple-widgets/widgets/Modal";
import Button from "react-native-simple-elements/components/Button";

const DefaultExample = (props) => {

    const confirmDialogRef = React.useRef(null);

    return (
        <>
            <Button
                onPress={() => {
                    confirmDialogRef.current.open();
                }}
            >
                Open
            </Button>
            <FullscreenModal
                innerRef={confirmDialogRef}
            />
        </>
    );
};

const ResponsiveModalExample = (props) => {

    const confirmDialogRef = React.useRef(null);

    return (
        <>
            <Button
                onPress={() => {
                    confirmDialogRef.current.open();
                }}
            >
                Open
            </Button>
            <ResponsiveModal
                innerRef={confirmDialogRef}
            />
        </>
    );
};

const PlaygroundExample = (props) => {

    return (
        <>
        </>
    );
};

storiesOf("Modal", module)
    .add("Default", () => <DefaultExample />)
    .add("Responsive Modal", () => <ResponsiveModalExample />)
    .add("Playground", () => <PlaygroundExample />);
