import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import Nav from '@constructs/Nav';
import notes from './Nav.notes.md';

const links = [
  { title: 'Events', to: '/events' },
  { title: 'Speakers', to: '/speakers' },
  { title: 'Sponsors', to: '/sponsors' },
];

storiesOf('Constructs', module).add(
  'Nav',
  () => (
    <Nav
      links={links}
      buttonText={text('buttonText', 'Get involved!')}
      onButtonClick={action('onButtonClick')}
    />
  ),
  {
    notes,
  }
);
