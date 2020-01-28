# Link

---

-   If provided an `out` prop, renders an **external link** using `<a>` tag with `target="_blank" rel="noopener noreferrer"`.
-   If provided a `to` prop, renders an **internal link** using Gatsby’s `<Link>`.
-   Defaults to a `<span>` that has an `onClick` handler.

| Prop      |  Type  |                         Notes |
| --------- | :----: | ----------------------------: |
| children  |  node  |                            -- |
| className | string |                            -- |
| onClick   |  func  | Default variant click handler |
| out       | string |                 External link |
| to        | string |                 Internal link |
| withArrow |  bool  |            Renders two arrows |

### Usage

###### Default

```
    @import Link from @element/Link;

    const onClick = () => {}
    <Link
        onClick={onClick}
        withArrow
        scale={2}
        color="grey_60"
    >
        Default Link
    </Link>
```

###### Internal

```
    @import Link from @element/Link;

    <Link to='/page'>Internal Link</Link>
```

###### External

```
    @import Link from @element/Link;

    <Link out='https://cbc.ca'>External Link</Link>
```
