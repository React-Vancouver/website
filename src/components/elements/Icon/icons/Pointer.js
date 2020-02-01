import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 8 13"
            className={className}
            alt="Pointer icon"
        >
            <path
                fill="currentColor"
                d="M7.328 8.21H4.844l1.312 3.188a.4.4 0 010 .329.43.43 0 01-.234.234l-1.149.516a.478.478 0 01-.328-.024.351.351 0 01-.21-.21L2.991 9.218.953 11.305c-.125.14-.273.172-.445.093A.407.407 0 01.25 11V.922C.25.734.336.609.508.547.695.469.844.492.953.617l6.68 6.867c.125.125.148.282.07.47-.062.171-.187.257-.375.257z"
            ></path>
        </svg>
    );
};

Icon.propTypes = {
    className: PropTypes.string,
};

export default React.memo(Icon);
