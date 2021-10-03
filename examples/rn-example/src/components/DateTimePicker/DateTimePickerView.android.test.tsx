import * as React from 'react';
import { shallow } from 'enzyme';
import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePickerView from './DateTimePickerView.android';

describe('DateTimePickerView Android', () => {
    const mockOnChange = jest.fn();
    const mockOnCancel = jest.fn();
    const value = new Date('2020-01-30');
    const component = shallow(
        <DateTimePickerView
            showPicker
            // onChange={mockOnChange}
            onChangeValue={mockOnChange}
            onCancel={mockOnCancel}
            defaultValue={value}
        />
    );

    it('should render had data state match to snapshot', () => {
        expect(component).toMatchSnapshot();
    });

    it('on change value', () => {
        const changeValue = new Date('1999-01-20');
        component
            .find(DateTimePicker)
            .at(0)
            .prop('onChange')({}, changeValue);
        expect(mockOnChange.mock.calls[0][0]).toEqual(changeValue);
    });

    it('on press cancel', () => {
        component
            .find(DateTimePicker)
            .at(0)
            .prop('onChange')({ type: 'dismissed' });
        expect(mockOnCancel).toHaveBeenCalled();
    });
});
