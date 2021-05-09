import PropTypes from 'prop-types';

export default {
  id: PropTypes.string,
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  host: PropTypes.object,
  photos: PropTypes.array,
  talks: PropTypes.array,
};
