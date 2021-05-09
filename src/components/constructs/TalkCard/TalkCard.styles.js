import S from '@symbols';
const { calcSpace } = S;

import { area, card } from '@blocks/interactive';

const base = {
  position: 'relative',
};

export const rootStyles = () => [base, area, card];

const HEADER_HEIGHT = 6;

export const headerStyles = {
  height: calcSpace(HEADER_HEIGHT),
  backgroundColor: S.COLOR_THEME.SECONDARY_D,
  borderRadius: `${S.LINE_BORDER_RADIUS_4} ${S.LINE_BORDER_RADIUS_4} 0 0 `,
};

export const footerStyles = {
  height: calcSpace(18),
  overflow: 'hidden',
};

export const speakerStyles = {
  position: 'absolute',
  top: calcSpace(HEADER_HEIGHT - 4), // Height of the header + 1/2 of the avatar height
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
};
