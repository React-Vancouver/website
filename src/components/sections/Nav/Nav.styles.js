import S from '@symbols';

export const rootStyles = {
  display: 'grid',
  gridTemplateColumns: '28rem auto 18rem',
  gap: '4rem',
  [`@media (max-width: ${S.LAYOUT_MOBILE_MAX})`]: {
    gridTemplateColumns: '1fr',
  },
  ['& > *']: {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
  },
};
