import React from 'react';
import PropTypes from 'prop-types';

const Placeholder = ({ className, firstName, lastName }) => (
  <div className={className}>
    <span>
      {firstName[0]}
      {lastName[0]}
    </span>
  </div>
);

Placeholder.propTypes = {
  className: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
};

export default Placeholder;
