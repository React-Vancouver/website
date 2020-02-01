import S from '@symbols';

const { getFontScale, calcSpace } = S;

export const input = {
    display: 'block',
    margin: 0,
    padding: `0 ${calcSpace(2)}`,
    width: '100%',
    minHeight: calcSpace(5),
    backgroundColor: 'transparent',
    border: S.LINE_DEFAULT_BORDER,
    borderRadius: S.LINE_BORDER_RADIUS_0,
    fontWeight: S.TYPOGRAPHY_FONT_WEIGHT_REGULAR,
    fontFamily: S.TYPOGRAPHY_TEXT_FONT,
    ...getFontScale(1),
    color: S.COLOR_TEXT,
    caretColor: S.COLOR_THEME.SECONDARY_D,
    transition: S.MOTION_DEFAULT_TRANSITION,
    '&:hover': {
        borderColor: S.COLOR_THEME.SECONDARY_D,
    },
    '&:focus': {
        borderColor: S.COLOR_THEME.SECONDARY_D,
        outline: 'none',
    },
    '&:disabled': {
        cursor: 'not-allowed',
        opacity: 0.5,
    },
};

export const inputWithLabel = {
    ['&:focus + label']: {
        color: S.COLOR_THEME.SECONDARY_D,
    },
};

export const inputGroup = {
    position: 'relative',
};

export const label = {
    fontFamily: S.TYPOGRAPHY_TEXT_FONT,
    fontWeight: S.TYPOGRAPHY_FONT_WEIGHT_BOLD,
    letterSpacing: '0.015rem',
    ...getFontScale(4),
};

export const makeLabelPosition = (backgroundColor) => ({
    display: 'block',
    position: 'absolute',
    backgroundColor,
    top: '-0.8rem',
    left: '1.6rem',
    paddingLeft: calcSpace(1),
    paddingRight: calcSpace(1),
});
