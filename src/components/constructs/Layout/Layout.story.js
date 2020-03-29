import React from 'react';
import { EVENTS, SPEAKERS, SPONSORS, ABOUT_US } from '@constants/routes';
import { storiesOf } from '@storybook/react';
import Layout from '@constructs/Layout';
import notes from './Layout.notes.md';

const asideLinks = [
  { linkBrandName: 'react', out: 'https://reactjs.org/', title: 'React' },
  {
    linkBrandName: 'meetup',
    out: 'https://www.meetup.com/ReactJS-Vancouver-Meetup/',
    title: 'Meetup',
  },
  {
    linkBrandName: 'slack',
    out: 'https://slackrv.now.sh/',
    title: 'Slack',
  },
];

const navLinks = [
  { title: 'Events', to: EVENTS },
  { title: 'Speakers', to: SPEAKERS },
  { title: 'Sponsors', to: SPONSORS },
  { title: 'About Us', to: ABOUT_US },
];

storiesOf('Constructs', module).add(
  'Layout',
  () => <Layout asideLinks={asideLinks} navLinks={navLinks} />,
  {
    notes,
  }
);
