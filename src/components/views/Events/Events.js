import React from 'react';
import PropTypes from 'prop-types';
import { withSpacing } from '@utilities/styles/spacing';
import EventCard from '@constructs/EventCard';
import Button from '@elements/Button';
import { format } from 'date-fns'

import {
  heroStyles,
  timelineContainerStyles,
  timelineMarkStyles,
  timestampStyles,
  eventStyles,
} from './Events.styles';

import fakeEvent from '../../../../__mocks__/data/event-mock';

const eventsData = fakeEvent({ withTalks: true });

import Text from '@elements/Text';
import Line from '@elements/Line';
import Box from '@elements/Box';

const Events = ({ className }) => {
  return (
    <Box className={className}>
      <Box container>
        <Box
          px4
          pb4
          pt8
          my8
          backgroundColor="grey_30"
          corner="lg"
          css={heroStyles}
        >
          <Text element="h1" title scale={20} color="secondary_l">
            Events
          </Text>
          <Box>
            <Text element="h2" mt2 mb8 subheading color="white">
              Monthly gatherings of engineers of all levels. Get inspired, meet your peers and get connected to opportunities.
            </Text>
            <Button mb4>Check our next event</Button>
          </Box>
        </Box>
      </Box>
      <Line />
      <Box container py4 css={timelineContainerStyles}>
        {Array.from(Array(6)).map((_, i) => (
          <Box css={eventStyles} key={i} mb4>
            <div css={timelineMarkStyles} />
            <Text mt2 ml2 caption css={timestampStyles}>{format(eventsData.date, 'do MMMM, y')}</Text>
            <EventCard ml4 data={eventsData} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

Events.propTypes = {
  className: PropTypes.string,
};

export default withSpacing(Events);
