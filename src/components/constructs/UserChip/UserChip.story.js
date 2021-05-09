import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';
import UserChip from '@constructs/UserChip';
import notes from './UserChip.notes.md';

import fakePerson from '../../../../__mocks__/data/person-mock';

const data = fakePerson({ withTalks: true, withEvent: true });

storiesOf('Constructs', module).add(
  'UserChip',
  () => (
    <UserChip
      onClick={action('onClick')}
      data={data}
      capped={boolean('capped', true)}
      text={text('text')}
    />
  ),
  {
    notes,
  }
);
