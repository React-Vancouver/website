import React from 'react';
import { number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Grid from '@elements/Grid';
import notes from './Grid.notes.md';
import Box from '@elements/Box';
import styled from '@emotion/styled';
import S from '@symbols';

const GridItem = styled(Box)({
  backgroundColor: S.COLOR_GREYS.GREY_90,
  color: S.COLOR_GREYS.GREY_50,
});

storiesOf('Elements', module).add(
  'Grid',
  () => (
    <Grid
      gap={number('gap', 2)}
      fixed={number('fixed')}
      fluid={number('fluid')}
    >
      <GridItem p3>Grid Item</GridItem>
      <GridItem p3>Grid Item</GridItem>
      <GridItem p3>Grid Item</GridItem>
      <GridItem p3>Grid Item</GridItem>
      <GridItem p3>Grid Item</GridItem>
      <GridItem p3>Grid Item</GridItem>
      <GridItem p3>Grid Item</GridItem>
    </Grid>
  ),
  { notes }
);
