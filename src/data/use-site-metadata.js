import { useStaticQuery, graphql } from 'gatsby';

export default function() {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            author
            siteUrl
          }
        }
      }
    `
  );
  return site.siteMetadata;
}
