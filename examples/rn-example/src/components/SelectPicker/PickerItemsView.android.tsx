import * as React from 'react';
import {
    StyleSheet,
    Modal,
    FlatList,
    SafeAreaView,
    TouchableOpacity,
    Dimensions,
    View,
} from 'react-native';
import { Row } from "react-native-simple-elements/components/Container";
import Text from "react-native-simple-elements/components/Text";
import { testProp } from '../../utils/UITestingHelper';
import OptionItem, { ITEM_HEIGHT } from './OptionItem';
import { customStyled } from '../../utils/StyledUtils';
// import { ThemeContext } from 'styled-components';

const { height: windowHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
    flatList: {
        backgroundColor: 'white',
        height: windowHeight - 194,
    },
    doneTouch: {
        backgroundColor: 'white',
    },
});

const Header = customStyled(Text, {
    lineHeight: '24px',
    background: 'white',
});

const DoneText = customStyled(Text, {
    background: 'transparent',
    color: 'secondary',
    fontWeight: 500,
});

const BottomBox = customStyled(Row, {
    height: 51,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingX: 4,
    border: '1px solid',
    borderColor: 'grey',
    background: 'white',
    opacity: 1,
});

type Props = {
    onValueChange?: (value?, index?) => void,
    items?: any[],
    selectedItem?: Record<string, unknown>,
    inputAccessoryProps?: any,
    showPicker?: boolean,
    onDonePress?: (evt?) => void,
    placeholder?: string,
    havePlaceHolder?: boolean,
};

const PickerItemsView = ({
    items = [],
    showPicker,
    placeholder,
    onValueChange,
    inputAccessoryProps = {} as any,
    onDonePress,
    selectedItem = {} as any,
}: Props) => {
    // const theme = React.useContext(ThemeContext);
    let currentSelectedRef;
    let currentSelectedItem: any = {};
    const handleRadioChange = (selected, index, setSelectedRef) => {
        currentSelectedItem = { value: selected, selectedIndex: index + 1 };
        if (setSelectedRef !== currentSelectedRef) {
            currentSelectedRef && currentSelectedRef(false);
            currentSelectedRef = setSelectedRef;
        }
    };

    const handleDone = () => {
        onDonePress({
            value: currentSelectedItem.value,
            index: currentSelectedItem.selectedIndex,
        });
        if (currentSelectedItem.value) {
            onValueChange(
                currentSelectedItem.value,
                currentSelectedItem.selectedIndex
            );
        }
    };

    let initIndex = 0;
    if (selectedItem) {
        initIndex = items.findIndex(({ value }) => value === selectedItem.value);
    }

    const getItemLayout = (data, index) => {
        return {
            length: ITEM_HEIGHT,
            offset: ITEM_HEIGHT * index,
            index,
        };
    };

    return (
        <Modal
            transparent={true}
            visible={showPicker}
            animationType="slide"
            {...testProp('modal')}
        >
            <SafeAreaView {...testProp('picker')}>
                <View>
                    <View>
                        <Header
                            padding={24}
                            background="white"
                            {...testProp('placeholder')}
                        >
                            {inputAccessoryProps.headerText}
                            {placeholder}
                        </Header>
                        <FlatList
                            getItemLayout={getItemLayout}
                            initialScrollIndex={initIndex - 1}
                            data={placeholder ? items.slice(1, items.length) : items}
                            style={styles.flatList}
                            keyExtractor={item => item.value}
                            initialNumToRender={15}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item, index }) => (
                                <OptionItem
                                    item={item}
                                    index={index}
                                    isSelected={Boolean(
                                        item.value &&
                                        selectedItem.value &&
                                        selectedItem.value === item.value
                                    )}
                                    onValueChange={handleRadioChange}
                                />
                            )}
                        />
                        <BottomBox>
                            <View />
                            <TouchableOpacity
                                onPress={handleDone}
                                accessible={false}
                                style={styles.doneTouch}
                                {...testProp('done_btn')}
                            >
                                <View>
                                    <DoneText>
                                        {inputAccessoryProps.doneText.toUpperCase()}
                                    </DoneText>
                                </View>
                            </TouchableOpacity>
                        </BottomBox>
                    </View>
                </View>
            </SafeAreaView>
        </Modal>
    );
};

export default PickerItemsView;
