import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { withSpacing } from '@utilities/styles/spacing';
import personPropTypes from '@utilities/prop-types/person';

import Box from '@elements/Box';
import UserChip from '@constructs/UserChip';

const Credits = ({ className, data }) => {
  const onClick = useCallback((data) => console.log(data), []);

  return (
    <Box className={className}>
      {data.map((person) => (
        <UserChip mr2 mb2 data={person} key={person.id} onClick={onClick} />
      ))}
    </Box>
  );
};

Credits.propTypes = {
  className: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.shape(personPropTypes)),
};

export default withSpacing(Credits);
