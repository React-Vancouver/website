import React from 'react';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';
import { EVENTS, SPEAKERS, SPONSORS, ABOUT_US } from '@constants/routes';

const asideLinks = [
  { linkBrandName: 'react', out: 'https://reactjs.org/', title: 'React' },
  {
    linkBrandName: 'meetup',
    out: 'https://www.meetup.com/ReactJS-Vancouver-Meetup/',
    title: 'Meetup',
  },
  {
    linkBrandName: 'slack',
    out: 'https://slackrv.now.sh/',
    title: 'Slack',
  },
];

const navLinks = [
  { title: 'Events', to: EVENTS },
  { title: 'Speakers', to: SPEAKERS },
  { title: 'Sponsors', to: SPONSORS },
  { title: 'About Us', to: ABOUT_US },
];

import Avatar from '@elements/Avatar';
import Box from '@elements/Box';
import Layout from '@constructs/Layout';
import Text from '@elements/Text';
import UserChip from '@constructs/UserChip';
import SEO from '@constructs/SEO';

const SecondPage = ({ data }) => {
  const user = {
    firstName: 'Ria',
    lastName: 'Carmin',
  };
  const avatarProps = {
    firstName: user.firstName,
    lastName: user.firstName,
    alt: `${user.firstName} ${user.lastName} avatar photo`,
    fixed: data.file.childImageSharp.fixed,
  };

  return (
    <Layout asideLinks={asideLinks} navLinks={navLinks}>
      <Box container py5>
        <Text element="h1" color="secondary_d" heading>
          Hi from the second page
        </Text>
        <Text element="p">Welcome to page 2</Text>
        <Avatar alt="test" scale={6} fixed={data.file.childImageSharp.fixed} />
        <br />
        <UserChip
          fixed={data.file.childImageSharp.fixed}
          text="Ria carmin"
          avatarProps={avatarProps}
        />
        <br />

        <Link to="/">Go back to the homepage</Link>
      </Box>
    </Layout>
  );
};

export const query = graphql`
  query {
    file(relativePath: { eq: "illustration.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 32, height: 32) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default SecondPage;
