import { isString } from './helpers';
import moment from 'moment';

export const eventSchema = {
    id: {
        field: 'id',
        isRequired: false,
        placeholder: '',
        validate: (data) => isString(data),
    },
    date: {
        field: 'date',
        isRequired: false,
        placeholder: '[ TBD ]',
        transform: (data) => moment(data.date).format('MMM Do, YYYY'),
        validate: (data) => Boolean(data),
    },
};
