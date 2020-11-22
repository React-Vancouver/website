import { cssValue, cssMap } from '@utilities/styles';
import { link } from '@blocks/interactive';
import S from '@symbols';
import { darken } from 'polished';
const { getFontScale } = S;

const base = {
  ...link,
  display: 'inline-block',
};

const makeColorModifier = (color) => ({
  color,
  '&:hover': {
    color: darken(0.2, color),
  },
});

export const constructStyles = (props) => [
  base,
  cssValue({ props, prop: 'scale', makeCSS: getFontScale }),
  cssMap({
    props,
    prop: 'color',
    map: { ...S.COLOR_THEME, ...S.COLOR_GREYS },
    makeCSS: makeColorModifier,
  }),
];
