import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import NavGroup from '@constructs/NavGroup';
import notes from './NavGroup.notes.md';

const links = [
  { title: 'Events', to: '/events' },
  { title: 'Speakers', to: '/speakers' },
  { title: 'Sponsors', to: '/sponsors' },
];

storiesOf('Constructs', module).add(
  'NavGroup',
  () => (
    <NavGroup
      links={links}
      buttonText={text('buttonText', 'Get involved!')}
      onButtonClick={action('onButtonClick')}
    />
  ),
  {
    notes,
  }
);
