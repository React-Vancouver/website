import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import Illustration from '@constructs/Illustration';
import notes from './Illustration.notes.md';
import S from '@symbols';
import Styleguide from '@utilities/styles/styleguide';

import svgs from './svgs';

const backgroundOptions = {
  light: S.COLOR_GREYS.LIGHT,
  dark: S.COLOR_GREYS.GREY_40,
};

const figureStyles = {
  paddingTop: '1.6rem',
  paddingBottom: '1.6rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  flexDirection: 'column',
  color: S.COLOR_GREYS.MEDIUM,
  figcaption: {
    margin: 0,
  },
};

storiesOf('Constructs', module).add(
  'Illustration',
  () =>
    Object.keys(svgs).map((name) => (
      <Styleguide.Figure
        css={[
          figureStyles,
          { backgroundColor: select('theme', backgroundOptions) },
        ]}
        key={name}
      >
        <Illustration name={name} />
        <figcaption>{name}</figcaption>
      </Styleguide.Figure>
    )),
  { notes }
);
