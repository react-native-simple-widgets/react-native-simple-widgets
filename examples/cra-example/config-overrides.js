const path = require("path");
const { addWebpackModuleRule, addWebpackResolve, override, babelInclude, addBabelPlugin } = require('customize-cra');

// override
module.exports = {
    webpack: override(
        // customize-cra plugins here
        addWebpackModuleRule({
            test: /\.(js|ts|tsx)$/,
            exclude: /node_modules[/\\](?!react-native-vector-icons|react-native-safe-area-view)/,
            use: {
                loader: "babel-loader",
                options: {
                    // Disable reading babel configuration
                    babelrc: false,
                    // configFile: false,

                    // The configuration for compilation
                    presets: [
                        ["@babel/preset-env", { useBuiltIns: "usage" }],
                        "@babel/preset-react",
                        // "@babel/preset-flow",
                        "@babel/preset-typescript"
                    ],
                    plugins: [
                        "@babel/plugin-proposal-class-properties",
                        "@babel/plugin-proposal-object-rest-spread",
                        "@babel/plugin-transform-modules-commonjs",
                        "inline-react-svg",
                        ['module-resolver', {
                            "root": ["."],
                            "alias": {
                                "^react-native$": "react-native-web",
                                'react-native-linear-gradient': 'react-native-web-linear-gradient',
                                "components": "./components",
                            }
                        }]
                    ]
                }
            }
        }),
        addWebpackModuleRule({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        }),
        addWebpackResolve({alias: {
            'react-native$': require.resolve('react-native-web'),
        }}),
        // addWebpackExternals({
        //     react: "React",
        //     "react-dom": "ReactDom"
        // }),
        babelInclude([
            path.resolve("./src"), // make sure you link your own source
            path.resolve("./node_modules/react-native-simple-elements"),
            // path.resolve("../../"),
        ]),
        addBabelPlugin('@babel/plugin-transform-modules-commonjs'),
        (config) => {
            return config;
        },
    ),

    // jest: config => {
    //     return config;
    // },

    // devServer: configFunction => (proxy, allowedHost) => {
    //     const config = configFunction(proxy, allowedHost);
    //     return config;
    // },

    paths: function (paths, env) {
        // paths.appIndexJs = path.resolve(__dirname, 'mysrc/client.js');
        paths.appSrc = path.resolve(__dirname, '.');
        return paths;
    },
};
