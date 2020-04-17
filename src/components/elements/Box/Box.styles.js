import { cssSwitch, cssMap } from '@utilities/styles';
import { base as containerBase } from '@blocks/container';
import S from '@symbols';

const colors = { ...S.COLOR_THEME, ...S.COLOR_GREYS };
const makeColorModifier = (backgroundColor) => ({ backgroundColor });

const container = containerBase;

export const constructStyles = (props) => [
  cssSwitch({ props, prop: 'container', css: container }),
  cssMap({
    props,
    prop: 'backgroundColor',
    map: colors,
    makeCSS: makeColorModifier,
  }),
];
