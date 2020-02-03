import S from '@symbols';
const { calcSpace } = S;

import { base as interactiveBase, card } from '@blocks/interactive';

const base = {
    position: 'relative',
};

export const rootStyles = () => [base, interactiveBase];

export const headerStyles = {
    height: calcSpace(21),
    backgroundColor: S.COLOR_THEME.SECONDARY_D,
    borderRadius: `${S.LINE_BORDER_RADIUS_4} ${S.LINE_BORDER_RADIUS_4} 0 0 `,
};

export const cardStyles = [card, { minHeight: calcSpace(28) }];

export const avatarStyles = {
    position: 'absolute',
    top: calcSpace(4),
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
};
