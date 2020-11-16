import S from '@symbols';

export const rootStyles = {
  width: '100vw',
  overflowX: 'hidden',
};

export const headingStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

export const illustrationStyles = {
  [`@media (max-width: ${S.LAYOUT_MOBILE_MAX})`]: {
    width: '240%',
    marginLeft: '-50%',
  },
};
