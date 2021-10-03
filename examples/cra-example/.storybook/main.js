module.exports = {
    stories: ['../components/**/*.stories.tsx'],
    addons: [
        '@storybook/preset-create-react-app',
        '@storybook/addon-actions/register',
        '@storybook/addon-links/register',
        '@storybook/addon-knobs/register',
        '@storybook/addon-viewport/register',
    ],
    webpackFinal: async (config) => {
        config.module.rules.push({
            test: /\.(js|ts|tsx)$/,
            exclude: /(node_modules\/(?!(react-native-simple-widgets|react-native-simple-elements|react-native-animatable|react-native-swipe-gestures|react-native-linear-gradient)\/).*|dist|.stoybook)/,
            use: {
                loader: 'babel-loader',
                options: {
                    "presets": [
                        "@babel/preset-env",
                        "@babel/preset-react",
                        "@babel/preset-typescript",
                    ],
                    "plugins": [
                        ["react-native-web", { "commonjs": true }],
                        ["styled-components", { "ssr": true }],
                        "@babel/plugin-proposal-class-properties",
                        '@babel/plugin-transform-modules-commonjs',
                        "@babel/plugin-proposal-optional-chaining",
                        "@babel/plugin-proposal-nullish-coalescing-operator",
                        "@babel/plugin-transform-template-literals",
                        // "@babel/plugin-transform-flow-strip-types",
                        "inline-react-svg",
                        [
                            "module-resolver",
                            {
                                "alias": {
                                    "^react-native$": "react-native-web",
                                    "react-native-vector-icons":
                                        "@ovaeasy/react-native-vector-icons",
                                    "components": "./components"
                                }
                            }
                        ]
                    ]
                }
            }
        });

        config.resolve.alias = {
            ...(config.resolve.alias || {}),
            // Transform all direct `react-native` imports to `react-native-web`
            "react-native$": "react-native-web",
            "react-native-vector-icons": "@ovaeasy/react-native-vector-icons",
            'react-native-linear-gradient': 'react-native-web-linear-gradient'
        };

        const nodeConfig = config.node || {};
        nodeConfig.fs = "empty";
        config.node = nodeConfig;

        // Return the altered config
        return config;
    },
};
