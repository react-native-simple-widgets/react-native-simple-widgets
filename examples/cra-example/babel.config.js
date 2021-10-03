module.exports = {
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
        [
            "module-resolver",
            {
                "alias": {
                    "^react-native$": "react-native-web",
                    "react-native-vector-icons":
                        "@ovaeasy/react-native-vector-icons",
                    'react-native-linear-gradient': 'react-native-web-linear-gradient',
                    "components": "./components"
                }
            }
        ]
    ]
}
