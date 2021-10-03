module.exports = {
    "presets": [
        "next/babel",
        "@babel/preset-flow"
    ],
    "plugins": [
        ["react-native-web", { "commonjs": true }],
        ["styled-components", { "ssr": true }],
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-proposal-object-rest-spread",
        "inline-react-svg",
        [
            "module-resolver",
            {
                "alias": {
                    "^react-native$": "react-native-web",
                    "react-native-vector-icons":
                        "@ovaeasy/react-native-vector-icons",
                    "react-native-simple-elements": "./react-native-simple-elements",
                    "widgets": "./widgets",
                }
            }
        ]
    ]
};
