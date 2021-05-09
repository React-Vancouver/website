import React from 'react';
import { action } from '@storybook/addon-actions';
import { EVENTS, SPEAKERS, SPONSORS, ABOUT_US } from '@constants/routes';
import { select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import MobileNav from '@sections/MobileNav';
import notes from './MobileNav.notes.md';

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
  'MobileNav',
  () => (
    <div css={{ height: '600px', width: '375px', overflowX: 'hidden' }}>
      <MobileNav
        links={links}
        background={select('background', themeOptions)}
        onButtonClick={action('onButtonClick')}
        onClose={action('onClose')}
      />
    </div>
  ),
  { notes }
);
