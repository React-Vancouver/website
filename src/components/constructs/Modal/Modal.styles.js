import S from '@symbols';

export const overlayStyles = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  backdropFilter: 'blur(7px)',
  backgroundColor: '#0002',
};

export const cardStyles = {
  minHeight: '30vh',
  minWidth: '30vw',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  borderRadius: '1rem',
  backgroundColor: '#FFF',
  boxShadow: S.PLANE_SHADOW_0,
  
};
