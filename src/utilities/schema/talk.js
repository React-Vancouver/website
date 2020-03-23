import { isString } from './helpers';

export const talkSchema = {
  id: {
    field: 'id',
    isRequired: false,
    placeholder: '',
    validate: (data) => isString(data),
  },
  title: {
    field: 'title',
    isRequired: false,
    placeholder: '[ TBD ]',
    validate: (data) => isString(data),
  },
  description: {
    field: 'description',
    isRequired: false,
    placeholder: 'No description…',
    validate: (data) => isString(data),
  },
  slidesUrl: {
    field: 'slidesUrl',
    isRequired: false,
    placeholder: null,
    validate: (data) => isString(data),
  },
};
