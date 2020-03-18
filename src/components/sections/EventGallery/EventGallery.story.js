import React from 'react';
import { storiesOf } from '@storybook/react';
import EventGallery from '@sections/EventGallery';
import notes from './EventGallery.notes.md';

import fakeEvent from '../../../../__mocks__/data/event-mock';
const data = Array.from(Array(6)).map(() => fakeEvent({ withTalks: true }));

storiesOf('Sections', module).add(
  'EventGallery',
  () => <EventGallery data={data} />,
  {
    notes,
  }
);
