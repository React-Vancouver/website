import S from '@symbols';
import { cssMap } from '@utilities/styles';

const base = {
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  zIndex: -1,
};

const colors = { ...S.COLOR_THEME, ...S.COLOR_GREYS };
const makeColorModifier = (backgroundColor) => ({ backgroundColor });

export const constructStyles = (props) => [
  cssMap({
    props,
    prop: 'backgroundColor',
    map: colors,
    makeCSS: makeColorModifier,
  }),
];

export const constructBackgroundStyles = ({ src }) => ({
  ...base,
  backgroundImage: `url(${src})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
});

// See https://github.com/gatsbyjs/gatsby/issues/2470#issuecomment-338394370
export const imageStyles = {
  ...base,
  ['& > img']: {
    objectFit: 'cover',
    objectPosition: '50% 50%',
    fontFamily:
      'object-fit: cover !important; object-position: 0% 0% !important;',
  },
};

export const placeholderStyles = {
  ...base,
  backgroundColor: S.COLOR_GREYS.LIGHT,
};
