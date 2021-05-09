import React from 'react';
import PropTypes from 'prop-types';
import { withSpacing } from '@utilities/styles/spacing';

import BlockContent from '@sanity/block-content-to-react';
import Box from '@elements/Box';
import Figure from '@constructs/Figure';
import Text from '@elements/Text';

const serializers = {
  types: {
    figure: Figure,
  },
};

const AboutUs = ({ className, blocks, title }) => {
  return (
    <Box my10 article className={className}>
      <Text element="h1" title color="tertiary">
        {title}
      </Text>
      <BlockContent blocks={blocks} serializers={serializers} />
    </Box>
  );
};

AboutUs.propTypes = {
  blocks: PropTypes.array.isRequired,
  className: PropTypes.string,
  title: PropTypes.string,
};

export default withSpacing(AboutUs);
