import React from 'react';
import { storiesOf } from '@storybook/react';
import SpeakerCard from '@constructs/SpeakerCard';
import notes from './SpeakerCard.notes.md';
import { action } from '@storybook/addon-actions';

import fakePerson from '../../../../__mocks__/data/person-mock';

const data = fakePerson({ withTalks: true, withEvent: true });

storiesOf('Constructs', module).add(
  'SpeakerCard',
  () => <SpeakerCard data={data} onClick={action('onClick')} />,
  { notes }
);
