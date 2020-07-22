import { EVENTS, SPEAKERS, SPONSORS, ABOUT_US } from '@constants/routes';
import fakePerson from '../../../__mocks__/data/person-mock';
import fakeEvent from '../../../__mocks__/data/event-mock';
import fakeCompany from '../../../__mocks__/data/company-mock';

const sponsorsData = Array.from(Array(12)).map(() => fakeCompany());
const statsData = [
  {
    id: 'A',
    color: 'secondary_d',
    number: '2500+',
    title: 'React Vancouver fans',
  },
  { id: 'B', color: 'tertiary', number: '90', title: 'Talks since Oct 2015' },
  { id: 'C', color: 'primary', number: '37', title: 'Events since Oct 2015' },
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

const heroData = {
  title: 'Join one of the biggest tech communities in Vancouver',
  description:
    'Do you want to learn more about React? Or are you looking for job opportunities? A recruiter who wants to find talent, or an entrepreneur who wishes to connect with new people? React Vancouver is the place.',
  image: {
    src: 'https://source.unsplash.com/wawEfYdpkag/1600x900',
    alt: 'Background image — React Vancouver meetup',
  },
};

export default function() {
  return {
    creditsData,
    currentEventData: eventsData[0],
    eventsData,
    heroData,
    navLinks,
    speakersData,
    sponsorsData,
    statsData,
  };
}
