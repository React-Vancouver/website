import React from 'react';
import { storiesOf } from '@storybook/react';
import { EVENTS, SPEAKERS, SPONSORS, ABOUT_US } from '@constants/routes';
import { select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Nav from '@sections/Nav';
import notes from './Nav.notes.md';

const themeOptions = {
  dark: 'dark',
  light: 'light',
};

const links = [
  { title: 'Events', to: EVENTS },
  { title: 'Speakers', to: SPEAKERS },
  { title: 'Sponsors', to: SPONSORS },
  { title: 'About Us', to: ABOUT_US },
];

storiesOf('Sections', module).add(
  'Nav',
  () => (
    <Nav
      links={links}
      background={select('background', themeOptions)}
      onButtonClick={action('onButtonClick')}
    />
  ),
  { notes }
);
