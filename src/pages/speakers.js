import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { formatSpeakers } from '@utilities/content';

import { LayoutContext } from '@constructs/Layout';
import Speakers from '@views/Speakers';
import Box from '@elements/Box';

import SEO from '@constructs/SEO';

const SpeakersPage = ({ data }) => {
  const layoutContext = useContext(LayoutContext);
  const formattedData = formatSpeakers(data);

  return (
    <>
      <SEO page="Speakers" />
      <Speakers data={formattedData}/>
    </>
  );
};

SpeakersPage.propTypes = {
  data: PropTypes.object,
};

export default SpeakersPage;

// export const query = graphql``;
