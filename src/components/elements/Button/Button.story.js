import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '@elements/Button';
import notes from './Button.notes.md';
import { sizes, colors } from './Button.styles';
import { boolean, select, text } from '@storybook/addon-knobs';

const makeOptions = (obj) =>
    Object.keys(obj).reduce(
        (acc, value) => {
            acc[value.toLowerCase()] = value;
            return acc;
        },
        { none: null }
    );

const colorOptions = makeOptions(colors);
const sizeOptions = makeOptions(sizes);

storiesOf('Elements', module).add(
    'Button',
    () => (
        <Button
            size={select('size', sizeOptions)}
            color={select('color', colorOptions)}
            outline={boolean('outline', false)}
            capped={boolean('capped', false)}
        >
            {text('children', 'Button')}
        </Button>
    ),
    { notes }
);
