# Picture

---

Implements html `picture` tag as a React component.

| Prop      |  Type  | Notes                                                                                                                                |
| --------- | :----: | ------------------------------------------------------------------------------------------------------------------------------------ |
| alt       | string | Screen reader friendly description of the image                                                                                      |
| className | string | --                                                                                                                                   |
| src       | string | Default image source                                                                                                                 |
| srcSets   | array  | Array of sources to load on different screen sizes ([learn more](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture)) |

### Usage

````JS
import Picture from '@elements/Picture'
        <Picture
            alt="Random photo from Unsplash"
            src="https://source.unsplash.com/random/800x600"
            srcSets={[
                {
                    srcSet: "https://source.unsplash.com/random/800x600",
                    media: "(min-width: 400px)",
                },
                {
                    srcSet: "https://source.unsplash.com/random/900x600",
                    media: "(min-width: 600px)",
                },
                {
                    srcSet: "https://source.unsplash.com/random/1000x600",
                    media: "(min-width: 900px)",
                },
            ]}
        />
        ```
````
