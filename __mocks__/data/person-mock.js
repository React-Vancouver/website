import faker from 'faker';
import fakeTalk from './talk-mock';
import fakeCompany from './company-mock';

const fakePerson = ({ withTalks, withEvent } = {}) => {
  const _person = {
    id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    company: fakeCompany(),
    title: faker.lorem.words(),
    bio: faker.lorem.sentences(),
    avatar: {
      src: faker.image.avatar(),
    },
  };

  if (withTalks) {
    _person.talks = [
      fakeTalk({ withEvent }),
      fakeTalk({ withEvent }),
      fakeTalk({ withEvent }),
    ];
  }

  return _person;
};

export default fakePerson;
