import React from 'react';
import { storiesOf } from '@storybook/react';
import AsideMenu from '@constructs/AsideMenu';
import notes from './AsideMenu.notes.md';

const links = [
  { brandName: 'react', out: 'https://reactjs.org/', title: 'React' },
  {
    brandName: 'meetup',
    out: 'https://www.meetup.com/ReactJS-Vancouver-Meetup/',
    title: 'Meetup',
  },
  {
    brandName: 'slack',
    out: 'https://slackrv.now.sh/',
    title: 'Slack',
  },
];
storiesOf('Constructs', module).add(
  'AsideMenu',
  () => <AsideMenu links={links} />,
  {
    notes,
  }
);
