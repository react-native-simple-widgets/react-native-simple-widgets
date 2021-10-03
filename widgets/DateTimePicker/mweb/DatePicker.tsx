import * as React from "react";
import DatePickerItem from "./DatePickerItem";
import PureRender from "./utils/pureRender";
import { convertDate, nextDate } from "./utils/time";
import {
    dateConfigMap,
    headerFormatWithMode,
    mode,
} from "./utils/dataSource";
import { isEmpty } from "./utils/prefix";

/**
 * Uppercase first letter
 * @param {String} String
 */
const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join("");

/**
 * Judgment array
 * @param {any} val
 */
const isArray = val =>
    Object.prototype.toString.apply(val) === "[object Array]";

type Props = {
    theme?: string,
    value?: Date,
    min?: Date,
    max?: Date,
    customHeader?: React.ReactElement,
    showHeader?: boolean,
    showFooter?: boolean,
    showCaption?: boolean,
    dateConfig?: Record<string, any>,
    headerFormat?: string,
    confirmText?: string,
    cancelText?: string,
    onChange?: (value) => void,
    onSelect?: (value) => void,
    onCancel?: () => void,
    mode?: string,
};

type State = {
    value?: Date,
};

class DatePicker extends React.Component<Props, State> {

    state: State = {

    };

    constructor(props) {
        super(props);
        this.state = {
            value: nextDate(this.props.value),
        };

        this.handleFinishBtnClick = this.handleFinishBtnClick.bind(this);
        this.handleDateSelect = this.handleDateSelect.bind(this);
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        // update value of state
        const date = nextDate(nextProps.value);
        if (date.getTime() !== this.state.value.getTime()) {
            this.setState({ value: date });
        }
    }

    /**
     * When you swipe two datepickeritems at the same time.
     * Prevent dates from going out.
     */
    componentDidUpdate() {
        const value = this.state.value;
        const { min, max } = this.props;
        if (value.getTime() > max.getTime()) {
            this.setState({ value: max });
        }

        if (value.getTime() < min.getTime()) {
            this.setState({ value: min });
        }
    }

    /**
     * Optimization component, Prevents unnecessary rendering
     * Only props or state change or value before re-rendering
     *
     * @param  {Object} nextProps next props
     * @param  {Object} nextState next state
     * @return {Boolean}          Whether re-rendering
     */
    shouldComponentUpdate(nextProps, nextState) {
        const date = nextDate(nextState.value);
        return (
            date.getTime() !== this.state.value.getTime() ||
            PureRender.shouldComponentUpdate(
                nextProps,
                nextState,
                this.props,
                this.state
            )
        );
    }

    /**
     * Click the Finish button event
     * @return {undefined}
     */
    handleFinishBtnClick() {
        this.props.onSelect(this.state.value);
    }

    /**
     * Select next date
     * @return {undefined}
     */
    handleDateSelect(value) {
        this.setState({ value }, () => {
            this.props.onChange(value);
        });
    }

    /**
     * Format dateConfig
     * @param {*} dataConfig dateConfig attribute
     */
    normalizeDateConfig(dataConfig) {
        const configList = [];
        if (isArray(dataConfig)) {
            for (let i = 0; i < dataConfig.length; i++) {
                const value = dataConfig[i];
                if (typeof value === "string") {
                    const lowerCaseKey = value.toLocaleLowerCase();
                    configList.push({
                        ...dateConfigMap[lowerCaseKey],
                        type: capitalize(lowerCaseKey as any),
                    });
                }
            }
        } else {
            for (const key in dataConfig) {
                if (Object.prototype.hasOwnProperty.call(dataConfig, key)) {
                    const lowerCaseKey = key.toLocaleLowerCase();
                    if (
                        Object.prototype.hasOwnProperty.call(dateConfigMap, lowerCaseKey)
                    ) {
                        configList.push({
                            ...dateConfigMap[lowerCaseKey],
                            ...dataConfig[key],
                            type: capitalize(lowerCaseKey as any),
                        });
                    }
                }
            }
        }

        return configList;
    }

    checkMode(modeName) {
        if (!modeName || modeName === "") return mode.date;
        return mode[modeName];
    }

    checkHeaderFormat(modeName) {
        if (!modeName || modeName === "") {
            return headerFormatWithMode.date;
        }
        return headerFormatWithMode[modeName];
    }
    /**
     * render function
     * @return {Object} JSX object
     */
    render() {
        const {
            min,
            max,
            theme,
            dateConfig,
            mode,
            confirmText,
            cancelText,
            headerFormat,
            showHeader,
            showFooter,
            customHeader,
            showCaption,
        } = this.props;
        const value = this.state.value;
        const themeClassName =
            ["default", "dark", "ios", "android", "android-dark"].indexOf(theme) ===
                -1
                ? "default"
                : theme;

        let dataConfigList = null;
        //handle config data with mode or custom
        if (!isEmpty(dateConfig)) {
            dataConfigList = this.normalizeDateConfig(dateConfig);
        } else {
            dataConfigList = this.normalizeDateConfig(this.checkMode(mode));
        }
        // handle header with current mode
        let _headerFormat = "";
        if (!headerFormat && headerFormat === "") {
            _headerFormat = this.checkHeaderFormat(mode);
        }

        return (
            <div className={`datepicker ${themeClassName}`}>
                {showHeader && (
                    <div className="datepicker-header">
                        {customHeader || convertDate(value, _headerFormat)}
                    </div>
                )}
                {showCaption && (
                    <div className="datepicker-caption">
                        {dataConfigList.map((item, index) => (
                            <div key={index} className="datepicker-caption-item">
                                {item.caption}
                            </div>
                        ))}
                    </div>
                )}
                <div className="datepicker-content">
                    {dataConfigList.map((item, index) => (
                        <DatePickerItem
                            key={index}
                            value={value}
                            min={min}
                            max={max}
                            step={item.step}
                            type={item.type}
                            format={item.format}
                            onSelect={this.handleDateSelect}
                        />
                    ))}
                </div>
                {showFooter && (
                    <div className="datepicker-navbar">
                        <a className="datepicker-navbar-btn" onClick={this.props.onCancel}>
                            {cancelText}
                        </a>
                        <a
                            className="datepicker-navbar-btn"
                            onClick={this.handleFinishBtnClick}
                        >
                            {confirmText}
                        </a>
                    </div>
                )}
            </div>
        );
    }
}

export default DatePicker;
