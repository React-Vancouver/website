import React from 'react';
import { storiesOf } from '@storybook/react';
import BrandLogo from '@constructs/BrandLogo';
import notes from './BrandLogo.notes.md';
import S from '@symbols';
import Styleguide from '@utilities/styles/styleguide';

import brands from './brands';

const figureStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  flexDirection: 'column',
  color: S.COLOR_GREYS.MEDIUM,
  figcaption: {
    margin: 0,
  },
};
const brandLogoStyles = {
  width: '2.4rem',
  height: '2.4rem',
};

storiesOf('Constructs', module).add(
  'BrandLogo',
  () => (
    <Styleguide.Grid>
      {Object.keys(brands).map((name) => (
        <Styleguide.Figure css={figureStyles} key={name}>
          <BrandLogo css={brandLogoStyles} name={name} />
          <figcaption>{name}</figcaption>
        </Styleguide.Figure>
      ))}
    </Styleguide.Grid>
  ),
  { notes }
);
