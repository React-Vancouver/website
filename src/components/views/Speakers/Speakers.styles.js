import S from '@symbols';

export const rootStyles = {
  minHeight: 'calc(100vh - 16rem);',
};

export const heroStyles = {
  position: 'relative',
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: S.calcSpace(3),
  '& > div': {
    position: 'relative',
  },
  '&::before': {
    content: '""',
    width: '100%',
    height: S.calcSpace(44),
    backgroundColor: S.COLOR_GREYS.DARK,
    borderRadius: S.LINE_BORDER_RADIUS_4,
    position: 'absolute',
    top: 0,
  },
  [`@media (max-width: ${S.LAYOUT_MOBILE_MAX})`]: {
    gridTemplateColumns: '1fr',
  },
};

export const formInnerStyles = {
  display: 'grid',
  gap: S.calcSpace(3),
  gridTemplateColumns: `repeat(2, 1fr)`,
}

export const wallStyles = {
  display: 'grid',
  gap: S.calcSpace(3),
  gridTemplateColumns: `repeat(auto-fit, minmax(${S.calcSpace(28)}, 1fr))`,
}

export const profilePhotoStyles = {
  position: 'relative',
  height: S.calcSpace(20),
  borderRadius: S.LINE_BORDER_RADIUS_0,
  overflow: 'hidden',

  '& > div': {
    zIndex: 0,
  }
}
