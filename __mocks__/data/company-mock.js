import faker from 'faker';

const fakeCompany = ({ isSponsor } = {}) => {
  const _company = {
    id: faker.datatype.uuid(),
    name: faker.company.companyName(),
    googleMapsUrl:
      'https://www.google.com/maps/place/TELUS+Garden+Offices/@49.2811052,-123.1190905,17z/data=!3m1!4b1!4m5!3m4!1s0x5486717f1e2a2abf:0x228bfd9147371b9c!8m2!3d49.2811052!4d-123.1169019',
    address: faker.address.streetAddress(),
    isSponsor,
    logo: {},
  };

  return _company;
};

export default fakeCompany;
