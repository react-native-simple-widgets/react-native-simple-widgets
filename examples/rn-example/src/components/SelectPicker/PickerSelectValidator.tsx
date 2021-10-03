import * as React from 'react';
import { FieldValidator } from '../../components-api/FieldValidator';
import PickerSelect from './PickerSelect';

const PickerSelectValidator = props => {
    return <FieldValidator {...props} fieldComponent={PickerSelect} />;
};

export default PickerSelectValidator;
