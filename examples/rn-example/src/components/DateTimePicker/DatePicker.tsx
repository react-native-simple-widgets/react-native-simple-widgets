import * as React from 'react';
import { format, parse } from 'date-fns';
import { Platform, View } from 'react-native';
import { Keyboard, TouchableOpacity } from 'react-native';
import { testProp } from '../../utils/UITestingHelper';
import InputTextView from './InputTextView';
import DateTimePickerViewAndroid from './DateTimePickerView.android';
import DateTimePickerViewIOS from './DateTimePickerView.ios';
import { DATE_TIME_FORMAT } from '../../utils/DateTimeUtils';

const DateTimePickerView = Platform.select({
    android: DateTimePickerViewAndroid,
    ios: DateTimePickerViewIOS,
})

type Props = {
    value?: string,
    touchableWrapperProps?: Record<string, any>,
    inputAccessoryProps?: Record<string, any>,
    boxProps?: Record<string, any>,
    placeholder?: string,
    variant?: string,
    label?: string,
    renderValue?: (props?) => React.ReactNode,
    onChange?: (value?) => void,
    dateFormat?: string,
    dateTimePickerProps?: Record<string, any>,
    postIcon?: React.ReactElement,
    defaultSelect?: Record<string, any>,
    touchableWithoutFeedback?: boolean,
};

const DatePicker = ({
    placeholder,
    boxProps,
    variant,
    touchableWrapperProps,
    label,
    value,
    onChange,
    inputAccessoryProps,
    dateFormat,
    dateTimePickerProps,
    postIcon,
    defaultSelect,
    touchableWithoutFeedback,
}: Props) => {
    const [date, setDate] = React.useState(value);
    const [show, setShow] = React.useState(false);
    const mode = 'date';

    React.useEffect(() => {
        setDate(value);
    }, [value]);

    function onChangeValue(selectedDate) {
        const selectedDateStr = format(selectedDate, dateFormat);
        const currentDate = selectedDateStr || date;
        setShow(false);
        setDate(currentDate);
        onChange(currentDate);
    }

    function parseDateObjectValue() {
        if (date) {
            const dateFnsParse = parse(date, dateFormat, new Date());
            const reFormat = format(dateFnsParse, DATE_TIME_FORMAT);
            return new Date(reFormat);
        } else if (defaultSelect) {
            return defaultSelect;
        } else if (
            dateTimePickerProps &&
            (dateTimePickerProps.maximumDate || dateTimePickerProps.minimumDate)
        ) {
            return dateTimePickerProps.maximumDate || dateTimePickerProps.minimumDate;
        }
        return new Date();
    }

    return (
        <View>
            <TouchableOpacity
                {...testProp('text_box_view')}
                onPress={() => {
                    Keyboard.dismiss();
                    setShow(true);
                }}
                accessible={false}
                activeOpacity={1}
                {...touchableWrapperProps}
            >
                <InputTextView
                    variant={variant}
                    boxProps={boxProps}
                    placeholder={placeholder}
                    showPicker={show}
                    label={label}
                    value={date}
                    postIcon={postIcon}
                />
            </TouchableOpacity>
            <DateTimePickerView
                {...testProp('datetimepicker_view')}
                showPicker={show}
                defaultValue={parseDateObjectValue()}
                onChangeValue={onChangeValue}
                mode={mode}
                inputAccessoryProps={inputAccessoryProps}
                onCancel={() => setShow(false)}
                dateTimePickerProps={dateTimePickerProps}
            />
        </View>
    );
};

DatePicker.defaultProps = {
    onChange: () => { },
    value: '',
    dateFormat: DATE_TIME_FORMAT,
    dateTimePickerProps: {},
};

export default DatePicker;
