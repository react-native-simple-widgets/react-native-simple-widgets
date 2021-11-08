import { Platform } from "react-native";
import { DateTimePickerModal as DateTimePickerAndroid } from "./DateTimePicker.android";
import { DateTimePickerModal as DateTimePickerIOS } from "./DateTimePicker.ios";
import { DateTimePickerWeb as DateTimePickerMWeb } from "./DateTimePicker.web";

const DateTimePickerModal = Platform.select({
    android: DateTimePickerAndroid as any,
    ios: DateTimePickerIOS,
    web: DateTimePickerMWeb,
    default: DateTimePickerAndroid,
});

export default DateTimePickerModal;
