import S from '@symbols';

export const rootClasses = {
  minHeight: `calc(100vh - ${S.LAYOUT_FOOTER_HEIGHT} - ${S.LAYOUT_NAV_HEIGHT})`,
};

export const heroStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: S.calcSpace(3),
  [`@media (max-width: ${S.LAYOUT_MOBILE_MAX})`]: {
    gridTemplateColumns: '1fr',
    gap: 0,
  },
};

export const timelineContainerStyles = {
  borderLeft: S.LINE_DEFAULT_BORDER,
  [`@media (max-width: ${S.LAYOUT_MOBILE_MAX})`]: {
    borderLeft: 'none',
  },
};

export const timelineMarkStyles = {
  height: S.calcSpace(2, 0.1),
  width: S.calcSpace(2, 0.1),
  border: S.LINE_DEFAULT_BORDER,
  backgroundColor: S.COLOR_GREYS.WHITE,
  borderRadius: '50%',
  position: 'absolute',
  left: S.calcSpace(-1, -0.1),
  top: S.calcSpace(2, -0.1),
  [`@media (max-width: ${S.LAYOUT_MOBILE_MAX})`]: {
    display: 'none',
  },
};

export const eventStyles = {
  position: 'relative',
  display: 'grid',
  gridTemplateColumns: '1fr 3fr',
  gap: S.calcSpace(3),
  [`@media (max-width: ${S.LAYOUT_MOBILE_MAX})`]: {
    gridTemplateColumns: '1fr',
  },
};
