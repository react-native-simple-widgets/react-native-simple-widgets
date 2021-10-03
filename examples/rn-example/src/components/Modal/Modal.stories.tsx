import * as React from 'react';
import { View, Button, Text } from "react-native";
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Modal from 'react-native-simple-elements/components/Modal';

const ModalExample = () => {
    const [ isModalVisible, setIsModalVisible ] = React.useState(false);

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    return (
        <View>
            <Button
                title="Click"
                onPress={() => toggleModal()}
            />
            <Modal
                visible={isModalVisible}
                onClose={() => setIsModalVisible(false)}
                // onSwipeComplete={() => setIsModalVisible(false)}
                // swipeDirection="left"
            >
                <Text>Hello</Text>
                <Button title="Hide modal" onPress={toggleModal} />
            </Modal>
        </View>
    )
}

const ModalFullscreenExample = () => {
    const [ isModalVisible, setIsModalVisible ] = React.useState(false);

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    return (
        <View>
            <Button
                title="Click"
                onPress={() => toggleModal()}
            />
            <Modal
                visible={isModalVisible}
                onClose={() => setIsModalVisible(false)}
                // onSwipeComplete={() => setIsModalVisible(false)}
                // swipeDirection="left"
                // coverScreen={true}
                // style={{ margin: 0 }}
            >
                <View style={{flex: 1}}>
                    <Text>Hello</Text>
                    <Button title="Hide modal" onPress={toggleModal} />
                </View>
            </Modal>
        </View>
    )
}

storiesOf('Modal', module)
    .addDecorator(withKnobs)
    .add('Default', () => (<ModalExample />))
    .add('Default fullscreen', () => (<ModalFullscreenExample />))
