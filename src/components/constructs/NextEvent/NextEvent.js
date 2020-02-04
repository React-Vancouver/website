import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { rootStyles } from './NextEvent.styles';
import { withSpacing } from '@utilities/styles/spacing';
import eventPropTypes from '@utilities/prop-types/event';
import format, {
    sponsorSchema,
    eventSchema,
    talkSchema,
    speakerSchema,
} from '@utilities/schema';

import Box from '@elements/Box';
import Button from '@elements/Button';
import Text from '@elements/Text';
import Link from '@elements/Link';
import Talk from './partials/Talk';

const NextEvent = ({ className, data = {} }) => {
    const event = useMemo(() => format(data, eventSchema), []);
    const host = useMemo(() => format(data?.host, sponsorSchema), []);
    const talks = useMemo(() =>
        Array.from(new Array(3)).map((_, i) =>
            format(data?.talks && data?.talks[i], talkSchema, [
                {
                    field: 'speaker',
                    schema: speakerSchema,
                    data:
                        data?.talks &&
                        data?.talks[i] &&
                        data?.talks[i]?.speaker,
                },
            ])
        )
    );

    return (
        <Box p5 css={rootStyles} className={className}>
            <Text mt2 color="white" element="p">
                Next Event
            </Text>
            <Text color="white" title scale={12} element="p">
                {event.date}
            </Text>
            <Text color="white" element="p" mb3>
                @{' '}
                {data?.host && host.googleMapsUrl ? (
                    <Link out={host.googleMapsUrl}>
                        {host.companyName || 'address'}
                    </Link>
                ) : (
                    <Text color="white" css={{ opacity: '50%' }}>
                        &ensp;address
                    </Text>
                )}
            </Text>

            {talks.map((talk, i) => (
                <Talk
                    key={talk.id}
                    talk={talk}
                    i={i}
                    isPlaceholder={
                        !data?.talks || (data?.talks && !data?.talks[i])
                    }
                />
            ))}

            <Button mt3>Get tickets › ›</Button>
        </Box>
    );
};

NextEvent.propTypes = {
    className: PropTypes.string,
    data: PropTypes.shape(eventPropTypes),
};

export default withSpacing(NextEvent);
