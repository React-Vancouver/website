import { graphql } from 'gatsby';
export { default as useSiteMetadata } from './use-site-metadata';

export const markdownFrontmatterFragment = graphql`
  fragment AsideData on SanityAside {
    links {
      brandName
      title
      url
    }
  }
`;
