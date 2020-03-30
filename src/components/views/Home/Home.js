import React from 'react';
import PropTypes from 'prop-types';
import { withSpacing } from '@utilities/styles/spacing';

import Box from '@elements/Box';
import Credits from '@sections/Credits';
import EventGallery from '@sections/EventGallery';
import Grid from '@elements/Grid';
import Hero from './partials/Hero';
import Illustration from '@constructs/Illustration';
import SpeakerGallery from '@sections/SpeakerGallery';
import Sponsors from '@sections/Sponsors';
import Stat from '@constructs/Stat';
import Text from '@elements/Text';

const Home = ({
  className,
  creditsData,
  currentEventData,
  eventsData,
  heroData,
  navLinks,
  onGetInvolved,
  speakersData,
  sponsorsData,
  statsData,
}) => {
  return (
    <Box className={className}>
      {/* HERO */}
      <Hero
        links={navLinks}
        data={heroData}
        onButtonClick={onGetInvolved}
        event={currentEventData}
      />

      {/* SPONSORS */}
      <Box backgroundColor="grey_40">
        <Box container pt8>
          <Sponsors mb6 background="dark" data={sponsorsData} />
          <Illustration name="glitch-two" />
        </Box>
      </Box>

      {/* STATS */}
      <Grid fixed={3} py15>
        {statsData?.map((statProps) => (
          <Stat key={statProps.id} {...statProps} />
        ))}
      </Grid>

      <Illustration mb8 name="glitch-three" />

      {/* TEXT */}
      <Box container>
        <Text scale={7} element="h2" lead mb4>
          Events
        </Text>
      </Box>
      <EventGallery mb8 data={eventsData} />

      {/* SPEAKERS */}
      <Box container>
        <Text scale={7} element="h2" lead mb4>
          Speakers
        </Text>
      </Box>
      <SpeakerGallery mb8 data={speakersData} />

      {/* CREDITS */}
      <Illustration name="glitch-four" css={{ marginBottom: '-0.1rem' }} />
      <Box backgroundColor="grey_40">
        <Box container py5>
          <Text scale={7} element="h2" lead color="light" mb4>
            Credits
          </Text>
          <Credits data={creditsData} background="dark" />
        </Box>
      </Box>
    </Box>
  );
};

Home.propTypes = {
  className: PropTypes.string,
  creditsData: PropTypes.array,
  currentEventData: PropTypes.object,
  eventsData: PropTypes.array,
  heroData: PropTypes.object,
  navLinks: PropTypes.array,
  onGetInvolved: PropTypes.func,
  speakersData: PropTypes.array,
  sponsorsData: PropTypes.array,
  statsData: PropTypes.array,
};

export default withSpacing(Home);
