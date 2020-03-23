import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { withSpacing } from '@utilities/styles/spacing';
import personPropTypes from '@utilities/prop-types/person';

import Box from '@elements/Box';
import Text from '@elements/Text';
import UserChip from '@constructs/UserChip';

const Credits = ({ className, data, title, background }) => {
  const onClick = useCallback((data) => console.log(data), []);
  const color = background === 'light' ? 'grey_40' : 'white';

  return (
    <div className={className}>
      <Box mb4>
        <Text title color={color}>
          {title}
        </Text>
      </Box>
      <Box>
        {data.map((person) => (
          <UserChip mr2 mb2 data={person} key={person.id} onClick={onClick} />
        ))}
      </Box>
    </div>
  );
};

Credits.defaultProps = {
  title: 'Credits',
  background: 'light',
};

Credits.propTypes = {
  background: PropTypes.oneOf(['light', 'dark']),
  className: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.shape(personPropTypes)),
  title: PropTypes.string,
};

export default withSpacing(Credits);
