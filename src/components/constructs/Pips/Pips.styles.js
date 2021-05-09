import { cssMap } from '@utilities/styles';

const sizes = {
  small: '0.4rem',
  medium: '0.8rem',
  large: '1rem',
};

sizes.DEFAULT = sizes.medium;

const makeSizeModifier = (size) => ({
  marginRight: size,
});

export const constructPipStyles = (props) => [
  {
    display: 'inline-flex',
    marginRight: sizes.DEFAULT,
    ['&:last-of-type']: {
      marginRight: 0,
    },
  },
  cssMap({ props, prop: 'size', map: sizes, makeCSS: makeSizeModifier }),
];
