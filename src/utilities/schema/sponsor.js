import { isString } from './helpers';

export const sponsorSchema = {
    id: {
        field: 'id',
        isRequired: false,
        placeholder: '',
        validate: (data) => isString(data),
    },
    companyName: {
        field: 'companyName',
        isRequired: false,
        placeholder: 'TBD',
        validate: (data) => isString(data),
    },
    googleMapsUrl: {
        field: 'googleMapsUrl',
        isRequired: false,
        placeholder: '',
        validate: (data) => isString(data),
    },
    address: {
        field: 'address',
        isRequired: false,
        placeholder: 'TBD',
        validate: (data) => isString(data),
    },
};
