import React from 'react';
import PropTypes from 'prop-types';
import { withSpacing } from '@utilities/styles/spacing';
import {
  rootStyles,
  logoStyles,
  contentStyles,
  sponsorStyles,
} from './Hero.styles';
import eventPropTypes from '@utilities/prop-types/event';

import Box from '@elements/Box';
import GatsbyImage from 'gatsby-image';
import Grid from '@elements/Grid';
import Logo from '@elements/Logo';
import Nav from '@constructs/NavGroup';
import Text from '@elements/Text';

const Hero = ({
  className,
  links,
  onButtonClick,
  title,
  description,
  event,
}) => {
  return (
    <div css={rootStyles} className={className}>
      <Box container pt6 css={contentStyles}>
        <Nav
          mb6
          links={links}
          buttonText="Get involved!"
          onButtonClick={onButtonClick}
        />
        <Logo css={logoStyles} />
        <Text my3 element="p" heading color="tertiary">
          <em>{title}</em>
        </Text>
        <Text my3 element="p">
          {description}
        </Text>
        <Text mb2 element="p" caption css={{ textTransform: 'uppercase' }}>
          Sponsored by
        </Text>
        <Grid fluid={20} gap={2}>
          {event?.sponsors.map(({ fluid, fixed, id, companyName }) => {
            if (fluid || fixed) {
              return (
                <GatsbyImage
                  key={id}
                  fluid={fluid}
                  fixed={fixed}
                  alt={`${companyName} logo`}
                />
              );
            } else {
              return (
                <Text key={id} py4 px2 subheading css={sponsorStyles}>
                  {companyName}
                </Text>
              );
            }
          })}
        </Grid>
      </Box>
    </div>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
  links: PropTypes.array,
  onButtonClick: PropTypes.func,
  title: PropTypes.string,
  description: PropTypes.string,
  event: PropTypes.shape(eventPropTypes),
};

export default withSpacing(Hero);
