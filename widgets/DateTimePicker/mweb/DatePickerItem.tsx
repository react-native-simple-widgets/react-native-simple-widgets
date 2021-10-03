import * as React from "react";
import {
    nextYear,
    nextMonth,
    nextDate,
    nextHour,
    nextMinute,
    nextSecond,
    convertDate,
} from "./utils/time";
import { shallowEqual } from "./utils/pureRender";
import { addPrefixCss, formatCss } from "./utils/prefix";

const DATE_HEIGHT = 40; // height of a date
const DATE_LENGTH = 10; // number of days
const MIDDLE_INDEX = Math.floor(DATE_LENGTH / 2); // Index of the middle value of the date array
const MIDDLE_Y = -DATE_HEIGHT * MIDDLE_INDEX; // translateY值 value

const isUndefined = val => typeof val === "undefined";
const isFunction = val =>
    Object.prototype.toString.apply(val) === "[object Function]";

const TimeUtil = {
    nextYear,
    nextMonth,
    nextDate,
    nextHour,
    nextMinute,
    nextSecond,
};

type Props = {
    value?: Date,
    min?: Date,
    max?: Date,
    format?: (date) => string,
    step?: number,
    type?: string,
    onSelect?: (value) => void,
};

type State = {
    dates?: Date[],
    translateY?: number,
    marginTop?: number,
};

class DatePickerItem extends React.Component<Props, State> {

    animating = false;
    touchY = 0;
    translateY = 0;
    currentIndex = MIDDLE_INDEX;
    moveDateCount = 0;
    _moveToTimer = null;
    viewport;

    state: State = {

    };

    constructor(props) {
        super(props);
        this.animating = false;
        this.touchY = 0;
        this.translateY = 0;
        this.currentIndex = MIDDLE_INDEX;
        this.moveDateCount = 0;
        this._moveToTimer = null;

        this.state = {
            translateY: MIDDLE_Y,
            marginTop: (this.currentIndex - MIDDLE_INDEX) * DATE_HEIGHT,
        };

        this.renderDatepickerItem = this.renderDatepickerItem.bind(this);
        this.handleContentTouch = this.handleContentTouch.bind(this);
        this.handleContentMouseDown = this.handleContentMouseDown.bind(this);
        this.handleContentMouseMove = this.handleContentMouseMove.bind(this);
        this.handleContentMouseUp = this.handleContentMouseUp.bind(this);
    }

    UNSAFE_componentWillMount() {
        this._iniDates(this.props.value);
    }

    componentDidMount() {
        const viewport = this.viewport;
        viewport.addEventListener("touchstart", this.handleContentTouch, false);
        viewport.addEventListener("touchmove", this.handleContentTouch, false);
        viewport.addEventListener("touchend", this.handleContentTouch, false);
        viewport.addEventListener("mousedown", this.handleContentMouseDown, false);
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.value.getTime() === this.props.value.getTime()) {
            return;
        }
        this._iniDates(nextProps.value);
        this.currentIndex = MIDDLE_INDEX;
        this.setState({
            translateY: MIDDLE_Y,
            marginTop: (this.currentIndex - MIDDLE_INDEX) * DATE_HEIGHT,
        });
    }

    /**
     * Optimization component, Prevents unnecessary rendering
     * Only value or state change should re-rendering
     *
     * @param  {Object} nextProps next props
     * @param  {Object} nextState next state
     * @return {Boolean}          Whether re-rendering
     */
    shouldComponentUpdate(nextProps, nextState) {
        return (
            nextProps.value.getTime() !== this.props.value.getTime() ||
            !shallowEqual(nextState, this.state)
        );
    }

    componentWillUnmount() {
        const viewport = this.viewport;
        viewport.removeEventListener("touchstart", this.handleContentTouch, false);
        viewport.removeEventListener("touchmove", this.handleContentTouch, false);
        viewport.removeEventListener("touchend", this.handleContentTouch, false);
        viewport.removeEventListener(
            "mousedown",
            this.handleContentMouseDown,
            false
        );

        clearTimeout(this._moveToTimer);
    }

    _iniDates(date) {
        const typeName = this.props.type;
        const dates = Array(...Array(DATE_LENGTH)).map((value, index) =>
            TimeUtil[`next${typeName}`](
                date,
                (index - MIDDLE_INDEX) * this.props.step
            )
        );
        this.setState({ dates });
    }

    _updateDates(direction) {
        const typeName = this.props.type;
        const { dates } = this.state;
        if (direction === 1) {
            this.currentIndex++;
            this.setState({
                dates: [
                    ...dates.slice(1),
                    TimeUtil[`next${typeName}`](dates[dates.length - 1], this.props.step),
                ],
                marginTop: (this.currentIndex - MIDDLE_INDEX) * DATE_HEIGHT,
            });
        } else {
            this.currentIndex--;
            this.setState({
                dates: [
                    TimeUtil[`next${typeName}`](dates[0], -this.props.step),
                    ...dates.slice(0, dates.length - 1),
                ],
                marginTop: (this.currentIndex - MIDDLE_INDEX) * DATE_HEIGHT,
            });
        }
    }

    _checkIsUpdateDates(direction, translateY) {
        return direction === 1
            ? this.currentIndex * DATE_HEIGHT + DATE_HEIGHT / 2 < -translateY
            : this.currentIndex * DATE_HEIGHT - DATE_HEIGHT / 2 > -translateY;
    }

    /**
     * Clear the transition style of the object
     * @param  {Dom}     obj     Specified object
     * @return {undefined}
     */
    _clearTransition(obj) {
        addPrefixCss(obj, { transition: "" });
    }

    /**
     * Swipe to the next date
     * @param  {number} direction Sliding direction
     * @return {undefined}
     */
    _moveToNext(direction) {
        const date = this.state.dates[MIDDLE_INDEX];
        const { max, min } = this.props;
        if (
            direction === -1 &&
            date.getTime() < min.getTime() &&
            this.moveDateCount
        ) {
            this._updateDates(1);
        } else if (
            direction === 1 &&
            date.getTime() > max.getTime() &&
            this.moveDateCount
        ) {
            this._updateDates(-1);
        }

        this._moveTo(this.currentIndex);
    }

    /**
     * Add sliding animation
     * @param  {number} angle angle
     * @return {undefined}
     */
    _moveTo(currentIndex) {
        this.animating = true;

        // eslint-disable-next-line
        addPrefixCss(this.refs.scroll, { transition: 'transform .2s ease-out' });

        this.setState({
            translateY: -currentIndex * DATE_HEIGHT,
        });

        // NOTE: There is no transitionend, setTimeout is used instead.
        this._moveToTimer = setTimeout(() => {
            this.animating = false;
            this.props.onSelect(this.state.dates[MIDDLE_INDEX]);
            this._clearTransition(this.refs.scroll); // eslint-disable-line
        }, 200);
    }

    handleStart(event) {
        this.touchY =
            !isUndefined(event.targetTouches) && !isUndefined(event.targetTouches[0])
                ? event.targetTouches[0].pageY
                : event.pageY;

        this.translateY = this.state.translateY;
        this.moveDateCount = 0;
    }

    handleMove(event) {
        const touchY =
            !isUndefined(event.targetTouches) && !isUndefined(event.targetTouches[0])
                ? event.targetTouches[0].pageY
                : event.pageY;

        const dir = touchY - this.touchY;
        const translateY = this.translateY + dir;
        const direction = dir > 0 ? -1 : 1;

        // Date minimum, maximum limit
        const date = this.state.dates[MIDDLE_INDEX];
        const { max, min } = this.props;
        if (date.getTime() < min.getTime() || date.getTime() > max.getTime()) {
            return;
        }

        // Check whether to update the date list
        if (this._checkIsUpdateDates(direction, translateY)) {
            this.moveDateCount =
                direction > 0 ? this.moveDateCount + 1 : this.moveDateCount - 1;
            this._updateDates(direction);
        }

        this.setState({ translateY });
    }

    handleEnd(event) {
        const touchY = event.pageY || event.changedTouches[0].pageY;
        const dir = touchY - this.touchY;
        const direction = dir > 0 ? -1 : 1;
        this._moveToNext(direction);
    }

    /**
     * Sliding date picker touch screen event
     * @param  {Object} event Event object
     * @return {undefined}
     */
    handleContentTouch(event) {
        event.preventDefault();
        if (this.animating) return;
        if (event.type === "touchstart") {
            this.handleStart(event);
        } else if (event.type === "touchmove") {
            this.handleMove(event);
        } else if (event.type === "touchend") {
            this.handleEnd(event);
        }
    }

    /**
     * Sliding date picker mouse event
     * @param  {Object} event Event object
     * @return {undefined}
     */
    handleContentMouseDown(event) {
        if (this.animating) return;
        this.handleStart(event);
        document.addEventListener("mousemove", this.handleContentMouseMove);
        document.addEventListener("mouseup", this.handleContentMouseUp);
    }

    handleContentMouseMove(event) {
        if (this.animating) return;
        this.handleMove(event);
    }

    handleContentMouseUp(event) {
        if (this.animating) return;
        this.handleEnd(event);
        document.removeEventListener("mousemove", this.handleContentMouseMove);
        document.removeEventListener("mouseup", this.handleContentMouseUp);
    }

    /**
     * Render a date DOM object
     * @param  {Object} date
     * @return {Object}
     */
    renderDatepickerItem(date, index) {
        const className =
            date < this.props.min || date > this.props.max ? "disabled" : "";

        let formatDate;
        if (isFunction(this.props.format)) {
            formatDate = this.props.format(date);
        } else {
            formatDate = convertDate(date, this.props.format);
        }

        return (
            <li key={index} className={className}>
                {formatDate}
            </li>
        );
    }

    render() {
        const scrollStyle = formatCss({
            transform: `translateY(${this.state.translateY}px)`,
            marginTop: this.state.marginTop,
        });

        return (
            <div className="datepicker-col-1">
                <div
                    ref={viewport => this.viewport = viewport} // eslint-disable-line
                    className="datepicker-viewport"
                >
                    <div className="datepicker-wheel">
                        {/* eslint-disable-next-line */}
                        <ul ref="scroll" className="datepicker-scroll" style={scrollStyle}>
                            {this.state.dates.map(this.renderDatepickerItem)}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default DatePickerItem;
