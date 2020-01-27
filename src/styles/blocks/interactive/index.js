import S from '@symbols';
import { lighten } from 'polished';

const { calcFontSize, calcLineHeight, calcSpace } = S;

export const base = {
    cursor: 'pointer',
    transition: S.MOTION_DEFAULT_TRANSITION,

    '&:disabled': {
        cursor: 'not-allowed',
        opacity: 0.5,
    },
};

export const area = {
    ...base,
    backgroundColor: 'transparent',
    borderRadius: S.LINE_BORDER_RADIUS,
    borderStyle: 'solid',
    borderWidth: '0',
    boxShadow: S.PLANE_SHADOW_2,
};

export const link = {
    ...base,
    fontFamily: S.TYPOGRAPHY_TEXT_FONT,
    fontWeight: S.TYPOGRAPHY_FONT_WEIGHT_BOLD,
    textDecoration: 'none',
    color: S.COLOR_UTILITY.ACTION,
    '&:hover': {
        color: lighten(0.1, S.COLOR_UTILITY.ACTION),
    },
};

export const button = {
    ...area,
    ...link,
    textTransform: 'uppercase',
    fontSize: calcFontSize(1),
    letterSpacing: '0.1rem',

    alignItems: 'center',
    appearance: '',
    backgroundColor: S.COLOR_GREYS.WHITE,
    cursor: 'pointer',
    display: 'inline-flex',
    fontSmoothing: 'antialiased',
    fontWeight: S.TYPOGRAPHY_FONT_WEIGHT_BOLD,
    height: calcSpace(5),
    lineHeight: calcLineHeight(1),
    paddingBottom: 0,
    paddingLeft: calcSpace(3),
    paddingRight: calcSpace(3),
    paddingTop: 0,
    userSelect: 'none',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',
};

export const makeSolidModifier = (color) => ({
    color: S.GREY_COLORS.white,
    backgroundColor: color,
    '&:hover': {
        backgroundColor: color,
    },
    '&:focus': {
        backgroundColor: color,
    },
});

export const makeOutlineModifier = (color) => ({
    color,
    backgroundColor: 'transparent',
    borderWidth: '0.1rem',
    borderColor: color,
    '&:hover': {
        backgroundColor: color,
        color: S.GREY_COLORS.white,
    },
    '&:focus': {
        backgroundColor: color,
        color: S.GREY_COLORS.white,
    },
});

export const card = {
    position: 'relative',
    backgroundColor: S.COLOR_GREYS.WHITE,
    height: calcSpace(28),
    width: calcSpace(20),
    transition: `transform ${S.MOTION_BASE_DURATION} ${S.MOTION_BASE_TIMING}`,
    '&::before': {
        content: '" "',
        position: 'absolute',
        zIndex: -1,
        width: '100%',
        height: '100%',
        boxShadow: S.PLANE_SHADOW_4,
        borderRadius: S.LINE_BORDER_RADIUS,
        opacity: 0,
        transition: `opacity ${S.MOTION_BASE_DURATION} ${S.MOTION_BASE_TIMING}`,
    },
    '&:hover': {
        transform: 'scale(1.025, 1.025)',
        '&::before': {
            opacity: 0.5,
        },
    },
};
