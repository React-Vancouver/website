import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import Modal from '@constructs/Modal';
import Image from '@elements/Image';
import Text from '@elements/Text';
import notes from './Modal.notes.md';

storiesOf('Constructs', module).add(
  'Modal',
  () => (
    <Modal isOpen={boolean('isOpen', false)}>
      <Text heading mt3>Hello World!</Text>
      <Image mt1 mb3 src="https://source.unsplash.com/random/400x300" alt="something cool" />
    </Modal>
  ),
  { notes }
);
