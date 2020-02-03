import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import EventCard from '@constructs/EventCard';
import notes from './EventCard.notes.md';

import fakeEvent from '../../../../__mocks__/data/event-mock';
const data = fakeEvent({ withTalks: true });

storiesOf('Constructs', module).add(
    'EventCard',
    () => <EventCard data={data} onClick={action('onClick')} />,
    { notes }
);
