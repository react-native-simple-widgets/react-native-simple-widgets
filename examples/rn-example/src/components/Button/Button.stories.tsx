import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button from 'react-native-simple-elements/components/Button';

const onPressFn = action("onPress");

storiesOf('Button', module)
    .addDecorator(withKnobs)
    .add('Default', () => {
        const title = text("title", "Text");
        return (
            <Button
                onPress={onPressFn}
            >
                {title}
            </Button>
        )
    })
    .add('Primary', () => {
        const title = text("title", "Text");
        const mode = select('mode', ['text', 'outlined', 'contained'], "text");
        const dark = boolean('dark', false);

        return (
            <Button
                dark={dark}
                mode={mode}
                onPress={onPressFn}
            >
                {title}
            </Button>
        )
    })
