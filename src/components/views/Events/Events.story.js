import React from 'react';
import { storiesOf } from '@storybook/react';
import Events from '@views/Events';
import notes from './Events.notes.md';

storiesOf('Views', module).add(
    'Events',
    () => (
        <Events />
    ),
    { notes }
);