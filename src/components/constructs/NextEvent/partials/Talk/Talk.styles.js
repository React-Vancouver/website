import S from '@symbols';
const { calcSpace } = S;

export const constructStyles = (isPlaceholder) => ({
    display: 'grid',
    gridTemplateColumns: `${calcSpace(6)} auto`,
    columnGap: calcSpace(2),
    opacity: isPlaceholder ? '50%' : '100%',
});
