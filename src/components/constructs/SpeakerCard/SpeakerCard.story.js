import React from 'react';
import { storiesOf } from '@storybook/react';
import SpeakerCard from '@constructs/SpeakerCard';
import notes from './SpeakerCard.notes.md';
import { action } from '@storybook/addon-actions';
import Grid from '@elements/Grid';

import fakeSpeaker from '../../../../__mocks__/data/speaker-mock';

const data = fakeSpeaker({ withTalks: true, withEvent: true });

storiesOf('Constructs', module).add(
    'SpeakerCard',
    () => (
        <Grid fixed={2} gap={3}>
            <SpeakerCard data={data} onClick={action('onClick')} />
            <SpeakerCard data={data} onClick={action('onClick')} />
            <SpeakerCard data={data} onClick={action('onClick')} />
            <SpeakerCard data={data} onClick={action('onClick')} />
        </Grid>
    ),
    { notes }
);
