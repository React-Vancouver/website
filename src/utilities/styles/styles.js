import { logger } from '@utilities/styles/logger';

export const hasOwnProperty = (obj, prop) => {
    return Object.prototype.hasOwnProperty.call(obj, prop);
};

export const cssSwitch = ({ props, prop, css }) => {
    if (hasOwnProperty(props, prop) && props[prop]) {
        return css || {};
    }
};

export const cssValue = ({ props, prop, makeCSS }) => {
    if (!makeCSS || typeof makeCSS !== 'function') {
        logger.warn('No css function provided.');
    }
    if (hasOwnProperty(props, prop) && props[prop]) {
        return makeCSS(props[prop]);
    }
};

export const cssMap = ({ props, prop, map, makeCSS }) => {
    if (!makeCSS || typeof makeCSS !== 'function') {
        logger.warn('No css function provided.');
    }
    if (hasOwnProperty(props, prop) && !!props[prop]) {
        const _key = props[prop].toUpperCase();
        const _value = map[_key];
        if (!_value) {
            logger.warn(`
                ${_key} is not available in ${Object.keys(map)}.
            `);
            if (!map.DEFAULT) {
                logger.warn(`
                    There is no DEFAULT for ${map} map.
                `);
                return {};
            }
        }
        return makeCSS(_value || map.DEFAULT);
    }
};
