import React from 'react';
import { storiesOf } from '@storybook/react';
import TalkCard from '@constructs/TalkCard';
import notes from './TalkCard.notes.md';
import fakeTalk from '../../../../__mocks__/data/talk-mock';

const data = fakeTalk({ withSpeaker: true, withEvent: true });

storiesOf('Constructs', module).add('TalkCard', () => <TalkCard data={data}/>, { notes });
