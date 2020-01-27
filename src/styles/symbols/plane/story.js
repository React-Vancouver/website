import React from 'react';
import { storiesOf } from '@storybook/react';
import Styleguide from 'Utilities/styleguide';
import notes from './notes.md';

import S from '@symbols';
const shadows = {
    PLANE_SHADOW_0: S.PLANE_SHADOW_0,
    PLANE_SHADOW_2: S.PLANE_SHADOW_2,
    PLANE_SHADOW_4: S.PLANE_SHADOW_4,
    PLANE_SHADOW_: S.PLANE_SHADOW_6,
};

storiesOf('Symbols/Plane', module).add(
    'Shadows',
    () => (
        <>
            <Styleguide.Title>Shadow Levels</Styleguide.Title>
            <Styleguide.Grid>
                <Styleguide.Swatches property="boxShadow" scheme={shadows} />
            </Styleguide.Grid>
        </>
    ),
    { notes }
);
