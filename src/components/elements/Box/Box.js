import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { withSpacing } from '@utilities/styles/spacing';
import { constructStyles } from './Box.styles';

const Box = ({ className, children, element: Element, ...restProps }) => {
    const styles = useMemo(() => constructStyles(restProps), [restProps]);

    return (
        <div css={styles} className={className}>
            {children}
        </div>
    );
};

Box.defaultProps = {
    element: 'div',
};

Box.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    element: PropTypes.node,
};

export default withSpacing(Box);
