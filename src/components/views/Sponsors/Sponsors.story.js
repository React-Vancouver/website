import React from 'react';
import { storiesOf } from '@storybook/react';
import Sponsors from '@views/Sponsors';
import notes from './Sponsors.notes.md';

storiesOf('Views', module).add(
    'Sponsors',
    () => (
        <Sponsors />
    ),
    { notes }
);