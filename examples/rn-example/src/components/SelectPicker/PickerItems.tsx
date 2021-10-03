import * as React from 'react';
import { Picker } from '@react-native-picker/picker';
import { testProp } from '../../utils/UITestingHelper';

type Props = {
    items?: any[],
    [key: string]: any,
};

const PickerItems = ({ items, ...restProps }: Props) => (
    <Picker {...restProps}>
        {items.map((item, index) => (
            <Picker.Item
                {...item}
                key={index}
                {...testProp(`item_${item.label}`)}
            />
        ))}
    </Picker>
);

export default PickerItems;
