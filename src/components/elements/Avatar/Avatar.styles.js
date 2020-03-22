import { cssValue } from '@utilities/styles';
import S from '@symbols';
const { calcSpace, calcFontSize } = S;

const base = {
  overflow: 'hidden',
  borderRadius: '50%',
  backgroundColor: S.COLOR_THEME.SECONDARY_L,
  color: S.COLOR_THEME.SECONDARY_D,
  textAlign: 'center',
};

const makeScaleModifier = (n) => {
  const _s = `${calcSpace(n)} !important`;
  return {
    width: _s,
    height: _s,
    lineHeight: _s,
    fontSize: calcFontSize(n),
  };
};

export const constructStyles = (props) => [
  base,
  cssValue({ props, prop: 'scale', makeCSS: makeScaleModifier }),
];
