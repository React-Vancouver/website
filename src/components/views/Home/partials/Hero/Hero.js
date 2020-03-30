import React from 'react';
import PropTypes from 'prop-types';
import { withSpacing } from '@utilities/styles/spacing';
import {
  contentStyles,
  gradientStyles,
  logoStyles,
  navStyles,
  rootStyles,
  sponsorStyles,
} from './Hero.styles';
import eventPropTypes from '@utilities/prop-types/event';

import Background from '@constructs/Background';
import Box from '@elements/Box';
import ButtonWithIcon from '@elements/ButtonWithIcon';
import GatsbyImage from 'gatsby-image';
import Grid from '@elements/Grid';
import Illustration from '@constructs/Illustration';
import Logo from '@elements/Logo';
import NavGroup from '@constructs/NavGroup';
import Text from '@elements/Text';

const Hero = ({ className, links, onButtonClick, data, event }) => (
  <div css={rootStyles} className={className}>
    <Background {...data.image} />
    <Background css={gradientStyles} />
    <Illustration name="glitch-one" css={{ maxWidth: '144rem' }} />

    <Box container pt6 css={contentStyles}>
      <Box mb6 css={navStyles}>
        <NavGroup links={links} />
        <Box>
          <ButtonWithIcon capped color="secondary_d" onClick={onButtonClick}>
            Get involved!
          </ButtonWithIcon>
        </Box>
      </Box>
      <Logo css={logoStyles} />
      <Text my3 element="p" heading color="tertiary">
        <em>{data?.title}</em>
      </Text>
      <Text my3 element="p">
        {data?.description}
      </Text>
      <Text mb2 element="p" caption css={{ textTransform: 'uppercase' }}>
        Sponsored by
      </Text>
      <Grid fluid={20} gap={2}>
        {event?.sponsors.map(({ fluid, fixed, id, name }) => {
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
  </div>
);

Hero.propTypes = {
  className: PropTypes.string,
  links: PropTypes.array,
  onButtonClick: PropTypes.func,
  data: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.object,
  }),
  event: PropTypes.shape(eventPropTypes),
};

export default withSpacing(Hero);
