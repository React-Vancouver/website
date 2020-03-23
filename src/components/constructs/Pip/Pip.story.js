import React from 'react';
import { storiesOf } from '@storybook/react';
import notes from './Pip.notes.md';
import { boolean, number, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { sizes, colors } from './Pip.styles';
import Pip from '@constructs/Pip';

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
  'Pip',
  () => (
    <Pip
      color={select('color', colorOptions)}
      i={number('i', 0)}
      isActive={boolean('isActive', false)}
      onClick={action('onClick')}
      size={select('size', sizeOptions)}
      background={select('background', backgroundOptions)}
      withNumber={boolean('withNumber', false)}
    />
  ),
  { notes }
);
