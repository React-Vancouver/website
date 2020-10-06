import fakeCompany from '../../../__mocks__/data/company-mock';

export default function(data) {
  return Array.from(Array(12)).map(() => fakeCompany());
}
