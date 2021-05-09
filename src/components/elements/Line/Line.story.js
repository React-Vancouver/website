import React from 'react';
import { storiesOf } from '@storybook/react';
import Line from '@elements/Line';
import notes from './Line.notes.md';

storiesOf('Elements', module).add(
    'Line',
    () => (
        <Line />
    ),
    { notes }
);