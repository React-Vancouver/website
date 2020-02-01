import React from 'react';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';
import Avatar from '@elements/Avatar';
import Shell from '@constructs/Shell';
import Box from '@elements/Box';
import Text from '@elements/Text';
import UserChip from '@constructs/UserChip';

const SecondPage = ({ data }) => {
    console.log(data);

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
        <Shell>
            <Box container py5>
                <Text element="h1" color="secondary_d" heading>
                    Hi from the second page
                </Text>
                <Text element="p">Welcome to page 2</Text>
                <Avatar
                    alt="test"
                    scale={6}
                    fixed={data.file.childImageSharp.fixed}
                />
                <br />
                <UserChip
                    fixed={data.file.childImageSharp.fixed}
                    text="Ria carmin"
                    avatarProps={avatarProps}
                />
                <br />

                <Link to="/">Go back to the homepage</Link>
            </Box>
        </Shell>
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
