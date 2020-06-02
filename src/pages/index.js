import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { formatHome } from '@utilities/content';
import { graphql } from 'gatsby';
import { withLayout, LayoutContext } from '@constructs/Layout';

import Home from '@views/Home';
import SEO from '@constructs/SEO';

const IndexPage = ({ data }) => {
  const { openNextEvent, closeNextEvent } = useContext(LayoutContext);

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
        openNextEvent={openNextEvent}
        closeNextEvent={closeNextEvent}
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

export default withLayout(IndexPage, { isCollapsingNav: true });

export const query = graphql`
  query {
    sanityAside {
      ...AsideData
    }
  }
`;
