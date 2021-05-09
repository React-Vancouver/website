import React from 'react';
import { storiesOf } from '@storybook/react';
import Background from '@constructs/Background';
import notes from './Background.notes.md';
import { number } from '@storybook/addon-knobs';

const src = 'https://source.unsplash.com/random';

storiesOf('Constructs', module).add(
  'Background',
  () => (
    <div
      css={{
        width: `${number('width', 30)}rem`,
        height: `${number('height', 30)}rem`,
        position: 'relative',
      }}
    >
      <Background src={src} />
    </div>
  ),
  { notes }
);
