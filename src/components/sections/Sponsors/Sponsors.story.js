import React from 'react';
import { storiesOf } from '@storybook/react';
import Sponsors from '@sections/Sponsors';
import notes from './Sponsors.notes.md';
import { select } from '@storybook/addon-knobs';

import fakeSponsor from '../../../../__mocks__/data/sponsor-mock';
const sponsors = [
    fakeSponsor(),
    fakeSponsor(),
    fakeSponsor(),
    fakeSponsor(),
    fakeSponsor(),
    fakeSponsor(),
    fakeSponsor(),
    fakeSponsor(),
    fakeSponsor(),
    fakeSponsor(),
];

const themeOptions = {
    dark: 'dark',
    light: 'light',
};

storiesOf('Sections', module).add(
    'Sponsors',
    () => (
        <Sponsors
            background={select('background', themeOptions)}
            sponsors={sponsors}
        />
    ),
    {
        notes,
    }
);
