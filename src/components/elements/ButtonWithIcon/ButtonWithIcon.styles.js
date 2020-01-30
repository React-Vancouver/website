import S from '@symbols';
import { cssValue, cssSwitch, cssMap } from '@utilities/styles';
import { makeOutlineModifier } from '@blocks/interactive';
const { calcSpace, calcFontSize } = S;

export const sizes = { small: 5, medium: 6, large: 8 };
export const fontSizes = { small: 4, medium: 4, large: 5 };
export const colors = { ...S.COLOR_UTILITY, ...S.COLOR_THEME };

const base = {
    display: 'inline-block',
    position: 'relative',
    width: '100%',
    textAlign: 'center',
    paddingLeft: calcSpace(3),
};

const makeSizeModifier = (size) => ({
    height: calcSpace(sizes[size] || sizes.medium),
    lineHeight: calcSpace(sizes[size] || sizes.medium),
    fontSize: calcFontSize(fontSizes[size] || sizes.medium),
    borderRadius: calcSpace(sizes[size] || sizes.medium),
    paddingRight: calcSpace(sizes[size] + 1 || sizes.medium + 1),
});

const cappedModifier = { width: 'unset' };

export const constructStyles = (props) => [
    base,
    cssSwitch({ props, prop: 'capped', css: cappedModifier }),
    cssValue({ props, prop: 'size', makeCSS: makeSizeModifier }),
    cssMap({
        props,
        prop: 'color',
        map: colors,
        makeCSS: makeOutlineModifier,
    }),
];

const iconBase = {
    position: 'absolute',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    right: calcSpace(1),
    top: calcSpace(1),
    color: S.COLOR_GREYS.WHITE,
    borderRadius: '50%',
    svg: {
        height: '100%',
        width: '100%',
    },
};

const makeIconColorModifier = (color) => ({
    backgroundColor: color,
});

const iconSizes = { small: '0.6rem', medium: '0.8rem', large: '1.4rem' };
const makeIconSizeModifier = (size) => ({
    height: calcSpace(sizes[size] - 2 || sizes.medium - 2),
    width: calcSpace(sizes[size] - 2 || sizes.medium - 2),
    paddingTop: iconSizes[size] || iconSizes.medium,
    paddingBottom: iconSizes[size] || iconSizes.medium,
});

export const constructIconStyles = (props) => [
    iconBase,
    cssValue({ props, prop: 'size', makeCSS: makeIconSizeModifier }),
    cssMap({
        props,
        prop: 'color',
        map: colors,
        makeCSS: makeIconColorModifier,
    }),
];
