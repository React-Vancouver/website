import S from '@symbols';
import { base as interactiveBase } from '@blocks/interactive';

export const rootStyles = {
  backgroundColor: S.COLOR_THEME.SECONDARY_D,
  height: '100%',
  borderRadius: `${S.LINE_BORDER_RADIUS_ACCENT} 0 0 ${S.LINE_BORDER_RADIUS_ACCENT}`,
  position: 'relative',
};

export const buttonStyles = {
  position: 'absolute',
  bottom: S.calcSpace(3),
  width: 'calc(100% - 5.4rem - 5.4rem)',
  left: '5.4rem',
};

export const closeStyles = {
  ...interactiveBase,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  textDecoration: 'none',
  fontSize: S.calcFontSize(4),
  letterSpacing: '0.1rem',
  appearance: '',
  fontSmoothing: 'antialiased',
  whiteSpace: 'nowrap',
  color: S.COLOR_GREYS.WHITE,

  ['& > span']: {
    fontSize: S.calcFontSize(8),
    verticalAlign: 'middle',
  },
};
