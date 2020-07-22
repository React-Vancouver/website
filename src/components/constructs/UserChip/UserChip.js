import React, { useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { withSpacing } from '@utilities/styles/spacing';
import { constructStyles, avatarStyles } from './UserChip.styles';
import personPropTypes from '@utilities/prop-types/person';

import Avatar from '@constructs/Avatar';
import Text from '@elements/Text';

const UserChip = ({ data, text, className, onClick, ...restProps }) => {
  const styles = useMemo(() => constructStyles(restProps), [restProps]);
  const handleClick = useCallback(() => onClick?.(data), [data.id]);

  return (
    <div onClick={handleClick} css={styles} className={className}>
      <Avatar
        alt={`${data.firstName} ${data.lastName} avatar photo`}
        css={avatarStyles}
        firstName={data?.firstName}
        lastName={data?.lastName}
        scale={5}
        {...data?.avatar}
      />
      <Text element="span" color="secondary_d" px2>
        {text ?? `${data.firstName} ${data.lastName}`}
      </Text>
    </div>
  );
};

UserChip.propTypes = {
  className: PropTypes.string,
  data: PropTypes.shape(personPropTypes),
  onClick: PropTypes.func,
  text: PropTypes.string,
};

export default withSpacing(UserChip);
