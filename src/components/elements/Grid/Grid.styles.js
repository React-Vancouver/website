import S from '@symbols';
import { cssValue } from '@utilities/styles';

const { calcSpace } = S;

const base = {
    display: 'grid',
};

const makeGapModifier = (scale) => ({
    gap: calcSpace(scale),
});

const makeFixedModifier = (columns) => ({
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
});

const makeFluidModifier = (size) => ({
    gridTemplateColumns: `repeat( auto-fit, minmax(${size}rem, 1fr) )`,
});

export const constructStyles = (props) => [
    base,
    cssValue({ props, prop: 'gap', makeCSS: makeGapModifier }),
    cssValue({ props, prop: 'fixed', makeCSS: makeFixedModifier }),
    cssValue({ props, prop: 'fluid', makeCSS: makeFluidModifier }),
];
