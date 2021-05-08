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
import ButtonWithIcon from '@elements/ButtonWithIcon';
import Grid from '@elements/Grid';
import Text from '@elements/Text';
import Image from '@elements/Image';

const Sponsors = ({ className, data, background }) => {
  return (
    <Box my4 css={rootStyles} className={className}>
      <Box css={headingStyles} mb3>
        <Text
          scale={7}
          element="h2"
          lead
          color={background === 'light' ? 'grey_40' : 'grey_90'}
        >
          Sponsors
        </Text>
        <ButtonWithIcon
          color={background === 'light' ? 'secondary_d' : 'primary'}
          capped
          iconName="heart"
        >
          Become a sponsor
        </ButtonWithIcon>
      </Box>
      <Grid fluid={18} gap={2} css={sponsorsStyles}>
        {data.map(({ id, name, logo: gatsbyImageData }) => {
          // TODO: Fix images
          // if (gatsbyImageData) {
          //   return (
          //     <Image key={id} alt={`${name} logo`} data={gatsbyImageData} />
          //   );
          // } else {
          return (
            <Text key={id} py4 px2 subheading css={sponsorStyles}>
              {name}
            </Text>
          );
          // }
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
