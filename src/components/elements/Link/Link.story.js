import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, number, select } from '@storybook/addon-knobs';
import Link from '@elements/Link';
import notes from './Link.notes.md';
import S from '@symbols';

const options = Object.keys({ ...S.COLOR_THEME, ...S.COLOR_GREYS }).reduce(
  (acc, color) => {
    const _c = color.toLowerCase();
    acc[_c] = _c;
    return acc;
  },
  { none: null }
);

storiesOf('Elements', module).add(
  'Link',
  () => (
    <>
      <Link
        onClick={action('onClick')}
        withArrow={boolean('withArrow', true)}
        scale={number('scale')}
        color={select('color', options)}
      >
        Default Link
      </Link>
      <br />
      <Link
        to="/page"
        withArrow={boolean('withArrow', true)}
        scale={number('scale')}
        color={select('color', options)}
      >
        Internal Link
      </Link>
      <br />
      <Link
        out="https://cbc.ca"
        withArrow={boolean('withArrow', true)}
        scale={number('scale')}
        color={select('color', options)}
      >
        External Link
      </Link>
      <br />
    </>
  ),
  { notes }
);
