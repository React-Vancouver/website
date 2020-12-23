import S from '@symbols';

const base = {
  position: 'absolute',
  color: S.COLOR_THEME.PRIMARY_L,
  textShadow: S.makePlaneShadow({ color: S.COLOR_THEME.PRIMARY_L, level: 0 }),
}

export const makeRootStyles = (i) => {
  switch (i) {
    case 0: {
      return { ...base, left: '20%', top: '14%' };
    }
    case 1: {
      return { ...base, left: '68%', top: '6%' };
    }
    case 2: {
      return { ...base, top: '82%', left: '2%' };
    }
    case 3: {
      return { ...base, top: '4%', left: '2%' };
    }
    case 4: {
      return { ...base, top: '50%', left: '54%' };
    }
    case 5: {
      return { ...base, top: '80%', left: '40%' };
    }
    case 6: {
      return { ...base, top: '48%', left: '10%' };
    }
  }
};
