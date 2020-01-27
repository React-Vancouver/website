import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { withSpacing } from '@utilities/styles/spacing';
import { constructStyles } from './Text.styles';

const Text = ({ element: Element, children, className, ...restProps }) => {
    const styles = useMemo(() => constructStyles(restProps), [restProps]);
    return (
        <Element className={className} css={styles}>
            {children}
        </Element>
    );
};

Text.defaultProps = {
    element: 'span',
};

Text.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    element: PropTypes.node,
};

export default withSpacing(Text);
