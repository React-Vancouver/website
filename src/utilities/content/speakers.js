import fakeSpeaker from '../../../__mocks__/data/person-mock';

export default function (data) {
  return {
    speakersData: Array.from(Array(12)).map(() => fakeSpeaker()),
    topicsData: [
      'state management',
      'CSS-in-JS',
      'jam stack',
      'UI',
      'real time',
      'GraphQL',
      'design systems'
    ],
  };
}
