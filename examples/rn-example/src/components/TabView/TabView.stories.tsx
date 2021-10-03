import * as React from 'react';
import {
    StyleSheet,
} from "react-native";
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import {
    TabBar,
    SceneRendererProps,
    SceneMap,
    NavigationState,
    TabView,
} from 'react-native-simple-widgets/widgets/TabView';
import Article from './Shared/Article';
import Albums from './Shared/Albums';
import Chat from './Shared/Chat';
import Contacts from './Shared/Contacts';

type State = NavigationState<{
    key: string;
    title: string;
}>;

const TabViewExample = () => {

    const [ index, setIndex ] = React.useState(1);
    const [ routes, ] = React.useState([
        { key: 'article', title: 'Article' },
        { key: 'contacts', title: 'Contacts' },
        { key: 'albums', title: 'Albums' },
        { key: 'chat', title: 'Chat' },
    ]);

    const handleIndexChange = (index: number) => {
        setIndex(index);
    };

    const renderTabBar = (props: SceneRendererProps & { navigationState: State }) => (
        <TabBar
            {...props}
            scrollEnabled
            indicatorStyle={styles.indicator}
            style={styles.tabbar}
            tabStyle={styles.tab}
            labelStyle={styles.label}
        />
    );

    const renderScene = SceneMap({
        albums: Albums,
        contacts: Contacts,
        article: Article,
        chat: Chat,
    });

    return (
        <TabView
            lazy={true}
            navigationState={{
                index,
                routes,
            }}
            renderScene={renderScene}
            renderTabBar={renderTabBar}
            onIndexChange={handleIndexChange}
        />
    );
}

TabViewExample.title = 'Scrollable tab bar';
TabViewExample.backgroundColor = '#3f51b5';
TabViewExample.appbarElevation = 0;

storiesOf('TabView', module)
    .addDecorator(withKnobs)
    .add('Default', () => {

        return (
            <TabViewExample
            />
        )
    })

const styles = StyleSheet.create({
    tabbar: {
        backgroundColor: '#3f51b5',
    },
    tab: {
        width: 120,
    },
    indicator: {
        backgroundColor: '#ffeb3b',
    },
    label: {
        fontWeight: '400',
    },
});
