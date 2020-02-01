import S from '@symbols';
import { base as interactiveBase } from '@blocks/interactive';

const { calcSpace } = S;

const base = {
    ...interactiveBase,
    display: 'inline-grid',
    gridTemplateColumns: `${calcSpace(5)} auto`,
    borderRadius: calcSpace(5 / 2),
    background: S.COLOR_GREYS.WHITE,
    height: calcSpace(5),
    boxShadow: S.PLANE_SHADOW_0,
    ['& > span']: {
        lineHeight: calcSpace(5),
    },
};

export const constructStyles = () => [base];

export const avatarStyles = {
    display: 'inline-block',
};
