import * as React from "react";
import { storiesOf } from "@storybook/react";
import ConfirmDialog from "react-native-simple-widgets/widgets/Dialog/ConfirmDialog";
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
            <ConfirmDialog
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

storiesOf("Dialog", module)
    .add("Default", () => <DefaultExample />)
    .add("Playground", () => <PlaygroundExample />);
