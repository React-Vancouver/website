# Text

---

Text element that can render any tag and have different styling (like color and size).

| Prop       |  Type  | Default | Notes                                                                  |
| ---------- | :----: | ------- | ---------------------------------------------------------------------- |
| element    |  node  | span    | --                                                                     |
| children   |  node  | --      | --                                                                     |
| className  | string | --      | --                                                                     |
| color      | string | --      | `{...S.COLOR_THEME, ...S.COLOR_GREYS}`                                 |
| title      |  bool  | --      | [_see Blocks/Typography/Headings_](/story/blocks-typography--headings) |
| heading    |  bool  | --      | [_see Blocks/Typography/Headings_](/story/blocks-typography--headings) |
| subheading |  bool  | --      | [_see Blocks/Typography/Headings_](/story/blocks-typography--headings) |
| caption    |  bool  | --      | [_see Blocks/Typography/Body_](/story/blocks-typography--body)         |
| emphasis   |  bool  | --      | [_see Blocks/Typography/Body_](/story/blocks-typography--body)         |
| label      |  bool  | --      | [_see Blocks/Typography/Body_](/story/blocks-typography--body)         |
| scale      | number | --      | [_see Symbols/Typography/Scale_](/info/symbols-typography--scale/)     |

### Usage

```JS
import Text from '@elements/Text';

<Text
    title
    heading
    subheading
    caption
    emphasis
    label
    scale={5}
    color="grey_60"
>
    …
</Text>

```
