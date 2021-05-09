import React from 'react';
import PropTypes from 'prop-types';
import { withSpacing } from '@utilities/styles/spacing';
import {
  formInnerStyles,
  heroStyles,
  profilePhotoStyles,
  rootStyles,
  statsStyles,
  wallStyles,
  topicsStyles,
} from './Speakers.styles';

import Background from '@constructs/Background';
import Box from '@elements/Box';
import Button from '@elements/Button';
import Field from '@elements/Field';
import Stat from '@constructs/Stat';
import Text from '@elements/Text';
import TextArea from '@elements/TextArea';
import Topic from './partials/Topic';

const Speakers = ({
  className,
  speakersData,
  topicsData,
  title,
  catchLine,
}) => {
  return (
    <Box css={rootStyles} className={className} backgroundColor="grey_20" pt8>
      {/* Hero */}
      <Box px4 pb4 pt8 container css={heroStyles}>
        <div>
          <Text element="h1" title scale={20} color="white">
            {title}
          </Text>
          <Text element="h2" mt2 mb8 subheading color="white">
            {catchLine}
          </Text>
        </div>
        <Box p4 backgroundColor="white" corner="sm" elevation="high">
          <form>
            <Text element="legend" subheading mb3>
              Talk Proposal
            </Text>
            <div css={formInnerStyles}>
              <Field label="First name" />
              <Field label="Last name" />
              <Field label="Email" />
              <Field label="Talk title" />
            </div>
            <TextArea label="Description" my3 />
            <Button>Submit</Button>
          </form>
        </Box>
      </Box>

      {/* Stats */}
      <Box mt4 mb10 container css={statsStyles}>
        <div css={topicsStyles}>
          {topicsData.map((topic, i) => (
            <Topic topic={topic} i={i} key={i} />
          ))}
        </div>
        <Stat number={234} color="secondary_l" title="amazing speakers" />
      </Box>

      {/* Wall of Fame */}
      <Box pb10 container css={wallStyles}>
        {speakersData.map((speaker) => (
          <Box key={speaker.id}>
            <div css={profilePhotoStyles}>
              <Background
                src={speaker.avatar?.asset?.url}
                alt={`${speaker.firstName} ${speaker.lastName} profile photo`}
              />
            </div>
            <Text mt2 subheading element="h3" heading color="white">
              {speaker.firstName} {speaker.lastName}
            </Text>
            <Text element="p" color="grey_70">
              {speaker.title} @ {speaker.company?.name ?? ''}
            </Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

Speakers.propTypes = {
  className: PropTypes.string,
};

export default withSpacing(Speakers);
