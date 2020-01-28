import React from 'react';
import PropTypes from 'prop-types';
import { withSpacing } from '@utilities/styles/spacing';

const Box = ({ className }) => {
    return (
        <div className={className}>
            Box
        </div>
    )
};

Box.propTypes = {
    className: PropTypes.string,
};

export default withSpacing(Box);
