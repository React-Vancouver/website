import S from '@symbols';
import { lighten } from 'polished';

const { calcFontSize, calcSpace, makePlaneShadow } = S;

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
    borderStyle: 'solid',
    borderWidth: '0',
    boxShadow: S.PLANE_SHADOW_2,
};

export const link = {
    ...base,
    fontFamily: S.TYPOGRAPHY_TEXT_FONT,
    textDecoration: 'underline',
    color: S.COLOR_UTILITY.ACTION,
    '&:hover': {
        color: lighten(0.1, S.COLOR_UTILITY.ACTION),
    },
};

export const button = {
    ...area,
    borderRadius: S.LINE_BORDER_RADIUS,
    textDecoration: 'none',
    fontSize: calcFontSize(4),
    letterSpacing: '0.1rem',
    boxShadow: makePlaneShadow({
        plane: 4,
        color: S.COLOR_UTILITY.ACTION,
    }),
    alignItems: 'center',
    appearance: '',
    color: S.COLOR_GREYS.WHITE,
    backgroundColor: S.COLOR_UTILITY.ACTION,
    display: 'inline-flex',
    fontSmoothing: 'antialiased',
    fontWeight: S.TYPOGRAPHY_FONT_WEIGHT_REGULAR,
    height: calcSpace(6),
    lineHeight: calcSpace(6),
    paddingBottom: 0,
    paddingLeft: calcSpace(5),
    paddingRight: calcSpace(5),
    paddingTop: 0,
    userSelect: 'none',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',

    '&:hover': {
        backgroundColor: lighten(0.05, S.COLOR_UTILITY.ACTION),
    },
};

export const makeFillModifier = (color = S.COLOR_UTILITY.ACTION) => ({
    boxShadow: makePlaneShadow({
        plane: 4,
        color,
    }),
    color: S.COLOR_GREYS.WHITE,
    backgroundColor: color,

    ['&:hover, &:focus']: {
        backgroundColor: lighten(0.05, color),
    },
});

export const makeOutlineModifier = (color = S.COLOR_THEME.SECONDARY_D) => ({
    backgroundColor: S.COLOR_GREYS.WHITE,
    color,
    boxShadow: makePlaneShadow({
        plane: 4,
        color,
    }),
    ['&:hover, &:focus']: {
        backgroundColor: S.COLOR_GREYS.WHITE,
    },
});

export const cardAnimated = {
    position: 'relative',
    borderRadius: S.LINE_BORDER_RADIUS_4,
    backgroundColor: S.COLOR_GREYS.WHITE,
    transition: `transform ${S.MOTION_BASE_DURATION} ${S.MOTION_BASE_TIMING}`,
    '&::before': {
        content: '" "',
        position: 'absolute',
        zIndex: -1,
        width: '100%',
        height: '100%',
        boxShadow: S.PLANE_SHADOW_4,
        borderRadius: S.LINE_BORDER_RADIUS_4,
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

export const card = {
    borderRadius: S.LINE_BORDER_RADIUS_4,
    backgroundColor: S.COLOR_GREYS.WHITE,
    boxShadow: S.PLANE_SHADOW_2,
};
