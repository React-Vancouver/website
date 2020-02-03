import React from 'react';
import { storiesOf } from '@storybook/react';
import SpeakerCard from '@constructs/SpeakerCard';
import notes from './SpeakerCard.notes.md';
import { action } from '@storybook/addon-actions';

import fakeSpeaker from '../../../../__mocks__/data/speaker-mock';

const data = fakeSpeaker({ withTalks: true, withEvent: true });

storiesOf('Constructs', module).add(
    'SpeakerCard',
    () => <SpeakerCard data={data} onClick={action('onClick')} />,
    { notes }
);
