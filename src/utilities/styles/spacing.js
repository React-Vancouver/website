import React from 'react';
import { calcSpace } from '@symbols/scale';

export const withSpacing = (Component) => {
  const WithSpacing = (props) => {
    const restProps = {};
    const construct = (property, match) => {
      const space = calcSpace(Number(match[3]));
      switch (match[2]) {
        case undefined: {
          return {
            [`${property}Top`]: space,
            [`${property}Bottom`]: space,
            [`${property}Left`]: space,
            [`${property}Right`]: space,
          };
        }
        case 'x': {
          return {
            [`${property}Left`]: space,
            [`${property}Right`]: space,
          };
        }
        case 'y': {
          return {
            [`${property}Top`]: space,
            [`${property}Bottom`]: space,
          };
        }
        case 't': {
          return {
            [`${property}Top`]: space,
          };
        }
        case 'b': {
          return {
            [`${property}Bottom`]: space,
          };
        }
        case 'l': {
          return {
            [`${property}Left`]: space,
          };
        }
        case 'r': {
          return {
            [`${property}Right`]: space,
          };
        }
        default: {
          return {};
        }
      }
    };
    let margins = {};
    let paddings = {};
    Object.keys(props).forEach((key) => {
      const match = key.match(/([p|m])(x|y|t|b|l|r)*(\d+)/);
      if (match) {
        match[1] === 'm'
          ? (margins = {
              ...margins,
              ...construct('margin', match),
            })
          : (paddings = {
              ...paddings,
              ...construct('padding', match),
            });
      } else {
        restProps[key] = props[key];
      }
    });

    /**
     * @todo Implement memoization
     * @body Figure out how to memoize the spacing object to prevent unnecessary
     * re-renders.
     */
    const spacing = {
      ...margins,
      ...paddings,
    };

    return <Component css={spacing} {...restProps} />;
  };

  WithSpacing.displayName = `withSpacing(${
    Component.displayName || Component.name || 'Component'
  })`;

  return WithSpacing;
};
