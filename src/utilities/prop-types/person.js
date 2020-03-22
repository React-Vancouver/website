import PropTypes from 'prop-types';

export default {
  id: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  companyName: PropTypes.string,
  title: PropTypes.string,
  bio: PropTypes.string,
  avatar: {
    src: PropTypes.string,
    fixed: PropTypes.object,
    fluid: PropTypes.object,
  },
  talks: PropTypes.array,
};
