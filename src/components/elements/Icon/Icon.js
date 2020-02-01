import React from 'react';
import PropTypes from 'prop-types';
import { withSpacing } from '@utilities/styles/spacing';
import icons from './icons';

const IconWrapper = ({ name, className }) => {
    const Icon = icons[name];

    if (!Icon) {
        return <div />;
    }

    return <Icon className={className} />;
};

IconWrapper.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
};

export default withSpacing(IconWrapper);
