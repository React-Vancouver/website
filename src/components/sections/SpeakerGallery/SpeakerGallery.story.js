import React from 'react';
import { storiesOf } from '@storybook/react';
import SpeakerGallery from '@sections/SpeakerGallery';
import notes from './SpeakerGallery.notes.md';

import fakePerson from '../../../../__mocks__/data/person-mock';
const data = Array.from(Array(6)).map(() =>
  fakePerson({ withTalks: true, withEvent: true })
);

storiesOf('Sections', module).add(
  'SpeakerGallery',
  () => <SpeakerGallery data={data} />,
  { notes }
);
