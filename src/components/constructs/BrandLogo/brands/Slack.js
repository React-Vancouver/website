import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ className }) => {
    return (
        <svg
            className={className}
            fill="none"
            viewBox="0 0 32 33"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g fillRule="evenodd" clipPath="url(#clip0)" clipRule="evenodd">
                <path
                    fill="#36C5F0"
                    d="M11.732 0a3.202 3.202 0 00-3.199 3.206 3.203 3.203 0 003.2 3.206h3.201V3.207A3.206 3.206 0 0011.732 0c.002 0 .002 0 0 0zm0 8.55H3.2A3.203 3.203 0 000 11.756a3.203 3.203 0 003.199 3.207h8.533a3.203 3.203 0 003.2-3.205 3.204 3.204 0 00-3.2-3.208z"
                ></path>
                <path
                    fill="#2EB67D"
                    d="M32 11.756a3.203 3.203 0 00-3.2-3.206 3.203 3.203 0 00-3.201 3.206v3.207h3.2A3.204 3.204 0 0032 11.756zm-8.533 0v-8.55A3.204 3.204 0 0020.267 0a3.203 3.203 0 00-3.2 3.206v8.55a3.203 3.203 0 003.199 3.207 3.204 3.204 0 003.2-3.207z"
                ></path>
                <path
                    fill="#ECB22E"
                    d="M20.266 32.064a3.203 3.203 0 003.2-3.206 3.203 3.203 0 00-3.2-3.205h-3.2v3.205a3.205 3.205 0 003.2 3.206zm0-8.552H28.8a3.203 3.203 0 003.2-3.205 3.203 3.203 0 00-3.2-3.207h-8.533a3.203 3.203 0 00-3.2 3.205 3.202 3.202 0 003.2 3.207z"
                ></path>
                <path
                    fill="#E01E5A"
                    d="M0 20.306a3.203 3.203 0 003.2 3.206 3.203 3.203 0 003.2-3.206v-3.205H3.2A3.203 3.203 0 000 20.307zm8.533 0v8.551a3.203 3.203 0 003.2 3.207 3.203 3.203 0 003.2-3.206V20.31a3.2 3.2 0 10-6.4-.003s0 .002 0 0z"
                ></path>
            </g>
            <defs>
                <clipPath id="clip0">
                    <path fill="#fff" d="M0 0H32V32.064H0z"></path>
                </clipPath>
            </defs>
        </svg>
    );
};

Icon.propTypes = {
    className: PropTypes.string,
};

export default Icon;
