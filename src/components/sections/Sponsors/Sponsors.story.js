import React from 'react';
import { storiesOf } from '@storybook/react';
import Sponsors from '@sections/Sponsors';
import notes from './Sponsors.notes.md';
import { select } from '@storybook/addon-knobs';

import fakeCompany from '../../../../__mocks__/data/company-mock';
const data = Array.from(Array(12)).map(() => fakeCompany());

const themeOptions = {
  dark: 'dark',
  light: 'light',
};

storiesOf('Sections', module).add(
  'Sponsors',
  () => (
    <Sponsors background={select('background', themeOptions)} data={data} />
  ),
  {
    notes,
  }
);
