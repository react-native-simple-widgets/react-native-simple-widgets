import * as React from 'react';
import { Button, Text, View } from "react-native";
import { storiesOf } from '@storybook/react-native';
import BottomSheet from 'react-native-simple-elements/components/BottomSheet';

storiesOf('BottomSheet', module).add('Default', () => {
    const _standardRef = React.createRef<BottomSheet>();

    return (
        <View>
            <Button
                title={"Open"}
                onPress={() => _standardRef.current?.open({})}
            />
            <BottomSheet
                ref={_standardRef}
                height={330}
            >
                <Text>Text</Text>
            </BottomSheet>
        </View>
    )
});
