import React from 'react';
import PropTypes from 'prop-types';
import { withSpacing } from '@utilities/styles/spacing';
import {
  rootStyles,
  heroStyles,
  wallStyles,
  profilePhotoStyles,
  formInnerStyles,
} from './Speakers.styles';

import Background from '@constructs/Background';
import Box from '@elements/Box';
import Text from '@elements/Text';
import Field from '@elements/Field';
import TextArea from '@elements/TextArea';
import Button from '@elements/Button';

const Speakers = ({ className, data }) => {
  return (
    <Box css={rootStyles} className={className} backgroundColor="grey_20" pt8>
      <Box px4 pb4 pt8 container css={heroStyles}>
        <div>
          <Text element="h1" title scale={20} color="white">
            Speakers
          </Text>
          <Text element="h2" mt2 mb8 subheading color="white">
            Apply to speak at ReactVancouver. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Praesentium enim cumque at corporis
            blanditiis illo ipsum! Nostrum, aperiam ipsa dolorem,
          </Text>
        </div>
        <Box p4 backgroundColor="white" corner="sm" elevation="high">
          <form>
            <Text element="legend" subheading mb3>Talk Proposal</Text>
            <div css={formInnerStyles}>
              <Field label="First name" />
              <Field label="Last name" />
              <Field label="Email"/>
              <Field label="Talk title"/>
            </div>
            <TextArea label="Description" my3/>
            <Button>Submit</Button>
          </form>

        </Box>
      </Box>
      <Box pb10 container css={wallStyles}>
        {data.map((speaker) => (
          <Box key={speaker.id}>
            <div css={profilePhotoStyles}>
              <Background
                src="http://placeimg.com/640/360/any"
                alt={`${speaker.firstName} ${speaker.lastName} profile photo`}
              />
            </div>
            <Text mt2 subheading element="h3" heading color="white">
              {speaker.firstName} {speaker.lastName}
            </Text>
            <Text element="p" color="grey_70">
              {speaker.title} @ {speaker.company.name}
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
