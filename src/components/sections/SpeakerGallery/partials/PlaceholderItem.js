import React from 'react';
import PropTypes from 'prop-types';
import {
  carouselItemStyles,
  placeholderItemStyles,
} from '../SpeakerGallery.styles';

import Box from '@elements/Box';
import Text from '@elements/Text';

const PlaceholderItem = React.forwardRef(({ onClick }, ref) => (
  <div css={carouselItemStyles} ref={ref}>
    <Box css={placeholderItemStyles} onClick={onClick}>
      <Text heading color="secondary_d" css={{ textAlign: 'center' }}>
        👀 See all speakers
      </Text>
    </Box>
  </div>
));

PlaceholderItem.displayName = 'SpeakerGalleryPlaceholderItem';
PlaceholderItem.propTypes = {
  onClick: PropTypes.func,
};

export default PlaceholderItem;
