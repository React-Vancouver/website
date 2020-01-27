import React from 'react';
import { storiesOf } from '@storybook/react';
import Shell from 'Elements/Shell';
import notes from './Shell.notes.md';

storiesOf('Element', module).add('Shell', () => <Shell />, { notes });
