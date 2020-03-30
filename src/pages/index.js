import React, { useContext } from 'react';
import { withLayout, LayoutContext } from '@constructs/Layout';
import { formatHome } from '@utilities/content';

import Home from '@views/Home';
import SEO from '@constructs/SEO';

const IndexPage = ({ data }) => {
  const { isNextEventOpen, setNextEventOpen } = useContext(LayoutContext);
  const toggle = () => {
    console.log('toggle');
    setNextEventOpen(!isNextEventOpen);
  };

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
      <SEO title="Home" />
      <Home
        creditsData={creditsData}
        currentEventData={currentEventData}
        eventsData={eventsData}
        heroData={heroData}
        navLinks={navLinks}
        onGetInvolved={toggle}
        speakersData={speakersData}
        sponsorsData={sponsorsData}
        statsData={statsData}
      />
    </>
  );
};

export default withLayout(IndexPage, { withNav: false });
