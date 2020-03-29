import { cssSwitch, cssMap } from '@utilities/styles';
import S from '@symbols';
const { calcSpace } = S;

const colors = { ...S.COLOR_THEME, ...S.COLOR_GREYS };
const makeColorModifier = (backgroundColor) => ({ backgroundColor });

const container = {
  maxWidth: S.LAYOUT_CONTAINER,
  margin: '0 auto',
  [`@media (max-width: ${S.LAYOUT_CONTAINER}px)`]: {
    paddingLeft: calcSpace(3),
    paddingRight: calcSpace(3),
  },
  [`@media (max-width: 660px)`]: {
    paddingLeft: calcSpace(2),
    paddingRight: calcSpace(2),
  },
};

export const constructStyles = (props) => [
  cssSwitch({ props, prop: 'container', css: container }),
  cssMap({
    props,
    prop: 'backgroundColor',
    map: colors,
    makeCSS: makeColorModifier,
  }),
];
