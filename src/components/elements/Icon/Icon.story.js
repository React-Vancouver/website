import React from 'react';
import { storiesOf } from '@storybook/react';
import Icon from '@elements/Icon';
import notes from './Icon.notes.md';
import S from '@symbols';
import Styleguide from '@utilities/styles/styleguide';

import icons from './icons';

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
const iconStyles = {
    width: '2.4rem',
    height: '2.4rem',
};

storiesOf('Elements', module).add(
    'Icon',
    () => (
        <Styleguide.Grid>
            {Object.keys(icons).map((name) => (
                <Styleguide.Figure css={figureStyles} key={name}>
                    <Icon css={iconStyles} name={name} />
                    <figcaption>{name}</figcaption>
                </Styleguide.Figure>
            ))}
        </Styleguide.Grid>
    ),
    { notes }
);
