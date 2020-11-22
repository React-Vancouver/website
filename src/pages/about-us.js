import React from 'react';
import PropTypes from 'prop-types';
import { formatAboutUs } from '@utilities/content';
import { graphql } from 'gatsby';

import SEO from '@constructs/SEO';
import AboutUs from '@views/AboutUs';

const AboutUsPage = ({ data }) => {
  const { blocks, title, description } = formatAboutUs(data);

  return (
    <>
      <SEO page={title} description={description} />
      <AboutUs blocks={blocks} title={title} />
    </>
  );
};

AboutUsPage.propTypes = {
  data: PropTypes.object,
};

export default AboutUsPage;

export const query = graphql`
  query {
    allSanityAboutUs {
      nodes {
        title
        _rawText
      }
    }
  }
`;
