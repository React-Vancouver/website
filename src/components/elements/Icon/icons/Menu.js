import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 102 87"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.065 79.802a7 7 0 016.001-7.873l86.126-11.612a7 7 0 011.87 13.874L8.938 85.804a7 7 0 01-7.872-6.002zM1.065 50.174A7 7 0 017.066 42.3L93.193 30.69a7 7 0 011.87 13.874L8.938 56.176a7 7 0 01-7.872-6.002zM1.065 20.546a7 7 0 016.001-7.873L93.193 1.061a7 7 0 011.87 13.874L8.938 26.548a7 7 0 01-7.872-6.002z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

Icon.propTypes = {
  className: PropTypes.string,
};

export default React.memo(Icon);
