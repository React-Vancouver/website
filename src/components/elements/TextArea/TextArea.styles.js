import S from '@symbols';


export const rootStyles = {
  position: 'relative',
  marginTop: '0.6rem',
};

export const inputStyles = {
  minHeight: S.calcSpace(10),
  border: S.LINE_DEFAULT_BORDER,
  borderRadius: S.LINE_BORDER_RADIUS_0,
  padding: S.calcSpace(2),
  color: S.COLOR_GREYS.DARK,
  transition: S.MOTION_DEFAULT_TRANSITION,
  width: '100%',
  lineHeight: S.calcSpace(2),
  '&:focus': {
      border: `0.0625rem solid ${S.COLOR_THEME.SECONDARY_D}`,
      outlineOffset: 0,
      outline: 'none',
    '& ~ label': {
         color: S.COLOR_THEME.SECONDARY_D,
    }
  },
  '&::placeholder': {
    color: S.COLOR_GREYS.MEDIUM,
  }
}

export const labelStyles = {
  position: 'absolute',
  background: S.COLOR_GREYS.WHITE,
  left: '0.9rem',
  lineHeight: 1,
  top: '-0.6rem',
  transition: S.MOTION_DEFAULT_TRANSITION,
}
