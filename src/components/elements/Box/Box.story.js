import React from 'react';
import { storiesOf } from '@storybook/react';
import Box from '@elements/Box';
import notes from './Box.notes.md';

storiesOf('Elements', module).add('Box', () => <Box>I am a Box!</Box>, {
    notes,
});
