import React from 'react';
import { storiesOf } from '@storybook/react';
import AsideMenu from '@constructs/AsideMenu';
import notes from './AsideMenu.notes.md';

storiesOf('Constructs', module).add(
    'AsideMenu',
    () => (
        <AsideMenu />
    ),
    { notes }
);