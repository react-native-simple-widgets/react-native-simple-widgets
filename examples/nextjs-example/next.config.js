const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")([
    // "react-native-paper",
    // "react-native-safe-area-view",
    "react-native-vector-icons",
    "@react-native-community/segmented-control",
    // "react-native-simple-elements",
    "styled-components",
]);
const nextEnv = require("next-env");
const dotenvLoad = require("dotenv-load");

dotenvLoad();
const withNextEnv = nextEnv();

module.exports = withPlugins([withTM, withNextEnv], {
    webpack: (config) => {
        config.module.rules.push({
            // test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
            test: /\.(jpg|png|woff|woff2|eot|ttf)$/,
            loader: "file-loader",
        });

        config.module.rules.push({
            test: /\.(jsx|ts|tsx)$/,
            use: ["babel-loader"],
            exclude: /(node_modules\/(?!(react-native-simple-elements)\/).*|dist|.stoybook)/,
        });

        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });

        // config.module.rules.push({
        //     test: /\.(jsx|ts|tsx)$/, // Just `tsx?` file only
        //     use: [
        //         "babel-loader"
        //     ],
        // });

        // config.module.rules.push({
        //     test: /\.(ts|js)x?$/, // Just `tsx?` file only
        //     exclude: /node_modules[/\\](?!react-native-simple-elements|react-native-safe-area-view)/,
        //     use: [
        //         {
        //             loader: "babel-loader",
        //         },
        //     ],
        // });

        config.resolve.alias = {
            ...(config.resolve.alias || {}),
            // Transform all direct `react-native` imports to `react-native-web`
            "^react-native$": "react-native-web",
            "react-native-vector-icons": "@ovaeasy/react-native-vector-icons",
            "react-native-simple-elements": "./react-native-simple-elements",
            "widgets": "./widgets",
        };
        config.resolve.extensions = [
            ".web.js",
            ".web.ts",
            ".web.tsx",
            ...config.resolve.extensions,
        ];
        return config;
    },
});
