import React from 'react';
import { storiesOf } from '@storybook/react';
import SpeakerGallery from '@sections/SpeakerGallery';
import notes from './SpeakerGallery.notes.md';

import fakeSpeaker from '../../../../__mocks__/data/speaker-mock';
const data = Array.from(Array(6)).map(() =>
  fakeSpeaker({ withTalks: true, withEvent: true })
);

storiesOf('Sections', module).add(
  'SpeakerGallery',
  () => <SpeakerGallery data={data} />,
  { notes }
);
