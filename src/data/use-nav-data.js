import { useStaticQuery, graphql } from 'gatsby';
export const useNavData = () => {
  const { sanityNavigation } = useStaticQuery(
    graphql`
      query UseStaticQuery {
        sanityNavigation(_id: { eq: "navigation" }) {
          links {
            url
            title
          }
        }
      }
    `
  );

  return sanityNavigation?.links ?? [];
};
