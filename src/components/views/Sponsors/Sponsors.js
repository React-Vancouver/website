import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { withSpacing } from '@utilities/styles/spacing';
import { heroStyles, optionsStyles } from './Sponsors.styles';

import Box from '@elements/Box';
import Button from '@elements/Button';
import Text from '@elements/Text';

const Sponsors = ({ className, optionsData }) => {
  return (
    <Box className={className}>
      {/* Hero */}
      <Box container>
        <Box
          px4
          pb4
          pt8
          my8
          backgroundColor="grey_90"
          corner="lg"
          css={heroStyles}
        >
          <Text element="h1" title scale={20} color="grey_30">
            Sponsors
          </Text>
          <Box>
            <Text element="h2" mt2 mb8 subheading color="grey_40">
              Get involved with the community of front end engineers. We are
              always looking for partners to participate in our events.
            </Text>
            <Button mb4>Become a Sponsor</Button>
          </Box>
        </Box>
      </Box>

      {/* Options */}
      <Box container css={optionsStyles} pb4>
        {optionsData.map(({ id, title, description, commitment }) => (
          <Box key={id}>
            <Text element="p" caption>
              Option
            </Text>
            <Text title element="h2" color="primary">
              {title}
            </Text>
            <Text element="p">
              {description}
            </Text>
            <Text element="p" emphasis>
              {commitment}
            </Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

Sponsors.propTypes = {
  className: PropTypes.string,
};

export default withSpacing(Sponsors);
