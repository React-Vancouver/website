import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { formatSponsors } from '@utilities/content';
import { graphql } from 'gatsby';
import { LayoutContext } from '@constructs/Layout';

import SEO from '@constructs/SEO';
import Sponsors from '@views/Sponsors';

const SponsorsPage = ({ data }) => {
  const layoutContext = useContext(LayoutContext);
  const sponsorsData = formatSponsors(data);

  return (
    <>
      <SEO page="SponsorsPage" description={sponsorsData.description}/>
      <Sponsors sponsorsData={sponsorsData} />
    </>
  );
};

SponsorsPage.propTypes = {
  data: PropTypes.object,
};

export default SponsorsPage;

export const query = graphql`
  query SponsorsPageQuery {
    sanitySponsorsPage(_id: {eq: "sponsors-page"}) {
      description
      title
      catchLine
      cta {
        isAction
        title
        isLink {
          title
          url
        }
      }
      sponsorshipOptions {
        _key
        commitment
        description
        title
      }
    }
  }
`;

