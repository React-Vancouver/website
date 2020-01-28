import React from 'react';
import { storiesOf } from '@storybook/react';
import Shell from '@elements/Shell';
import notes from './Shell.notes.md';

storiesOf('Elements', module).add('Shell', () => <Shell />, { notes });
