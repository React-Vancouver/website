import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { formatSponsors } from '@utilities/content';
import { graphql } from 'gatsby';
import { withLayout, LayoutContext } from '@constructs/Layout';

import SEO from '@constructs/SEO';
import Sponsors from '@views/Sponsors';

const SponsorsPage = ({ data }) => {
  // const layoutContext = useContext(LayoutContext);
  const buffer = formatSponsors(data);

  return (
    <>
      <SEO page="Sponsors" />
      <Sponsors data={buffer} />
    </>
  );
};

SponsorsPage.propTypes = {
  data: PropTypes.object,
};

export default withLayout(SponsorsPage);

// export const query = graphql``;
