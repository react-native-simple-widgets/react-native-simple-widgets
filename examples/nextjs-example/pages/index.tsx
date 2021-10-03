import * as React from "react";
import styled from "styled-components";
import { Text } from "react-native-simple-elements/components/Typography";
import * as Avatar from "react-native-simple-elements/components/Avatar";
import FolderIcon from "@mdi/svg/svg/folder.svg";
import Button from "react-native-simple-elements/components/Button";
import { useRouter } from "next/router";
import Layout from "components/layout";
import IconButton from "react-native-simple-elements/components/IconButton";
import Image from "react-native-simple-elements/components/Image";
import ImageButton from "react-native-simple-elements/components/ImageButton";
import SegmentedControl from '@react-native-community/segmented-control';
import Modal from "react-native-simple-elements/components/Modal";

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

function Home() {
    const router = useRouter();
    const [ selectedSegmentIndex, setSelectedSegmentIndex ] = React.useState(-1);

    const [ isModalOpen, setIsModalOpen ] = React.useState(false);

    return (
        <Layout>
            <Title>My page</Title>
            <Text>Text</Text>
            <Avatar.Icon size={24} icon={FolderIcon} />
            <Button
                onPress={() => {
                    router.push({
                        pathname: "orders"
                    });
                }}
            >
                Go to orders
            </Button>
            <IconButton
                icon={FolderIcon}
                // color={Colors.red500}
                size={20}
                onPress={() => console.info("Pressed")}
            />
            <Button
                onPress={() => {
                    setIsModalOpen(true);
                    // router.push("/profile");
                }}
            >
                Go to profile
            </Button>
            <SegmentedControl
                values={['One', 'Two']}
                selectedIndex={selectedSegmentIndex}
                onChange={(event) => {
                    setSelectedSegmentIndex(event.nativeEvent.selectedSegmentIndex);
                }}
            />
            <Modal
                visible={isModalOpen}
            >
                <Text>Hello</Text>
            </Modal>
            <Image
                source={{ uri: "https://via.placeholder.com/350x150.png" }}
                style={{ width: "300px", height: "150px" }}
            />
            <ImageButton
                source={{ uri: "https://via.placeholder.com/350x150.png" }}
                size={300}
                onPress={() => alert("Hello")}
            />
            <ImageButton
                source={{ uri: "https://via.placeholder.com/350x150.png" }}
                size={300}
                onPress={() => alert("Hello")}
            />
        </Layout>
    );
}

export default Home;
