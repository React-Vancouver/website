# UserChip

---

A compact clickable element that represents a user. Uses `<Avatar />` element for the image. [Refer to Avatar docs for props details](/info/elements--avatar/).

### Usage

```JS
import UserChip from '@constructs/UserChip';

const user = {
    firstName: "Lucy",
    lastName: "Liu",
    avatarUrl: "https://examplepath.com/file.jpeg",
}

<UserChip
    onClick={() => {}} // It does something!
    avatarProps={{
        firstName: user.firstName,
        lastName: user.lastName,
        src: user.avatarUrl
    }}
    capped
    text={`${user.firstName} ${user.lastName}`}
/>
```
