import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { formatSponsors } from '@utilities/content';
import { graphql } from 'gatsby';
import { LayoutContext } from '@constructs/Layout';

import SEO from '@constructs/SEO';
import Sponsors from '@views/Sponsors';

const SponsorsPage = ({ data }) => {
  const layoutContext = useContext(LayoutContext);
  const { optionsData } = formatSponsors(data);

  return (
    <>
      <SEO page="SponsorsPage" />
      <Sponsors optionsData={optionsData} />
    </>
  );
};

SponsorsPage.propTypes = {
  data: PropTypes.object,
};

export default SponsorsPage;

// export const query = graphql``;
