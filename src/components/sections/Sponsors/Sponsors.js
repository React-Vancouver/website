import React from 'react';
import PropTypes from 'prop-types';
import { withSpacing } from '@utilities/styles/spacing';
import {
  rootStyles,
  headingStyles,
  sponsorStyles,
  sponsorsStyles,
} from './Sponsors.styles';
import companyPropTypes from '@utilities/prop-types/company';

import Box from '@elements/Box';
import GatsbyImage from 'gatsby-image';
import Grid from '@elements/Grid';
import Text from '@elements/Text';

const Sponsors = ({ className, data, background }) => {
  return (
    <Box my4 css={rootStyles} className={className}>     
      <Grid fluid={18} gap={2} css={sponsorsStyles}>
        {data.map(({ id, name, logo: { fluid, fixed } }) => {
          if (fluid || fixed) {
            return (
              <GatsbyImage
                key={id}
                fluid={fluid}
                fixed={fixed}
                alt={`${name} logo`}
              />
            );
          } else {
            return (
              <Text key={id} py4 px2 subheading css={sponsorStyles}>
                {name}
              </Text>
            );
          }
        })}
      </Grid>
    </Box>
  );
};

Sponsors.defaultProps = {
  background: 'light',
};

Sponsors.propTypes = {
  background: PropTypes.oneOf(['light', 'dark']),
  className: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.shape(companyPropTypes)),
};

export default withSpacing(Sponsors);
