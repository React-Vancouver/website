import S from '@symbols';
import { secondaryCardAnimated } from '@blocks/interactive';

export const carouselItemStyles = {
  width: '42.4rem',
  marginRight: '2.4rem',
  ['&:last-of-type']: {
    marginRight: 0,
  },
};

export const placeholderItemStyles = {
  ...secondaryCardAnimated,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export const carouselStyles = {
  overflowX: 'hidden',
};

export const carouselContentStyles = {
  position: 'relative',
  display: 'flex',
  paddingBottom: '1.6rem',
  marginLeft: `calc((100% - ${S.LAYOUT_CONTAINER}) / 2)`,
};

export const footerStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};
