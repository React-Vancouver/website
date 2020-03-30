import React from 'react';
import { storiesOf } from '@storybook/react';
import Hero from './Hero';
import notes from './Hero.notes.md';
import { action } from '@storybook/addon-actions';

import fakeEvent from '../../../../../../__mocks__/data/event-mock';
const event = fakeEvent({ withTalks: true });

const titleSample = 'Join one of the biggest tech communities in Vancouver';
const descriptionSample =
  'Do you want to learn more about React? Or are you looking for job opportunities? A recruiter who wants to find talent, or an entrepreneur who wishes to connect with new people? React Vancouver is the place.';

const data = {
  title: titleSample,
  description: descriptionSample,
  image: {
    src: 'https://source.unsplash.com/wawEfYdpkag/1600x900',
    alt: 'Background image',
  },
};

const links = [
  { title: 'Events', to: '/events' },
  { title: 'Speakers', to: '/speakers' },
  { title: 'Sponsors', to: '/sponsors' },
];

storiesOf('Views / Home', module).add(
  'Hero',
  () => (
    <Hero
      links={links}
      onButtonClick={action('onButtonClick')}
      event={event}
      data={data}
    />
  ),
  {
    notes,
  }
);
