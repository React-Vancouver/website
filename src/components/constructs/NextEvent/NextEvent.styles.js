import S from '@symbols';

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
