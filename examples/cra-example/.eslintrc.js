module.exports = {
    "root": true,
    "parser": "@typescript-eslint/parser",
    "plugins": [
        "@typescript-eslint",
    ],
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    "settings": {
        "react": {
            "version": "detect",
        }
    },
    "env": {
        "node": true,
        "es6": true,
    },
    "rules": {
        "@typescript-eslint/ban-ts-comment": 1,
        "indent": [ 2, 4 ],
        "quotes": [ 2, "double" ],
        "semi": [ 2, "always" ],
        "array-bracket-spacing": [ 2, "always" ],
        "array-element-newline": [ 2, "consistent" ],
        "object-curly-spacing": [ 2, "always" ],
        "object-property-newline": [ 2, { "allowAllPropertiesOnSameLine": true } ]
    }
};
