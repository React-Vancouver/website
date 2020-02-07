# Nav

---

A tiny navigation component: renders links and a button.

### Usage

```JS
@import Nav from '@constructs/Nav`;

const links = [
    { title: 'Events', to: '/events' },
    { title: 'Speakers', to: '/speakers' },
    { title: 'Sponsors', to: '/sponsors' },
];

<Nav
    links={links}
    buttonText="Get involved!"
    onButtonClick={() => {}}
/>
```
