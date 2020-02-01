# Grid

---

Applies a grid on the children components. Implements two most common design patterns:

-   **Fixed** grid with columns. E.g. passing `fixed={4}` will create a layout with 4 columns.
-   **Fluid** grid where elements have a minimum width. E.g. passing `fluid={15}` will create a layout where the minimum width of a child is `15rem` and maximum `1fr`. The grid will fill the available space (`auto-fit`).

[Learn more about CSS Grids and `grid-template-columns`.](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns)

**NOTE:** If the design asks for a more complex grid layout, write custom grid styles instead of using `<Grid />`.

| Prop      |  Type  | Notes                          |
| --------- | :----: | ------------------------------ |
| fluid     | number | Child’s minimum width in rems. |
| children  |  node  | --                             |
| className | string | --                             |
| fixed     | number | Number of columns.             |
| gap       | number | Default variant click handler  |

### Usage

###### Fixed

```JS
import Grid from `@elements/Grid`

<Grid
    gap={2}
    fixed={2}
>
    <GridItem p3>Grid Item</GridItem>
    <GridItem p3>Grid Item</GridItem>
    <GridItem p3>Grid Item</GridItem>
    <GridItem p3>Grid Item</GridItem>
    <GridItem p3>Grid Item</GridItem>
    <GridItem p3>Grid Item</GridItem>
    <GridItem p3>Grid Item</GridItem>
</Grid>
```

###### Fluid

```JS
import Grid from `@elements/Grid`

<Grid
    gap={2}
    fluid={16}
>
    <GridItem p3>Grid Item</GridItem>
    <GridItem p3>Grid Item</GridItem>
    <GridItem p3>Grid Item</GridItem>
    <GridItem p3>Grid Item</GridItem>
    <GridItem p3>Grid Item</GridItem>
    <GridItem p3>Grid Item</GridItem>
    <GridItem p3>Grid Item</GridItem>
</Grid>
```
