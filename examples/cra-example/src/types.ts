export type RootStackParamList = {
    Home: undefined;
    Profile: { id: string };
    Feed: { sort: 'latest' | 'top' } | undefined;
};
