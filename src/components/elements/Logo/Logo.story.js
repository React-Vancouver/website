import React from 'react';
import { storiesOf } from '@storybook/react';
import Logo from '@elements/Logo';
import notes from './Logo.notes.md';
import S from '@symbols';
import Styleguide from '@utilities/styles/styleguide';

import logos from './svgs';

const figureStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
    color: S.COLOR_GREYS.MEDIUM,
    figcaption: {
        margin: 0,
    },
};
const logoStyles = {
    width: '20rem',
    height: 'auto',
};

storiesOf('Elements', module).add(
    'Logo',
    () => (
        <Styleguide.Grid size={24}>
            {Object.keys(logos).map((type) => (
                <Styleguide.Figure css={figureStyles} key={type}>
                    <Logo py6 css={logoStyles} type={type} />
                    <figcaption>{type}</figcaption>
                </Styleguide.Figure>
            ))}
        </Styleguide.Grid>
    ),
    { notes }
);
