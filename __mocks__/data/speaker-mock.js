import fakeTalk from './talk-mock';
import faker from 'faker';

const fakeSpeaker = (options = {}) => {
  const { withTalks, withEvent } = options;
  const _speaker = {
    id: faker.random.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    companyName: faker.company.companyName(),
    title: faker.lorem.words(),
    bio: faker.lorem.sentences(),
    avatarUrl: faker.image.avatar(),
  };

  if (withTalks) {
    _speaker.talks = [
      fakeTalk({ withEvent }),
      fakeTalk({ withEvent }),
      fakeTalk({ withEvent }),
    ];
  }

  return _speaker;
};

export default fakeSpeaker;
