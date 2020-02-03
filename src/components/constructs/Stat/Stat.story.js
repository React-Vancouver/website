import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';
import notes from './Stat.notes.md';
import S from '@symbols';
import Stat from '@constructs/Stat';

const colorOptions = Object.keys(S.COLOR_THEME).reduce(
    (acc, color) => {
        const _c = color.toLowerCase();
        acc[_c] = _c;
        return acc;
    },
    { none: null }
);

storiesOf('Constructs', module).add(
    'Stat',
    () => (
        <Stat
            color={select('color', colorOptions)}
            number={text('number', '100')}
            title={text('title', 'Talks since October 2015')}
        />
    ),
    { notes }
);
