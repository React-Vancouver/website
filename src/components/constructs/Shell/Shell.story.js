import React from 'react';
import { storiesOf } from '@storybook/react';
import Shell from '@constructs/Shell';
import notes from './Shell.notes.md';

storiesOf('Constructs', module).add('Shell', () => <Shell />, { notes });
