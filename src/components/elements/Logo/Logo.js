import React from 'react';
import PropTypes from 'prop-types';
import { withSpacing } from '@utilities/styles/spacing';
import logos from './svgs';

const LogoWrapper = ({ type, className }) => {
    const Logo = logos[type];

    if (!Logo) {
        return <div />;
    }

    return <Logo className={className} />;
};

LogoWrapper.defaultProps = {
    type: 'logotype-primary',
};

LogoWrapper.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
};

export default withSpacing(LogoWrapper);
