import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';
import UserChip from '@constructs/UserChip';
import notes from './UserChip.notes.md';

storiesOf('Constructs', module).add(
    'UserChip',
    () => {
        const firstName = text('firstName', 'Lucy');
        const lastName = text('lastName', 'Liu');
        const avatarProps = {
            firstName,
            lastName,
            alt: `${firstName} ${lastName} avatar photo`,
            src: text('src', null),
        };

        return (
            <UserChip
                onClick={action('onClick')}
                avatarProps={avatarProps}
                capped={boolean('capped', true)}
                text={`${firstName} ${lastName}`}
            />
        );
    },
    {
        notes,
    }
);
