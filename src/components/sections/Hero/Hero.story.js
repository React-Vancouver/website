import React from 'react';
import { storiesOf } from '@storybook/react';
import Hero from '@sections/Hero';
import notes from './Hero.notes.md';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';

import fakeEvent from '../../../../__mocks__/data/event-mock';
const event = fakeEvent({ withTalks: true });

const links = [
    { title: 'Events', to: '/events' },
    { title: 'Speakers', to: '/speakers' },
    { title: 'Sponsors', to: '/sponsors' },
];

const titleSample = 'Join one of the biggest tech communities in Vancouver';
const descriptionSample =
    'Do you want to learn more about React? Or are you looking for job opportunities? A recruiter who wants to find talent, or an entrepreneur who wishes to connect with new people? React Vancouver is the place.';

storiesOf('Sections', module).add(
    'Hero',
    () => (
        <Hero
            title={text('title', titleSample)}
            description={text('description', descriptionSample)}
            links={links}
            onButtonClick={action('onButtonClick')}
            event={event}
        />
    ),
    {
        notes,
    }
);
