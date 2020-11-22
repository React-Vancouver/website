import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { formatHome } from '@utilities/content';
import { LayoutContext } from '@constructs/Layout';

import Home from '@views/Home';
import SEO from '@constructs/SEO';

const IndexPage = ({ data }) => {
  const { isTrayOpen, openTray, closeTray } = useContext(LayoutContext);

  const {
    creditsData,
    currentEventData,
    eventsData,
    heroData,
    navLinks,
    speakersData,
    sponsorsData,
    statsData,
  } = formatHome(data);
  return (
    <>
      <SEO page="Home" />
      <Home
        closeTray={closeTray}
        creditsData={creditsData}
        currentEventData={currentEventData}
        eventsData={eventsData}
        heroData={heroData}
        isTrayOpen={isTrayOpen}
        navLinks={navLinks}
        openTray={openTray}
        speakersData={speakersData}
        sponsorsData={sponsorsData}
        statsData={statsData}
      />
    </>
  );
};

IndexPage.propTypes = {
  data: PropTypes.object,
};

export default IndexPage;
