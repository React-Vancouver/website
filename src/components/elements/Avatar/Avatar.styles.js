import { cssValue } from '@utilities/styles';
import S from '@symbols';
const { calcSpace } = S;

const base = {
    borderRadius: '50%',
    backgroundColor: S.COLOR_GREYS.GREY_90,
};

const makeScaleModifier = (n) => {
    const _s = `${calcSpace(n)} !important`;
    return { width: _s, height: _s };
};

export const constructStyles = (props) => [
    base,
    cssValue({ props, prop: 'scale', makeCSS: makeScaleModifier }),
];
