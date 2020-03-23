import faker from 'faker';
import fakePerson from './person-mock';
import fakeEvent from './event-mock';

const fakeTalk = (options = {}) => {
  const { withSpeaker, withEvent } = options;
  const _talk = {
    id: faker.random.uuid(),
    title: faker.lorem.words(),
    description: faker.lorem.sentences(),
    slidesUrl: 'https://slides.com',
  };

  if (withSpeaker) {
    _talk.speaker = fakePerson();
  }

  if (withEvent) {
    _talk.event = fakeEvent();
  }

  return _talk;
};
export default fakeTalk;
