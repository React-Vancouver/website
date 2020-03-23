import React from 'react';
import { storiesOf } from '@storybook/react';
import ButtonWithIcon from '@elements/ButtonWithIcon';
import notes from './ButtonWithIcon.notes.md';
import { sizes, colors } from './ButtonWithIcon.styles';
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
  'ButtonWithIcon',
  () => (
    <ButtonWithIcon
      size={select('size', sizeOptions)}
      color={select('color', colorOptions)}
      capped={boolean('capped', false)}
    >
      {text('children', 'ButtonWithIcon')}
    </ButtonWithIcon>
  ),
  { notes }
);
