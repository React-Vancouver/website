import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { withSpacing } from '@utilities/styles/spacing';
import { constructStyles } from './AsideMenu.styles';

const AsideMenu = ({ className, ...restProps }) => {
    const styles = useMemo(() => constructStyles(restProps), [restProps]);
    return (
        <div css={styles} className={className}>
            AsideMenu
        </div>
    );
};

AsideMenu.propTypes = {
    className: PropTypes.string,
};

export default withSpacing(AsideMenu);
