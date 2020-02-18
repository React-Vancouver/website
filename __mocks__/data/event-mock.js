import faker from 'faker';
import fakeSponsor from './sponsor-mock';
import fakeTalk from './talk-mock';

const fakeEvent = (options = {}) => {
    const { withTalks } = options;
    const _event = {
        id: faker.random.uuid(),
        date: faker.date.recent(),
        host: fakeSponsor(),
        photos: [],
        sponsors: [fakeSponsor(), fakeSponsor()],
        ticketsUrl: 'https://eventbrite.ca',
    };
    if (withTalks) {
        _event.talks = [
            fakeTalk({ withSpeaker: true }),
            fakeTalk({ withSpeaker: true }),
            // fakeTalk({ withSpeaker: true }),
        ];
    }
    return _event;
};

export default fakeEvent;
