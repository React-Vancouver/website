import { cssValue } from '@utilities/styles';
import S from '@symbols';
const { calcSpace, calcFontSize } = S;

const base = {
  backgroundColor: S.COLOR_THEME.SECONDARY_L,
  borderRadius: '50%',
  color: S.COLOR_THEME.SECONDARY_D,
  overflow: 'hidden',
  textAlign: 'center',
  textTransform: 'uppercase',
  ['&[alt]']: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: calcFontSize(2),
  },
};

const makeScaleModifier = (n) => {
  const _s = calcSpace(n);
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
