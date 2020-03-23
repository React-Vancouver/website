import React from 'react';
import { storiesOf } from '@storybook/react';
import notes from './Pips.notes.md';
import { boolean, number, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { sizes, colors } from '@constructs/Pip/Pip.styles';
import Pips from '@constructs/Pips';

const makeOptions = (obj) =>
  Object.keys(obj).reduce(
    (acc, value) => {
      acc[value.toLowerCase()] = value;
      return acc;
    },
    { none: null }
  );

const backgroundOptions = { light: 'light', dark: 'dark' };
const sizeOptions = makeOptions(sizes);
const colorOptions = makeOptions(colors);

storiesOf('Constructs', module).add(
  'Pips',
  () => (
    <Pips
      active={number('active', 2)}
      background={select('background', backgroundOptions)}
      color={select('color', colorOptions)}
      length={number('length', 5)}
      setActive={action('setActive')}
      size={select('size', sizeOptions)}
      withNumber={boolean('withNumber', false)}
    />
  ),
  { notes }
);
