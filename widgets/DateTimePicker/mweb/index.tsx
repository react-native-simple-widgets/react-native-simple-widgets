import * as React from "react";
import DatePicker from "./DatePicker";
import Modal from "../Modal";
import { defaultProps } from "./utils/dataSource";

type EnhanceDatePickerProps = {
    isOpen?: boolean,
    onCancel?: () => void,
};

function EnhanceDatePicker({ isOpen, ...props }: EnhanceDatePickerProps) {
    function onModalClose(event) {
        if (event.target === event.currentTarget) {
            props.onCancel();
        }
    }

    return (
        <div
            style={{ display: isOpen ? "" : "none" }}
            onClick={onModalClose}
            className="datepicker-modal"
        >
            <DatePicker {...props} />
        </div>
    );
}

type ModalDatePickerProps = {
    isOpen?: boolean,
    onCancel?: () => void,
    isPopup?: boolean,
};

function ModalDatePicker({ isPopup, ...props }: ModalDatePickerProps) {
    if (!isPopup) {
        return <DatePicker {...props} />;
    }

    return (
        <Modal {...props}>
            <EnhanceDatePicker />
        </Modal>
    );
}

ModalDatePicker.displayName = "MobileDatePicker";
ModalDatePicker.defaultProps = defaultProps;

export default ModalDatePicker;
