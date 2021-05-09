import S from '@symbols';
import { mobilePadding } from '@blocks/container';

export const NEXT_EVENT_WIDTH = '36rem';
export const ASIDE_DESKTOP_WIDTH = '8rem';
export const ASIDE_MOBILE_HEIGHT = S.calcSpace(10);

export const rootStyles = {
  minHeight: '100%',
  minHeight: '100vh', // eslint-disable-line no-dupe-keys
  position: 'relative',
  overflowX: 'hidden',
  width: '100%',
};

export const asideStyles = {
  position: 'fixed',
  [`@media (max-width: ${S.LAYOUT_MOBILE_MAX})`]: {
    width: '100%',
    height: ASIDE_MOBILE_HEIGHT,
    bottom: 0,
    left: 0,
    zIndex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    ...mobilePadding,
  },
  [`@media (min-width: ${S.LAYOUT_TABLET_MIN})`]: {
    display: 'grid',
    gridAutoColumns: '8rem',
    gridAutoRows: S.calcSpace(10),
    rowGap: S.calcSpace(2),
    height: '100%',
    height: '100vh', // eslint-disable-line no-dupe-keys
    width: ASIDE_DESKTOP_WIDTH,
    paddingTop: S.calcSpace(4),
    paddingBottom: S.calcSpace(4),
  },
};

export const nextEventStyles = {
  right: 0,
  width: NEXT_EVENT_WIDTH,
  height: '100vh',
  paddingTop: S.calcSpace(4),
  paddingBottom: S.calcSpace(4),
  zIndex: 1000,
  position: 'fixed',
};

export const wrapperStyles = {
  marginBottom: ASIDE_MOBILE_HEIGHT,

  [`@media (min-width: ${S.LAYOUT_TABLET_MIN})`]: {
    marginBottom: 0,
    marginLeft: ASIDE_DESKTOP_WIDTH,
  },
};

const subtract = (amount) => `- ${amount}`;
export const constructChildrenStyles = ({ withFooter, withNav }) => ({
  paddingTop: withNav ? S.LAYOUT_NAV_HEIGHT : 0,
  minHeight: `calc(100vh ${withFooter
    ? subtract(S.LAYOUT_FOOTER_HEIGHT)
    : ''
  })`,
});
