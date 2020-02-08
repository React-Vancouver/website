import React from 'react';
import PropTypes from 'prop-types';
import { withSpacing } from '@utilities/styles/spacing';
import brands from './brands';

const BrandLogoWrapper = ({ name, className }) => {
    const BrandLogo = brands[name];

    if (!BrandLogo) {
        return <div />;
    }

    return <BrandLogo className={className} />;
};

BrandLogoWrapper.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
};

export default withSpacing(BrandLogoWrapper);
