import React from 'react';
import PropTypes from 'prop-types';
import {
  footerStyles,
  headerStyles,
  rootStyles,
  speakerStyles,
} from './TalkCard.styles';
import { withSpacing } from '@utilities/styles/spacing';
import Avatar from '@constructs/Avatar';
import Box from '@elements/Box';
import talkPropTypes from '@utilities/prop-types/talk';
import Text from '@elements/Text';

const TalkCard = ({ className, data, image: Image, onClick }) => {
  const { title, description, speaker } = data;

  return (
    <article css={rootStyles} className={className} onClick={onClick}>
      <header css={headerStyles}>{Image ? <Image /> : <>&nbsp;</>}</header>
      <Box css={speakerStyles} px3>
        <Avatar
          mr1
          scale={8}
          firstName={speaker?.firstName}
          lastName={speaker?.lastName}
          alt={`${speaker?.firstName} ${speaker?.lastName} avatar photo`}
          {...speaker?.avatar}
        />
      </Box>
      <Box p3 css={footerStyles}>
        <Text element="h2" subheading color="secondary_d">
          {title}
        </Text>
        <Text element="p" m0 color="grey_50">
          {description}
        </Text>
      </Box>
    </article>
  );
};

TalkCard.propTypes = {
  className: PropTypes.string,
  data: PropTypes.shape(talkPropTypes),
  image: PropTypes.node,
  onClick: PropTypes.func,
};

export default withSpacing(TalkCard);
