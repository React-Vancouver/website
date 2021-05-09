import React from 'react';
import { storiesOf } from '@storybook/react';
import AboutUs from '@views/AboutUs';
import notes from './AboutUs.notes.md';
import blocks from '../../../../__mocks__/data/sanity-block';

storiesOf('Views', module).add(
  'AboutUs',
  () => <AboutUs blocks={blocks} title="Title" />,
  { notes }
);
