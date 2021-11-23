import { Platform } from "react-native";
import { DateTimePickerModal as DateTimePickerAndroid } from "./SelectPicker.android";
import { DateTimePickerModal as DateTimePickerIOS } from "./SelectPicker.ios";
import { SelectPicker as DateTimePickerMWeb } from "./SelectPicker.web";

const SelectPickerModal = Platform.select({
    android: DateTimePickerAndroid as any,
    ios: DateTimePickerIOS,
    web: DateTimePickerMWeb,
    default: DateTimePickerAndroid,
});

export default SelectPickerModal;
