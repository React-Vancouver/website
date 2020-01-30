import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { withSpacing } from '@utilities/styles/spacing';
import { constructStyles } from './Icon.styles';
import icons from './icons';

const Icon = ({ name, className, ...restProps }) => {
    const styles = useMemo(() => constructStyles(restProps), [restProps]);
    const Icon = icons[name];

    console.log(icons);
    console.log(Icon);

    if (!Icon) {
        return <></>;
    }

    return <Icon css={styles} className={className} />;
};

Icon.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
};

export default withSpacing(Icon);
