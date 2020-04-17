import React, { useContext } from 'react';
import { formatHome } from '@utilities/content';
import { graphql } from 'gatsby';
import { withLayout, LayoutContext } from '@constructs/Layout';

import Home from '@views/Home';
import SEO from '@constructs/SEO';

const IndexPage = ({ data }) => {
  const { setNextEventOpen } = useContext(LayoutContext);
  const openNextEvent = () => {
    setNextEventOpen(true);
  };

  const onGetInvolved = () => {};

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
        creditsData={creditsData}
        currentEventData={currentEventData}
        eventsData={eventsData}
        heroData={heroData}
        navLinks={navLinks}
        onGetInvolved={onGetInvolved}
        onGetTickets={openNextEvent}
        speakersData={speakersData}
        sponsorsData={sponsorsData}
        statsData={statsData}
      />
    </>
  );
};

export default withLayout(IndexPage, { withNav: false });

export const query = graphql`
  query {
    sanityAside {
      ...AsideData
    }
  }
`;
