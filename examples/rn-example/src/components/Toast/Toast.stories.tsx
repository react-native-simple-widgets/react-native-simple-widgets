import * as React from 'react';
import { Button } from "react-native";
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { useToast } from 'react-native-simple-elements/components/Toast';

const onPressFn = action("onPress");

const ToastExample = () => {
    const { toast } = useToast();

    return (
        <>
            <Button
                title="Toast"
                onPress={() => {
                    onPressFn();
                    toast({ message: "Hello" })
                }}
            />
        </>
    )
}

storiesOf('Toast', module)
    .addDecorator(withKnobs)
    .add('Default', () => (<ToastExample />))
