import React from 'react';
import { storiesOf } from '@storybook/react';
import Image from '@elements/Image';
import notes from './Image.notes.md';

const src = 'https://placehold.co/600x400';

const srcSets = [
  { srcSet: 'https://placehold.co/82x82', media: '(min-width: 620px)' },
  { srcSet: 'https://placehold.co/112x112', media: '(max-width: 820px)' },
  { srcSet: 'https://placehold.co/200x200', media: '(max-width: 1120px)' },
];

storiesOf('Elements', module).add(
  'Image',
  () => <Image alt="Image element" src={src} srcSets={srcSets} />,
  { notes }
);
