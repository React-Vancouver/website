import S from '@symbols';

import { ASIDE_DESKTOP_WIDTH } from '@constructs/Layout/Layout.styles';

export const asideStyles = {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  zIndex: 1000,
  top: 0,
};

export const mobileNavStyles = {
  position: 'fixed',
  width: '100%',
  zIndex: 100,
  top: 0,
  ['& > div']: {
    display: 'grid',
    height: S.calcSpace(7),
    gridTemplateColumns: '5.4rem 2fr 1fr',
    columnGap: '1.6rem',
  },
};

export const navStyles = {
  position: 'fixed',
  width: `calc(100% - ${ASIDE_DESKTOP_WIDTH})`,
  zIndex: 100,
  top: 0,
};

export const menuButtonStyles = {
  color: S.COLOR_GREYS.WHITE,
  display: 'grid',
  gridTemplateColumns: 'auto 2.4rem',
  columnGap: '0.8rem',
  cursor: 'pointer',
  ['& > *:first-child']: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
};
