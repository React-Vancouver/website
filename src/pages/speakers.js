import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { formatSpeakers } from '@utilities/content';

import { LayoutContext } from '@constructs/Layout';
import Speakers from '@views/Speakers';

import SEO from '@constructs/SEO';

const SpeakersPage = ({ data }) => {
  const layoutContext = useContext(LayoutContext);
  const { speakersData, topicsData, description, ...rest } = formatSpeakers(
    data
  );

  return (
    <>
      <SEO page="Speakers" description={description} />
      <Speakers speakersData={speakersData} topicsData={topicsData} {...rest} />
    </>
  );
};

SpeakersPage.propTypes = {
  data: PropTypes.object,
};

export default SpeakersPage;

export const query = graphql`
  query SpeakersPageQuery {
    sanitySpeakersPage(_id: { eq: "speakers-page" }) {
      description
      title
      catchLine
    }
    allSanityPerson(filter: { talks: { elemMatch: { id: { ne: "" } } } }) {
      nodes {
        firstName
        lastName
        talks {
          id
        }
        avatar {
          asset {
            url
          }
          alt
        }
      }
    }
  }
`;
