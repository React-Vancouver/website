import React from 'react';
import { storiesOf } from '@storybook/react';
import Box from '@elements/Box';
import notes from './Box.notes.md';
import { text, boolean } from '@storybook/addon-knobs';

storiesOf('Elements', module).add(
    'Box',
    () => (
        <Box container={boolean('container', false)}>
            {text('children', 'I am a Box!')}
        </Box>
    ),
    {
        notes,
    }
);
