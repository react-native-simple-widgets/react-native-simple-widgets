import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Dimensions } from "react-native";
import dayjs from 'dayjs';
import { Calendar, ICalendarEvent, Mode } from "react-native-simple-widgets/widgets/BigCalendar";

const events = [
    {
        title: 'Meeting',
        start: dayjs().set('hour', 10).set('minute', 0).toDate(),
        end: dayjs().set('hour', 10).set('minute', 30).toDate(),
    },
    {
        title: 'Coffee break',
        start: dayjs().set('hour', 14).set('minute', 30).toDate(),
        end: dayjs().set('hour', 15).set('minute', 30).toDate(),
    },
    {
        title: 'Repair my car',
        start: dayjs().add(1, 'day').set('hour', 7).set('minute', 45).toDate(),
        end: dayjs().add(1, 'day').set('hour', 13).set('minute', 30).toDate(),
    },
]

const DefaultExample = (props) => {

    const [mode, setMode] = React.useState<Mode>('month')
    const [additionalEvents, setAdditionalEvents] = React.useState<ICalendarEvent[]>([])

    const addEvent = React.useCallback(
        (start) => {
            const title = 'new Event'
            const end = dayjs(start).add(59, 'minute').toDate()
            setAdditionalEvents([...additionalEvents, { start, end, title }])
        },
        [additionalEvents, setAdditionalEvents],
    )

    return (
        <>
            <Calendar
                height={Dimensions.get('window').height - 60}
                events={[...events, ...additionalEvents]}
                onPressCell={addEvent}
                mode={mode}
            />
        </>
    );
};

const PlaygroundExample = (props) => {

    return (
        <>
        </>
    );
};

storiesOf("BigCalendar", module)
    .add("Default", () => <DefaultExample />)
    .add("Playground", () => <PlaygroundExample />);
