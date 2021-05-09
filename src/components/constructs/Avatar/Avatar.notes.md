# Avatar

---

A round user avatar photo of a specified size (using vertical rhythm scale).

- `<picture>` variant, if provided `src` and `srcSets`. The provided image needs to be 1:1 ration (square) to avoid distortion.
- `gatsby-image` variant, if provided data returned from the `fixed` or `fluid` query. Learn more about [gatsby-image](https://www.gatsbyjs.org/packages/gatsby-image/#gatsby-image).

### Usage

###### picture

```JS
import Avatar from @elements/Avatar;

const src = 'https://placehold.co/600x400';
const srcSets = [
    { srcSet: 'https://placehold.co/82x82', media: '(min-width: 620px)' },
    { srcSet: 'https://placehold.co/112x112', media: '(max-width: 820px)' },
    { srcSet: 'https://placehold.co/200x200', media: '(max-width: 1120px)' },
];

<Avatar src={src} srcSets={srcSets} scale={12} alt="Ria’s photo"/>
```

###### gatsby-image

```JS
import Avatar from @elements/Avatar;

<Avatar fixed={data.file.childImageSharp.fixed} scale={12} alt="Ria’s photo" />

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
```
