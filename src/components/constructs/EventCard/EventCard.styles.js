import S from '@symbols';
const { calcSpace } = S;

import { area, card } from '@blocks/interactive';

const base = {
    position: 'relative',
};

export const rootStyles = () => [base, area, card];

export const headerStyles = {
    height: calcSpace(21),
    backgroundColor: S.COLOR_THEME.SECONDARY_D,
    borderRadius: `${S.LINE_BORDER_RADIUS_4} ${S.LINE_BORDER_RADIUS_4} 0 0 `,
};

export const textStyles = {
    width: '34rem',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
};

export const footerStyles = {
    height: calcSpace(15),
    overflow: 'hidden',
};

export const speakersStyles = {
    position: 'absolute',
    top: calcSpace(21 - 2.5), // Height of the header + 1/2 of the avatar height
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
};
