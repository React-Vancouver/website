# NavGroup

---

A tiny navigation component: renders links and a button.

### Usage

```JS
@import NavGroup from '@constructs/NavGroup`;

const links = [
    { title: 'Events', to: '/events' },
    { title: 'Speakers', to: '/speakers' },
    { title: 'Sponsors', to: '/sponsors' },
];

<NavGroup
    links={links}
    buttonText="Get involved!"
    onButtonClick={() => {}}
/>
```
