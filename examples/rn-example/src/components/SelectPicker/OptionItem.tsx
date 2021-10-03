import * as React from 'react';
import RadioButton from 'react-native-simple-elements/components/RadioButton';
import { testProp, toSnakeCase } from '../../utils/UITestingHelper';

export const ITEM_HEIGHT = 52;

type Props = {
    item?: Record<string, any>,
    index?: number,
    onValueChange?: (value?, index?, item?) => void,
    isSelected?: boolean,
};

const OptionItem = ({
    item = {},
    index,
    onValueChange,
    isSelected = false,
}: Props) => {
    const [selected, setSelected] = React.useState(false);

    const handleRadioChange = React.useCallback(
        selectedItem => {
            setSelected(true);
            onValueChange(selectedItem, index, setSelected);
        },
        [index, onValueChange]
    );

    React.useEffect(() => {
        if (isSelected) {
            handleRadioChange(item);
        }
    }, [handleRadioChange, isSelected, item]);

    return (
        <RadioButton
            // isVertical={true}
            // id={item.value}
            value={item.value}
            // text={item.label}
            // isSelected={selected}
            status={selected ? "checked" : "unchecked"}
            // onChange={() => handleRadioChange(item)}
            // containerProps={{
            //     paddingY: 14,
            //     marginX: 16,
            //     background: 'white',
            //     height: ITEM_HEIGHT,
            // }}
            // textProps={{
            //     fontSize: 16,
            //     lineHeight: 24,
            //     background: 'white',
            // }}
            {...testProp(`radio_${toSnakeCase(item.label)}`)}
        />
    );
};

export default OptionItem;
