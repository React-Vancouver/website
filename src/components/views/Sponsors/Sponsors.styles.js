import S from '@symbols';

const base = {};

export const LevelStyles = {
  flexDirection: 'row',
  display: 'flex',
  alignSelf: 'stretch',
  alignItems: 'center',
  margin: '5rem 0',
  justifyContent: 'space-between',
};

export const ColumnStyles = {
  flexDirection: 'column',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  width: '40%',
};

export const textBlockStyles = {
  maxWidth: '40%',  
};

export const constructStyles = (props) => [base];
