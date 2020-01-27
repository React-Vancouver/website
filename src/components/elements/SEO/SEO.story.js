import React from 'react';
import { storiesOf } from '@storybook/react';
import SEO from 'Elements/SEO';
import notes from './SEO.notes.md';

storiesOf('Element', module).add('SEO', () => <SEO />, { notes });
