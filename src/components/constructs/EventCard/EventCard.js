import React from 'react';
import PropTypes from 'prop-types';
import {
  footerStyles,
  headerStyles,
  rootStyles,
  speakersStyles,
  textStyles,
} from './EventCard.styles';
import { withSpacing } from '@utilities/styles/spacing';
import Avatar from '@constructs/Avatar';
import Box from '@elements/Box';
import eventPropTypes from '@utilities/prop-types/event';
import moment from 'moment';
import Text from '@elements/Text';

const EventCard = ({ className, data, image: Image, onClick }) => {
  const talks = data.talks.map(({ title }) => `“${title}”`).join(', ');
  const date = moment(data.date).format('MMM Do, YYYY');
  return (
    <article css={rootStyles} className={className} onClick={onClick}>
      <header css={headerStyles}>{Image ? <Image /> : <>&nbsp;</>}</header>
      <Box css={speakersStyles} px3>
        {data.talks.map((talk) => (
          <Avatar
            mr1
            scale={5}
            key={talk.id}
            firstName={talk?.speaker?.firstName}
            lastName={talk?.speaker?.lastName}
            alt={`${talk?.speaker?.firstName} ${talk?.speaker?.lastName} avatar photo`}
            {...talk?.speaker?.avatar}
          />
        ))}
      </Box>
      <Box p3 css={footerStyles}>
        <Text element="h6" css={textStyles}>
          <Text subheading color="grey_40">
            {date}
          </Text>
          <Text subheading color="grey_70">
            &emsp;@&thinsp;{data?.host?.name}
          </Text>
        </Text>
        <Text element="p" m0 color="grey_50">
          {talks}
        </Text>
      </Box>
    </article>
  );
};

EventCard.propTypes = {
  className: PropTypes.string,
  data: PropTypes.shape(eventPropTypes),
  image: PropTypes.node,
  onClick: PropTypes.func,
};

export default withSpacing(EventCard);
