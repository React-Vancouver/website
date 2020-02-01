# Button

---

Has two variants: **filled** (default) and **outline**. By default the button’s width fills 100% of the container.

| Prop      |  Type  | Notes                                     |
| --------- | :----: | ----------------------------------------- |
| capped    |  bool  | Resets the width to the minimum space     |
| children  |  node  | --                                        |
| className | string | --                                        |
| color     | string | `S.COLOR_THEME.[X]` `S.COLOR_UTILITY.[X]` |
| onClick   |  func  | Default variant click handler             |
| outline   | string | Secondary variant                         |
| size      |  bool  | `small`, `medium`, `large`                |

### Usage

```JS
import Button from '@elements/Button`

        <Button
            size='large'
            color='warn'
            outline
            capped
        >
            {text('children', 'Button')}
        </Button>
```
