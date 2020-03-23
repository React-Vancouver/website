import React from 'react';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Picture from '@elements/Picture';
import notes from './Picture.notes.md';

storiesOf('Elements', module).add(
  'Picture',
  () => (
    <Picture
      alt={text('alt', 'Random photo from Unsplash')}
      src={text('src', 'https://source.unsplash.com/random/800x600')}
      srcSets={[
        {
          srcSet: 'https://source.unsplash.com/random/800x600',
          media: `(min-width: 400px)`,
        },
        {
          srcSet: 'https://source.unsplash.com/random/900x600',
          media: `(min-width: 600px)`,
        },
        {
          srcSet: 'https://source.unsplash.com/random/1000x600',
          media: `(min-width: 900px)`,
        },
      ]}
    />
  ),
  { notes }
);
