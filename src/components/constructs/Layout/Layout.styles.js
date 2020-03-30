import S from '@symbols';
import { ASIDE_WIDTH } from '@constructs/AsideMenu/AsideMenu.styles';

export const NEXT_EVENT_WIDTH = '36rem';

const FOOTER_HEIGHT = '8rem';
const NAV_HEIGHT = '8rem';

export const rootStyles = {
  minHeight: '100%',
  minHeight: '100vh', // eslint-disable-line no-dupe-keys
  position: 'relative',
  overflowX: 'hidden',
  width: '100%',
};

export const asideStyles = {
  position: 'fixed',
  left: 0,
  height: '100%',
  height: '100vh', // eslint-disable-line no-dupe-keys
};

export const nextEventStyles = {
  position: 'absolute',
  right: 0,
  width: NEXT_EVENT_WIDTH,
  height: '100vh',
  paddingTop: S.calcSpace(4),
  paddingBottom: S.calcSpace(4),
  zIndex: 1000,
};

export const wrapperStyles = {
  marginLeft: ASIDE_WIDTH,
};

const subtract = (amount) => `- ${amount}`;

export const constructChildrenStyles = ({ withFooter, withNav }) => ({
  minHeight: `calc(100vh ${withFooter ? subtract(FOOTER_HEIGHT) : ''} ${
    withNav ? subtract(NAV_HEIGHT) : ''
  })`,
});
