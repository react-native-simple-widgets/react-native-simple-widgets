export function camelCase(str) {
    return str
        .replace(/-([a-z])/g, ($0, $1) => $1.toUpperCase())
        .replace("-", "");
}

/**
 * Format the css property object
 * @param  {Object} props Attribute object
 * @return {Object}       Prefixed formatting attribute object
 */
export function formatCss(props) {
    const prefixs = ["-webkit-", "-moz-", "-ms-"];

    const result = {};

    const regPrefix = /transform|transition/;

    for (const key in props) {
        if (Object.prototype.hasOwnProperty.call(props, key)) {
            const styleValue = props[key];

            // If the detection is the transform or transition attribute
            if (regPrefix.test(key)) {
                for (let i = 0; i < prefixs.length; i++) {
                    const styleName = camelCase(prefixs[i] + key);
                    result[styleName] = styleValue.replace(regPrefix, `${prefixs[i]}$&`);
                }
            }

            result[key] = styleValue;
        }
    }

    return result;
}

/**
 * Add css styles to elements
 * @param {Object} element Target element
 * @param {Object} props   css attribute object
 */
export function addPrefixCss(element, props) {
    const formatedProps = formatCss(props);
    for (const key in formatedProps) {
        if (Object.prototype.hasOwnProperty.call(formatedProps, key)) {
            element.style[key] = formatedProps[key];
        }
    }
}

export function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}
