export const defaultProps = {
    isPopup: true,
    isOpen: false,
    theme: "default",
    value: new Date(),
    min: new Date(1970, 0, 1),
    max: new Date(2050, 0, 1),
    showFooter: true,
    showHeader: true,
    showCaption: false,
    mode: "date",
    dateConfig: {},
    headerFormat: "",
    confirmText: "OK",
    cancelText: "Cancel",
    onChange: () => {
        // do something
    },
    onSelect: () => {
        // do something
    },
    onCancel: () => {
        // do something
    },
};

export const dateConfigMap = {
    year: {
        format: "YYYY",
        caption: "Year",
        step: 1,
    },
    month: {
        format: "M",
        caption: "Mon",
        step: 1,
    },
    date: {
        format: "D",
        caption: "Day",
        step: 1,
    },
    hour: {
        format: "hh",
        caption: "Hour",
        step: 1,
    },
    minute: {
        format: "mm",
        caption: "Min",
        step: 1,
    },
    second: {
        format: "ss",
        caption: "Sec",
        step: 1,
    },
};

export const mode = {
    time: {
        hour: {
            format: "hh",
            caption: "Hour",
            step: 1,
        },
        minute: {
            format: "mm",
            caption: "Min",
            step: 1,
        },
        second: {
            format: "ss",
            caption: "Sec",
            step: 1,
        },
    },
    date: {
        year: {
            format: "YYYY",
            caption: "Year",
            step: 1,
        },
        month: {
            format: "MM",
            caption: "Mon",
            step: 1,
        },
        date: {
            format: "DD",
            caption: "Day",
            step: 1,
        },
    },
    datetime: {
        year: {
            format: "YYYY",
            caption: "Year",
            step: 1,
        },
        month: {
            format: "MM",
            caption: "Mon",
            step: 1,
        },
        date: {
            format: "DD",
            caption: "Day",
            step: 1,
        },
        hour: {
            format: "hh",
            caption: "Hour",
            step: 1,
        },
        minute: {
            format: "mm",
            caption: "Min",
            step: 1,
        },
        second: {
            format: "ss",
            caption: "Sec",
            step: 1,
        },
    },
    customDate: {
        month: {
            format: "MMM",
            caption: "Mon",
            step: 1,
        },
        date: {
            format: "DD",
            caption: "Day",
            step: 1,
        },
        year: {
            format: "YYYY",
            caption: "Year",
            step: 1,
        },
    },
};

export const headerFormatWithMode = {
    time: "hh:mm:ss",
    datetime: "YYYY/MM/DD hh:mm:ss",
    date: "YYYY/MM/DD",
};
