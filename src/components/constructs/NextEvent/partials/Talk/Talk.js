import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { withSpacing } from '@utilities/styles/spacing';
import { constructStyles } from './Talk.styles';
import talkPropTypes from '@utilities/prop-types/talk.js';
import Avatar from '@constructs/Avatar';
import Box from '@elements/Box';
import Text from '@elements/Text';

const Talk = ({ className, talk, isPlaceholder, i }) => {
  const styles = useMemo(() => constructStyles(isPlaceholder), [isPlaceholder]);
  return (
    <Box mb2 css={styles} className={className}>
      <Avatar
        firstName={talk?.speaker?.firstName}
        lastName={talk?.speaker?.lastName}
        alt={`${talk?.speaker?.firstName} ${talk?.speaker?.lastName} avatar photo`}
      />
      <Box>
        <Text mt2 color="white" element="h2">
          {isPlaceholder
            ? `Speaker #${i + 1}`
            : `${talk.speaker.firstName} ${talk.speaker.lastName}`}
        </Text>
        <Text
          color="white"
          font="heading"
          element="h3"
          scale={talk?.title?.length > 30 ? 5 : 7}
        >
          {talk?.title}
        </Text>
      </Box>
    </Box>
  );
};

Talk.propTypes = {
  className: PropTypes.string,
  i: PropTypes.number,
  isPlaceholder: PropTypes.bool,
  talk: PropTypes.shape(talkPropTypes),
};

export default withSpacing(Talk);
