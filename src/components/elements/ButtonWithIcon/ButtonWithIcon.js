import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { withSpacing } from '@utilities/styles/spacing';
import { constructStyles, constructIconStyles } from './ButtonWithIcon.styles';
import Icon from '@elements/Icon';

const ButtonWithIcon = ({
    children,
    className,
    icon,
    onClick,
    ...restProps
}) => {
    const styles = useMemo(() => constructStyles(restProps), [restProps]);
    const iconStyles = useMemo(() => constructIconStyles(restProps), [
        restProps,
    ]);
    return (
        <button onClick={onClick} css={styles} className={className}>
            {children}
            <span css={iconStyles}>
                <Icon name={icon} />
            </span>
        </button>
    );
};

ButtonWithIcon.defaultProps = {
    color: 'action',
    size: 'medium',
    icon: 'pointer',
};

ButtonWithIcon.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    onClick: PropTypes.func,
    icon: PropTypes.string,
};

export default withSpacing(ButtonWithIcon);
