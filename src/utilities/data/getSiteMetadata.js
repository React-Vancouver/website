import { useStaticQuery, graphql } from 'gatsby';

export const getSiteMetadata = () => {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                    }
                }
            }
        `
    );

    return data.site.siteMetadata;
};
