import React from 'react';
import PropTypes from 'prop-types';
import { withSpacing } from '@utilities/styles/spacing';
// import { constructStyles } from './Home.styles';

import Box from '@elements/Box';
import Illustration from '@constructs/Illustration';
import Hero from '@sections/Hero';
import Sponsors from '@sections/Sponsors';
import Stat from '@constructs/Stat';
import EventGallery from '@sections/EventGallery';
import SpeakerGallery from '@sections/SpeakerGallery';
import Credits from '@sections/Credits';
import Footer from '@sections/Footer';

const Home = ({
  className,
  creditsData,
  eventsData,
  navLinks,
  onGetInvolved,
  speakersData,
  sponsorsData,
  statsData,
}) => {
  return (
    <Box className={className}>
      <Illustration name="glitch-one" />
      <Hero links={navLinks} onButtonClick={onGetInvolved} />
      <Sponsors data={sponsorsData} />
      <Illustration name="glitch-two" />
      <Box>
        {statsData?.map((statProps) => (
          <Stat {...statProps} />
        ))}
      </Box>
      <Illustration name="glitch-three" />
      <EventGallery data={eventsData} />
      <SpeakerGallery data={speakersData} />
      <Illustration name="glitch-four" />
      <Credits data={creditsData} />
      <Footer links={navLinks} onButtonClick={onGetInvolved} />
    </Box>
  );
};

Home.propTypes = {
  className: PropTypes.string,
  creditsData: PropTypes.array,
  eventsData: PropTypes.array,
  navLinks: PropTypes.array,
  speakersData: PropTypes.array,
  sponsorsData: PropTypes.array,
  statsData: PropTypes.array,
  onGetInvolved: PropTypes.func,
};

export default withSpacing(Home);
