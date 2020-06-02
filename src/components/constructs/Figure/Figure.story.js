import React from 'react';
import { storiesOf } from '@storybook/react';
import Figure from '@constructs/Figure';
import notes from './Figure.notes.md';

storiesOf('Constructs', module).add(
    'Figure',
    () => (
        <Figure />
    ),
    { notes }
);