import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { withSpacing } from '@utilities/styles/spacing';
import { constructStyles, constructIconStyles } from './ButtonWithIcon.styles';
import Icon from '@elements/Icon';

const ButtonWithIcon = ({ onClick, className, icon, ...restProps }) => {
    const styles = useMemo(() => constructStyles(restProps), [restProps]);
    const iconStyles = useMemo(() => constructIconStyles(restProps), [
        restProps,
    ]);
    return (
        <button onClick={onClick} css={styles} className={className}>
            ButtonWithIcon
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
    className: PropTypes.string,
    onClick: PropTypes.func,
    name: PropTypes.string,
};

export default withSpacing(ButtonWithIcon);
