import React from 'react';
import { storiesOf } from '@storybook/react';
import Speakers from '@views/Speakers';
import notes from './Speakers.notes.md';

storiesOf('Views', module).add(
    'Speakers',
    () => (
        <Speakers />
    ),
    { notes }
);