import { cssValue, cssMap } from '@utilities/styles';
import { link } from '@blocks/interactive';
import S from '@symbols';
const { getFontScale } = S;

const base = {
  ...link,
  display: 'inline-block',
};

const makeColorModifier = (color) => ({ color });

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
