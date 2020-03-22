import React from 'react';
import { storiesOf } from '@storybook/react';
import Credits from '@sections/Credits';
import notes from './Credits.notes.md';
import { select } from '@storybook/addon-knobs';

import fakePerson from '../../../../__mocks__/data/person-mock';
const data = Array.from(Array(12)).map(() => fakePerson());

const themeOptions = {
  dark: 'dark',
  light: 'light',
};

storiesOf('Sections', module).add(
  'Credits',
  () => <Credits data={data} background={select('background', themeOptions)} />,
  {
    notes,
  }
);
