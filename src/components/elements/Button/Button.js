import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { withSpacing } from '@utilities/styles/spacing';
import { constructStyles } from './Button.styles';

const Button = ({ className, children, onClick, ...restProps }) => {
    const styles = useMemo(() => constructStyles(restProps), [restProps]);
    return (
        <button css={styles} onClick={onClick} className={className}>
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    onClick: PropTypes.func,
};

export default withSpacing(Button);
