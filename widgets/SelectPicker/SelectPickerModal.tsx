import { Platform } from "react-native";
import { SelectPickerModal as SelectPickerModalAndroid } from "./SelectPicker.android";
import { SelectPickerModal as SelectPickerModalIOS } from "./SelectPicker.ios";
import { SelectPicker as DateTimePickerMWeb } from "./SelectPicker.web";

const SelectPickerModal = Platform.select({
    android: SelectPickerModalAndroid as any,
    ios: SelectPickerModalIOS,
    web: DateTimePickerMWeb,
    default: SelectPickerModalAndroid,
});

export default SelectPickerModal;
