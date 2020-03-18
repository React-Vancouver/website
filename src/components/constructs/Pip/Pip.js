import React, { useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { withSpacing } from '@utilities/styles/spacing';
import { constructStyles, sizes, colors } from './Pip.styles';

const Pip = ({
    className,
    i,
    onClick,
    withNumber,
    isActive,
    size,
    color,
    background,
}) => {
    const styles = useMemo(
        () =>
            constructStyles({ withNumber, isActive, size, color, background }),
        [withNumber, isActive, size, color, background]
    );

    const handleClick = useCallback(() => onClick(i), []);
    return (
        <div css={styles} className={className} onClick={handleClick}>
            {withNumber ? i + 1 : <>&nbsp;</>}
        </div>
    );
};

Pip.defaultProps = {
    background: 'light',
};

Pip.propTypes = {
    className: PropTypes.string,
    color: PropTypes.oneOf(Object.keys(colors)),
    i: PropTypes.number,
    isActive: PropTypes.bool,
    onClick: PropTypes.func,
    size: PropTypes.oneOf(Object.keys(sizes)),
    background: PropTypes.oneOf(['light', 'dark']),
    withNumber: PropTypes.bool,
};

export default withSpacing(Pip);
