import React from 'react';
import { storiesOf } from '@storybook/react';
import Sponsors from '@sections/Sponsors';
import notes from './Sponsors.notes.md';
import { select } from '@storybook/addon-knobs';

import fakeCompany from '../../../../__mocks__/data/company-mock';
const sponsors = [
  fakeCompany(),
  fakeCompany(),
  fakeCompany(),
  fakeCompany(),
  fakeCompany(),
  fakeCompany(),
  fakeCompany(),
  fakeCompany(),
  fakeCompany(),
  fakeCompany(),
];

const themeOptions = {
  dark: 'dark',
  light: 'light',
};

storiesOf('Sections', module).add(
  'Sponsors',
  () => (
    <Sponsors
      background={select('background', themeOptions)}
      sponsors={sponsors}
    />
  ),
  {
    notes,
  }
);
