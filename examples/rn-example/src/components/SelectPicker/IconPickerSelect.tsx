import * as React from 'react';
import { Platform } from 'react-native';
import { TouchableOpacity, Image, View } from 'react-native';
import { testProp } from '../../utils/UITestingHelper';
import PickerItemsViewAndroid from './PickerItemsView.android';
import PickerItemsViewIOS from './PickerItemsView.ios';

const PickerItemsView = Platform.select({
    android: PickerItemsViewAndroid,
    ios: PickerItemsViewIOS,
});

type Props = {
    items?: any[],
    value?: string | number,
    touchableWrapperProps?: Record<string, unknown>,
    inputAccessoryProps?: Record<string, unknown>,
    boxProps?: Record<string, unknown>,
    placeholder?: string,
    variant?: string,
    onDone?: (data?) => void,
};

const IconPickerSelect = ({
    items = [],
    value,
    inputAccessoryProps,
    onDone,
    placeholder,
}: Props) => {
    const [showPicker, setShowPicker] = React.useState(false);
    const [selectedItem, setSelectedItem] = React.useState(items[0]);

    React.useEffect(() => {
        if (value) {
            setSelectedItem(items.find(item => value === item.value));
        }
    }, [items, value]);

    const togglePicker = () => {
        setShowPicker(!showPicker);
    };

    const onValueChange = (value, index) => {
        const item = items[index];
        setSelectedItem(item);
    };

    // const selectedValue = items.find(item => item.value === value);

    return (
        <View {...testProp('currency_picker')}>
            <TouchableOpacity onPress={togglePicker} accessible={false}>
                <Image source={{ uri: "" }} width={24} height={24} />
            </TouchableOpacity>
            <PickerItemsView
                // selectedValue={selectedValue}
                items={items}
                inputAccessoryProps={inputAccessoryProps}
                onValueChange={onValueChange}
                selectedItem={selectedItem || {}}
                onDonePress={({ value: selected }) => {
                    togglePicker();
                    selected
                        ? onDone(selected.value)
                        : selectedItem && onDone(selectedItem.value);
                }}
                placeholder={placeholder}
                havePlaceHolder={true}
                showPicker={showPicker}
            />
        </View>
    );
};

IconPickerSelect.defaultProps = {
    onDone: () => { },
};

export default IconPickerSelect;
