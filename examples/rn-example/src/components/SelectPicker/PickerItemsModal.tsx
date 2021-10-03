import * as React from 'react';
import {
    Modal,
    KeyboardAvoidingView,
    FlatList,
    TouchableOpacity,
    Platform,
    View,
    StyleSheet,
} from 'react-native';
import styled from 'styled-components';
import Text from "react-native-simple-elements/components/Text";
import CloseIconRaw from "@mdi/svg/svg/close.svg";
import { customStyled } from '../../utils/StyledUtils';

const styles = StyleSheet.create({
    divider: {
        borderTopWidth: 1,
        borderTopColor: '#D9DBE0',
        // backgroundColor: theme.colors.primaryWhite,
    },
    modalViewTop: {
        flex: 1,
        // backgroundColor: theme.colors.darkBlack,
        opacity: 0.8,
    },
    selection: {
        minHeight: 250,
        maxHeight: 300,
    },
    sectionList: {
        paddingTop: 14,
        // backgroundColor: theme.colors.primaryWhite,
    },
    itemText: {
        height: 48,
        fontSize: 16,
        lineHeight: 20,
    },
    highlightItem: {
        fontWeight: '500',
        // color: theme.colors.secondary,
    },
    itemRightText: {
        height: 48,
        fontSize: 16,
        lineHeight: 20,
        // color: theme.colors.greyDark,
    },
    keyboardAvoidingView: {
        // backgroundColor: theme.colors.greyDark,
    },
    title: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        height: 56,
        paddingLeft: 16,
        paddingRight: 16,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        // backgroundColor: theme.colors.primaryWhite,
    },
});

const CloseIcon = styled(CloseIconRaw)`
    width: 24px;
    height: 24px;
    color: ${({ theme }) => theme.colors.greyDark};
    margin-left: 23px;
`;

const Item = customStyled(View, {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingX: 16,
});

const getIndexFromItem = (selectedItem, items = []) =>
    items.indexOf(items.find(item => item.value === selectedItem.value));

const renderItem = (onSelect, selectedValue, selectedIndex) => item => {
    const { value, label, rightLabel } = item;
    const isSelected = selectedValue === value;
    const handleSelect = () => {
        onSelect(item, selectedIndex);
    };

    return (
        <TouchableOpacity onPress={handleSelect}>
            <Item>
                <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={[styles.itemText, isSelected && styles.highlightItem]}
                >
                    {label}
                </Text>
                {Boolean(rightLabel) && (
                    <Text style={styles.itemRightText}>{rightLabel}</Text>
                )}
            </Item>
        </TouchableOpacity>
    );
};

type Props = {
    items?: any[],
    onValueChange?: (value?, index?) => void,
    onClose?: (value?) => void,
    selectedItem?: Record<string, unknown>,
    title?: string,
    showPicker?: boolean,
};

const PickerItemsModal = ({
    items = [],
    onValueChange,
    onClose,
    selectedItem,
    showPicker,
    title,
}: Props) => {
    const handleRenderItem = ({ item }) => {
        return renderItem(
            onValueChange,
            selectedItem ? selectedItem.value : null,
            getIndexFromItem(item, items)
        )({ value: item.value, label: item.label, rightLabel: item.rightLabel });
    };
    return (
        <Modal
            animationType="slide"
            visible={showPicker}
            transparent
            onRequestClose={onClose}
        >
            <TouchableOpacity
                style={styles.modalViewTop}
                onPress={onClose}
                accessible={false}
            />
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.keyboardAvoidingView}
            >
                <View style={styles.selection}>
                    <View style={styles.title}>
                        <Text>{title}</Text>
                        <CloseIcon onPress={onClose} size={24} name="close" />
                    </View>
                    <View style={styles.divider} />
                    <FlatList
                        style={styles.sectionList}
                        data={items ? items : []}
                        renderItem={handleRenderItem}
                        keyExtractor={(item, index) => `${item}_${index}`}
                    />
                </View>
            </KeyboardAvoidingView>
        </Modal>
    );
};

export default PickerItemsModal;
