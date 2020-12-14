import fakeSpeaker from '../../../__mocks__/data/person-mock';

export default function(data) {
  return Array.from(Array(12)).map(() => fakeSpeaker());
}
