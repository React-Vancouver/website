import React from 'react';
import PropTypes from 'prop-types';
// import { Global } from '@emotion/core'
// import { GLOBAL_STYLES } from 'Global'

const Shell = ({ children }) => {
    return (
        <>
            {/* <Global
                styles={GLOBAL_STYLES}
            /> */}
            {children}
        </>
    );
};

Shell.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Shell;
