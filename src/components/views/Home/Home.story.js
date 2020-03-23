import React from 'react';
import { EVENTS, SPEAKERS, SPONSORS, ABOUT_US } from '@constants/routes';
import { storiesOf } from '@storybook/react';
import Home from '@views/Home';
import notes from './Home.notes.md';
import { action } from '@storybook/addon-actions';
import fakePerson from '../../../../__mocks__/data/person-mock';
import fakeEvent from '../../../../__mocks__/data/event-mock';
import fakeCompany from '../../../../__mocks__/data/company-mock';

const sponsorsData = Array.from(Array(12)).map(() => fakeCompany());
const statsData = [
  { color: 'secondary_d', number: '2500+', title: 'React Vancouver fans' },
  { color: 'tertiary', number: '90', title: 'Talks since Oct 2015' },
  { color: 'primary', number: '37', title: 'Events since Oct 2015' },
];
const eventsData = Array.from(Array(6)).map(() =>
  fakeEvent({ withTalks: true })
);
const speakersData = Array.from(Array(6)).map(() =>
  fakePerson({ withTalks: true, withEvent: true })
);
const creditsData = Array.from(Array(12)).map(() => fakePerson());
const navLinks = [
  { title: 'Events', to: EVENTS },
  { title: 'Speakers', to: SPEAKERS },
  { title: 'Sponsors', to: SPONSORS },
  { title: 'About Us', to: ABOUT_US },
];

const onGetInvolved = action('onGetInvolved');

storiesOf('Views', module).add(
  'Home',
  () => (
    <Home
      creditsData={creditsData}
      eventsData={eventsData}
      navLinks={navLinks}
      onGetInvolved={onGetInvolved}
      speakersData={speakersData}
      sponsorsData={sponsorsData}
      statsData={statsData}
    />
  ),
  {
    notes,
  }
);
