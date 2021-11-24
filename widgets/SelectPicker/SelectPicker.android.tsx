import * as React from "react";
import { Picker } from "@react-native-picker/picker";

// Memo workaround for https://github.com/react-native-community/datetimepicker/issues/54
const areEqual = (prevProps, nextProps) => {
    return (
        prevProps.isVisible === nextProps.isVisible &&
        prevProps.date.getTime() === nextProps.date.getTime()
    );
};

type Props = {
    date?: Date,
    mode?: string,
    isVisible?: boolean,
    onCancel: () => void,
    onConfirm: (date) => void,
    onHide?: (flag, date?) => void,
    maximumDate?: Date,
    minimumDate?: Date,
    options: any[],
};

const SelectPickerModal = React.memo((props: Props) => {
    const { date, mode, isVisible, onCancel, onConfirm, onHide, options, ...otherProps } = props;
    const currentDateRef = React.useRef(date);
    const [currentMode, setCurrentMode] = React.useState(null);

    React.useEffect(() => {
        if (isVisible && currentMode === null) {
            setCurrentMode(mode === "time" ? "time" : "date");
        } else if (!isVisible) {
            setCurrentMode(null);
        }
    }, [isVisible, currentMode, mode]);

    if (!isVisible || !currentMode) return null;

    const handleChange = (event, date) => {
        if (event.type === "dismissed") {
            onCancel();
            onHide(false);
            return;
        }
        let nextDate = date;
        if (mode === "datetime") {
            if (currentMode === "date") {
                setCurrentMode("time");
                currentDateRef.current = new Date(date);
                return;
            } else if (currentMode === "time") {
                const year = currentDateRef.current.getFullYear();
                const month = currentDateRef.current.getMonth();
                const day = currentDateRef.current.getDate();
                const hours = date.getHours();
                const minutes = date.getMinutes();
                nextDate = new Date(year, month, day, hours, minutes);
            }
        }
        onConfirm(nextDate);
        onHide(true, nextDate);
    };

    return (
        <Picker
            {...otherProps}
            mode={currentMode}
            selectedValue={date}
            onValueChange={handleChange}
        >
            {options.map((item, index) => (
                <Picker.Item label={item.label} value={item.value} key={index} />
            ))}
        </Picker>
    );
},
areEqual
);

// DateTimePickerModal.defaultProps = {
//     date: new Date(),
//     isVisible: false,
// };

export { SelectPickerModal };
