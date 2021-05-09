import { cssValue } from '@utilities/styles';
import S from '@symbols';
import { base as interactiveBase } from '@blocks/interactive';

const { calcSpace, calcFontSize } = S;

// (1) Base ====================================================================
const base = {
  ...interactiveBase,
  borderRadius: '50%',
};

// (2) Sizes & withNumbers variant =============================================
export const sizes = { small: 1, medium: 2, large: 3 };
export const fontSizes = { small: 2, medium: 3, large: 4 };

const makeNumberSizeModifier = (size) => ({
  lineHeight: calcSpace(fontSizes[size] || fontSizes.medium),
  fontSize: calcFontSize(fontSizes[size] || fontSizes.medium),
  height: calcSpace((fontSizes[size] || fontSizes.medium) + 1),
  width: calcSpace((fontSizes[size] || fontSizes.medium) + 1),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const makeSizeModifier = (size) => ({
  height: calcSpace(sizes[size] || sizes.medium),
  width: calcSpace(sizes[size] || sizes.medium),
});

const cssPip = ({ props }) => {
  const { withNumber, size = sizes.medium } = props;
  return withNumber ? makeNumberSizeModifier(size) : makeSizeModifier(size);
};

// (3) Light & Dark themes =====================================================
const backgroundModifier = (theme) => ({
  backgroundColor:
    theme === 'light' ? S.COLOR_GREYS.GREY_90 : 'rgba(255,255,255,0.2)',
  color: theme === 'light' ? S.COLOR_GREYS.GREY_50 : S.COLOR_GREYS.WHITE,
});

// (4) isActive variant ========================================================
export const colors = S.COLOR_THEME;
const cssActive = ({ props: { isActive, color } }) =>
  isActive && {
    backgroundColor: colors[color?.toUpperCase()] ?? colors.DEFAULT,
    color: S.COLOR_GREYS.WHITE,
  };

export const constructStyles = (props) => [
  base,
  cssValue({
    props,
    prop: 'background',
    makeCSS: backgroundModifier,
  }),
  cssPip({ props }),
  cssActive({ props }),
];
