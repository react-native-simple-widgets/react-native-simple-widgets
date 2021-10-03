import * as React from 'react';
import { FieldValidator } from '../../components-api/FieldValidator';
import DatePicker from './DatePicker';

const DatePickerValidator = props => {
    return <FieldValidator {...props} fieldComponent={DatePicker} />;
};

export default DatePickerValidator;
