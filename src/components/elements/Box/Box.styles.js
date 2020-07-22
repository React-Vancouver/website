import { cssSwitch, cssMap } from '@utilities/styles';
import { base as container, article } from '@blocks/container';
import S from '@symbols';

const colors = { ...S.COLOR_THEME, ...S.COLOR_GREYS };
const makeColorModifier = (backgroundColor) => ({ backgroundColor });

export const constructStyles = (props) => [
  cssSwitch({ props, prop: 'container', css: container }),
  cssSwitch({ props, prop: 'article', css: article }),
  cssMap({
    props,
    prop: 'backgroundColor',
    map: colors,
    makeCSS: makeColorModifier,
  }),
];
