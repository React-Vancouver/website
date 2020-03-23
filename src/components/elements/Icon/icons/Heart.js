import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 13 11"
      className={className}
      alt="Heart icon"
    >
      <path
        fill="currentColor"
        d="M11.828.977c.469.421.82.914 1.008 1.5.187.609.21 1.195.07 1.804a3.137 3.137 0 01-.844 1.547L7.54 10.516A.748.748 0 017 10.75a.679.679 0 01-.539-.234L1.938 5.852a3.165 3.165 0 01-.868-1.57c-.14-.61-.093-1.196.094-1.805a3.225 3.225 0 011.008-1.5c.422-.352.89-.586 1.43-.68a3.263 3.263 0 011.57.117c.516.188.96.469 1.36.867L7 1.75l.469-.469c.375-.398.844-.68 1.36-.867a3.242 3.242 0 011.57-.117 3.109 3.109 0 011.43.68z"
      ></path>
    </svg>
  );
};

Icon.propTypes = {
  className: PropTypes.string,
};

export default React.memo(Icon);
