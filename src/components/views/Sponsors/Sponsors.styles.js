import S from '@symbols';

export const heroStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: S.calcSpace(3),
  [`@media (max-width: ${S.LAYOUT_MOBILE_MAX})`]: {
    gridTemplateColumns: '1fr',
    gap: 0,
  },
};

export const optionsStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(20rem, 1fr))',
  gap: S.calcSpace(3),
  [`@media (max-width: ${S.LAYOUT_MOBILE_MAX})`]: {
    gridTemplateColumns: '1fr',
    gap: 0,
  },
}
