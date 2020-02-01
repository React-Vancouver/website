import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { withSpacing } from '@utilities/styles/spacing';
import { constructStyles } from './Grid.styles';

const Grid = ({ children, className, ...restProps }) => {
    const styles = useMemo(() => constructStyles(restProps), [restProps]);
    return (
        <div css={styles} className={className}>
            {children}
        </div>
    );
};

Grid.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    columns: PropTypes.number,
};

export default withSpacing(Grid);
