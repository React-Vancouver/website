import S from '@symbols';

import { NEXT_EVENT_WIDTH } from '@constructs/Layout/Layout.styles';

export const rootStyles = {
  position: 'relative',
  height: '100vh',
  minHeight: '63.8rem',
};

export const gradientStyles = {
  backgroundColor: '#F5F6F9',
  background:
    'linear-gradient(201.04deg, #F5F6F9 41.48%, rgba(245, 246, 249, 0.78) 94.92%)',
};

export const contentStyles = {
  paddingRight: `calc(${NEXT_EVENT_WIDTH} - (100vw - ${S.LAYOUT_CONTAINER}) / 2 + 8rem)`,
};

export const logoStyles = {
  width: '48rem',
};

export const sponsorStyles = {
  display: 'inline-block',
  backgroundColor: S.COLOR_THEME.SECONDARY_L,
  borderRadius: S.LINE_BORDER_RADIUS,
  textAlign: 'center',
};

export const navStyles = {
  display: 'grid',
  gridTemplateColumns: 'auto 18rem;',
  ['& > *:last-child']: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
};
