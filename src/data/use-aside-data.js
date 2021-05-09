import { useStaticQuery, graphql } from 'gatsby';
export const useAsideData = () => {
  const { sanityAside } = useStaticQuery(
    graphql`
      query UseAsideData {
        sanityAside(_id: { eq: "aside" }) {
          links {
            brandName
            title
            url
          }
        }
      }
    `
  );

  return sanityAside?.links ?? [];
};
