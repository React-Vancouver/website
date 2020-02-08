import S from '@symbols';
const { calcSpace } = S;

export const rootStyles = {
    height: '100%',
    width: '8rem',
    display: 'grid',
    gridAutoColumns: '8rem',
    gridAutoRows: calcSpace(10),
    rowGap: calcSpace(2),
    backgroundColor: S.COLOR_GREYS.WHITE,
};

export const linkStyles = {
    textTransform: 'uppercase',
    textAlign: 'center',
    textDecoration: 'none',

    ['& > span']: {
        display: 'inline-block',
        color: S.COLOR_GREYS.GREY_40,
        transition: S.MOTION_DEFAULT_TRANSITION,
    },

    ['&:hover > span']: {
        color: S.COLOR_UTILITY.ACTION,
    },
};

export const logoStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    height: calcSpace(6),
    width: calcSpace(6),
};

export const brandStyles = {
    backgroundColor: S.COLOR_THEME.SECONDARY_L,
};

export const homeStyles = {
    backgroundColor: S.COLOR_GREYS.GREY_40,
};

export const iconStyles = {
    width: '3rem',
};
