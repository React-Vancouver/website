import { isString } from './helpers';

export const speakerSchema = {
  id: {
    field: 'id',
    isRequired: false,
    placeholder: '',
    validate: (data) => isString(data),
  },
  firstName: {
    field: 'firstName',
    isRequired: false,
    placeholder: '',
    validate: (data) => isString(data),
  },
  lastName: {
    field: 'lastName',
    isRequired: false,
    placeholder: '',
    validate: (data) => isString(data),
  },
  companyName: {
    field: 'companyName',
    isRequired: false,
    placeholder: '',
    validate: (data) => isString(data),
  },
  avatarUrl: {
    field: 'avatarUrl',
    isRequired: false,
    placeholder: undefined,
    validate: (data) => isString(data),
  },
  title: {
    field: 'title',
    isRequired: false,
    placeholder: '',
    validate: (data) => isString(data),
  },
  bio: {
    field: 'bio',
    isRequired: false,
    placeholder: 'No bio yet…',
    validate: (data) => isString(data),
  },
};
