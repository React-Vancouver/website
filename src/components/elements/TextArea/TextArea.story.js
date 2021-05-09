import React from 'react';
import { storiesOf } from '@storybook/react';
import TextArea from '@elements/TextArea';
import notes from './TextArea.notes.md';

storiesOf('Elements', module).add(
    'TextArea',
    () => (
        <TextArea />
    ),
    { notes }
);