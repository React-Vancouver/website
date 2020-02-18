import React from 'react';
import { storiesOf } from '@storybook/react';
import AsideMenu from '@constructs/AsideMenu';
import notes from './AsideMenu.notes.md';

const links = [
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
storiesOf('Constructs', module).add(
    'AsideMenu',
    () => <AsideMenu links={links} />,
    {
        notes,
    }
);
