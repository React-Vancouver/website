import React from 'react';
import { storiesOf } from '@storybook/react';
import Field from '@elements/Field';
import notes from './Field.notes.md';

storiesOf('Elements', module).add(
    'Field',
    () => (
        <Field />
    ),
    { notes }
);