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
import { illustrationStyles } from '../../Home.styles';
import eventPropTypes from '@utilities/prop-types/event';
import useMedia from '@utilities/hooks/use-media';
import S from '@symbols';

import Background from '@constructs/Background';
import Box from '@elements/Box';
import Button from '@elements/Button';
import ButtonWithIcon from '@elements/ButtonWithIcon';
import Image from '@elements/Image';
import Grid from '@elements/Grid';
import Illustration from '@constructs/Illustration';
import Logo from '@elements/Logo';
import NavGroup from '@constructs/NavGroup';
import Text from '@elements/Text';

const MOBILE_BREAKPOINT = `(max-width: ${S.LAYOUT_MOBILE_MAX})`;

const Hero = ({ className, links, openTray, data, event }) => {
  const { [MOBILE_BREAKPOINT]: isMobile } = useMedia([MOBILE_BREAKPOINT]);

  return (
    <div css={rootStyles} className={className}>
      <Background {...data.image} />
      <Background css={gradientStyles} />
      <Illustration
        name="glitch-one"
        css={[illustrationStyles, { maxWidth: '144rem' }]}
      />
      <Box container pt6 css={contentStyles}>
        {!isMobile && (
          <Box mb6 css={navStyles}>
            <NavGroup links={links} />
            <Box>
              <ButtonWithIcon capped color="secondary_d" onClick={openTray}>
                Get involved!
              </ButtonWithIcon>
            </Box>
          </Box>
        )}
        <Logo css={logoStyles} />
        <Text my3 element="p" heading color="tertiary">
          <em>{data?.title}</em>
        </Text>
        <Text my3 element="p">
          {data?.description}
        </Text>
        {isMobile && (
          <Button mb3 onClick={openTray}>
            Get tickets!
          </Button>
        )}
        <Text mb2 element="p" caption css={{ textTransform: 'uppercase' }}>
          Sponsored by
        </Text>
        <Grid fluid={20} gap={2}>
          {event?.sponsors.map((sponsor) => {
            const { id, name } = sponsor;
            console.log(sponsor);
            if (false) {
              return <Image key={id} alt={`${name} logo`} />;
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
};

Hero.propTypes = {
  className: PropTypes.string,
  links: PropTypes.array,
  openTray: PropTypes.func,
  closeTray: PropTypes.func,
  data: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.object,
  }),
  event: PropTypes.shape(eventPropTypes),
};

export default React.memo(withSpacing(Hero));
