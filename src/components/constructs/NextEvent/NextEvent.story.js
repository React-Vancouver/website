import React from 'react';
import { storiesOf } from '@storybook/react';
import NextEvent from '@constructs/NextEvent';
import notes from './NextEvent.notes.md';
import { select } from '@storybook/addon-knobs';

import fakeEvent from '../../../../__mocks__/data/event-mock';
const data = fakeEvent({ withTalks: true });

const dataOptions = {
  withData: data,
  blank: null,
};

storiesOf('Constructs', module).add(
  'NextEvent',
  () => <NextEvent data={select('data', dataOptions, dataOptions.blank)} />,
  {
    notes,
  }
);
