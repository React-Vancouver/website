import S from '@symbols';

const NEXT_EVENT_WIDTH = '32rem';

export const rootStyles = {
  height: '100vh',
  minHeight: '63.8rem',
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
