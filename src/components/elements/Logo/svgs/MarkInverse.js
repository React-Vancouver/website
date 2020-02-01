import React from 'react';
import PropTypes from 'prop-types';

const MarkInverse = ({ className }) => (
    <svg
        alt="React Vancouver logo"
        className={className}
        fill="none"
        viewBox="0 0 110 54"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fill="#E8E5FA"
            fillRule="evenodd"
            d="M27.676 53.13l-9.913-19.149h-6.106v19.15H0V0h18.318c2.75 0 5.327.272 7.732.815 2.406.543 4.52 1.453 6.344 2.73 1.824 1.276 3.265 2.974 4.322 5.093 1.057 2.119 1.586 4.753 1.586 7.904 0 3.912-.846 7.13-2.538 9.657-1.691 2.526-3.912 4.414-6.66 5.663L40.76 53.131H27.676zM11.657 24.448h5.71c6.29 0 9.436-2.635 9.436-7.905 0-2.607-.793-4.427-2.379-5.46-1.586-1.032-3.938-1.548-7.057-1.548h-5.71v14.913z"
            clipRule="evenodd"
        ></path>
        <path
            fill="#68E0CF"
            fillRule="evenodd"
            d="M42 0h12.37l6.186 24.773a191.232 191.232 0 012.102 8.515 301.383 301.383 0 002.022 8.516h.317a239.096 239.096 0 002.141-8.516 440.339 440.339 0 012.062-8.515L75.306 0h11.895L71.658 53.13H57.622L42 0z"
            clipRule="evenodd"
        ></path>
        <path
            fill="#E8E5FA"
            fillRule="evenodd"
            d="M42 0h12.37l14.063 53.13H57.622L42 0z"
            clipRule="evenodd"
        ></path>
        <path
            fill="#F8736B"
            fillRule="evenodd"
            d="M109.433 0h-12.37L83 53.13h10.811L109.433 0z"
            clipRule="evenodd"
        ></path>
    </svg>
);

MarkInverse.propTypes = {
    className: PropTypes.string,
};

export default React.memo(MarkInverse);
