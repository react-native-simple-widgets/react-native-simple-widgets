import * as React from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { testProp } from '../../utils/UITestingHelper';

type Props = {
    showPicker: boolean,
    onChangeValue: (value?) => void,
    onCancel: (value?) => void,
    defaultValue: Date,
    mode: any,
    dateTimePickerProps: Record<string, any>,
};

const DateTimePickerView = ({
    onChangeValue,
    onCancel,
    showPicker,
    defaultValue,
    mode,
    dateTimePickerProps,
}: Props) => {
    function onChange(event, selectedValue) {
        if (event && event.type === 'dismissed') {
            onCancel();
        } else if (selectedValue) {
            onChangeValue(selectedValue);
        }
    }

    if (!showPicker) {
        return <></>;
    }

    return (
        <DateTimePicker
            {...testProp('datetimepicker')}
            value={defaultValue || new Date()}
            mode={mode}
            display="spinner"
            onChange={onChange}
            {...dateTimePickerProps}
        />
    );
};

DateTimePickerView.defaultProps = {
    dateTimePickerProps: {},
    mode: "datetime"
};

export default DateTimePickerView;
