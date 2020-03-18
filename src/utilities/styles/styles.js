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
    const _value = map[props[prop].toUpperCase()] || map[props[prop]];
    if (!_value) {
      logger.warn(`
Neither ${props[prop]} nor ${props[prop].toUpperCase()}
is not available in ${Object.keys(map)}.
      `);
      if (!map.DEFAULT || !map.default) {
        logger.warn(`There is no default for ${map} map.`);
        return {};
      }
    }
    const defaultValue = map.DEFAULT || map.default;
    return makeCSS(_value || defaultValue);
  }
};
