import PropTypes from 'prop-types';

export default {
  address: PropTypes.string,
  name: PropTypes.string,
  logo: PropTypes.shape({
    fixed: PropTypes.object,
    fluid: PropTypes.object,
    src: PropTypes.string,
  }),
  googleMapsUrl: PropTypes.string,
};
