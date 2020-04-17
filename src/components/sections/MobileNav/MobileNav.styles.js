import S from '@symbols';
import { base as interactiveBase } from '@blocks/interactive';

export const rootStyles = {
  width: '100%',
  height: '100%',
  display: 'grid',
  gridTemplateRows: '4.8rem auto 4.8rem',

  ['& > ul']: {
    listStyle: 'none',
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
};

export const headerStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
};

export const constructButtonStyles = ({ isDarkBackground }) => ({
  ...interactiveBase,
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  textDecoration: 'none',
  fontSize: S.calcFontSize(4),
  letterSpacing: '0.1rem',
  appearance: '',
  fontSmoothing: 'antialiased',
  whiteSpace: 'nowrap',
  color: isDarkBackground ? S.COLOR_THEME.SECONDARY_L : S.COLOR_GREYS.GREY_40,

  ['& > span']: {
    fontSize: S.calcFontSize(8),
    verticalAlign: 'middle',
  },
});

export const navItemStyles = {
  display: 'block',
  ['& > a']: {
    textDecoration: 'none',
    textTransform: 'uppercase',
  },
};

export const constructLogoStyles = ({ isDarkBackground }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  height: S.calcSpace(6),
  width: S.calcSpace(6),
  backgroundColor: isDarkBackground
    ? S.COLOR_THEME.SECONDARY_L
    : S.COLOR_GREYS.GREY_40,
});
