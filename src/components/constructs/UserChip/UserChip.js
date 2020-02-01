import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { withSpacing } from '@utilities/styles/spacing';
import { constructStyles, avatarStyles } from './UserChip.styles';
import Avatar from '@elements/Avatar';
import Text from '@elements/Text';

const UserChip = ({ avatarProps, className, onClick, text, ...restProps }) => {
    const styles = useMemo(() => constructStyles(restProps), [restProps]);
    return (
        <div onClick={onClick} css={styles} className={className}>
            <Avatar css={avatarStyles} scale={5} {...avatarProps} />
            <Text element="span" color="secondary_d" px2>
                {text}
            </Text>
        </div>
    );
};

UserChip.propTypes = {
    avatarProps: PropTypes.object,
    className: PropTypes.string,
    onClick: PropTypes.func,
    text: PropTypes.string,
};

export default withSpacing(UserChip);
