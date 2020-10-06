import React from 'react';
import PropTypes from 'prop-types';
import { withSpacing } from '@utilities/styles/spacing';
import { LevelStyles, ColumnStyles, textBlockStyles } from './Sponsors.styles';

import Box from '@elements/Box';
import Text from '@elements/Text';
import ButtonWithIcon from '@elements/ButtonWithIcon';
import SponsorSection from '@sections/Sponsors';

const Sponsors = ({ className, data }) => {
  return (
    <Box mt5 container className={className}>
      <Text title mb5 element="h1" color="tertiary" scale={16}>
        Sponsors
      </Text>
      <Box css={LevelStyles}>
        <Text css={textBlockStyles} paragraph>
          Mollit cillum cillum nulla aliquip officia Lorem. Magna enim voluptate
          dolore laboris ad aliquip est minim velit excepteur aliquip dolor.
          Excepteur dolor sint qui ea. Aute qui do elit cillum non deserunt
          ullamco proident qui esse pariatur.
        </Text>
        <ButtonWithIcon css={textBlockStyles} color="secondary_d" size="large" iconName="heart">
          Become a Sponsor
        </ButtonWithIcon>
      </Box>
      <Box css={LevelStyles}>
        <Box css={ColumnStyles}>
          <Text heading mb4 scale={8}>
            Max
          </Text>
          <Text paragraph>
            Fugiat aute sit mollit ad nisi occaecat est non laborum pariatur.
            Adipisicing Lorem aliquip commodo qui sint cupidatat ex esse. Irure
            aute exercitation dolor cillum officia quis consequat est sunt nulla
            sunt ullamco anim. Elit occaecat ipsum do qui. Laboris dolor non
            esse aute in exercitation ea do ea anim. Qui Lorem aliqua incididunt
            reprehenderit voluptate est adipisicing veniam amet do. Ut et do
            commodo tempor est eu pariatur non eiusmod enim.
          </Text>
        </Box>
        <Box css={ColumnStyles}>
          <Text heading mb4 scale={8}>
            Lite
          </Text>
          <Text paragraph>
            Sunt reprehenderit laborum mollit ullamco adipisicing deserunt elit
            non enim tempor dolor fugiat. Ipsum labore aute labore tempor
            aliquip qui consectetur non. Elit tempor id adipisicing duis
            incididunt officia voluptate mollit non labore irure. Proident
            aliquip anim aute minim consectetur cillum voluptate qui est commodo
            irure culpa. Reprehenderit consectetur do excepteur proident aute
            excepteur anim in nulla.
          </Text>
        </Box>
      </Box>
      <Box css={LevelStyles}></Box>
      <SponsorSection data={data} />
    </Box>
  );
};

Sponsors.propTypes = {
  className: PropTypes.string,
};

export default withSpacing(Sponsors);
