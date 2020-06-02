import React from 'react';
import { storiesOf } from '@storybook/react';
import AboutUs from '@views/AboutUs';
import notes from './AboutUs.notes.md';

storiesOf('Views', module).add(
    'AboutUs',
    () => (
        <AboutUs />
    ),
    { notes }
);