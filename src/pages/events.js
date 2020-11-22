import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { formatEvents } from '@utilities/content';
import { graphql } from 'gatsby';
import { LayoutContext } from '@constructs/Layout';
import Events from '@views/Events';

import SEO from '@constructs/SEO';

const EventsPage = ({ data }) => {
  const layoutContext = useContext(LayoutContext);
  const formattedData = formatEvents(data);

  return (
    <>
      <SEO page="Events" description="Events at React Vancouver." />
      <Events />
    </>
  );
};

EventsPage.propTypes = {
  data: PropTypes.object,
};

export default EventsPage;

// export const query = graphql``;
