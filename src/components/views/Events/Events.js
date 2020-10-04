import React from 'react';
import PropTypes from 'prop-types';
import { withSpacing } from '@utilities/styles/spacing';

import Box from '@elements/Box';
import Text from '@elements/Text';

const Events = ({ className }) => {
  return (
    <Box className={className} backgroundColor="grey_40">
      <Box container pt8>
        <Text>Events</Text>
      </Box>
    </Box>
  );
};

Events.propTypes = {
  className: PropTypes.string,
};

export default withSpacing(Events);
