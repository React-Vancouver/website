import React from 'react';
import { storiesOf } from '@storybook/react';
import Text from '@elements/Text';
import notes from './Text.notes.md';

storiesOf('Element', module).add('Text', () => <Text>Hello</Text>, { notes });
