import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, number, select } from '@storybook/addon-knobs';
import Text from '@elements/Text';
import notes from './Text.notes.md';
import S from '@symbols';

const lorem =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, iure? Amet, quidem officiis porro molestias, aspernatur impedit laborum vero illo incidunt ipsa assumenda sit? Esse aspernatur reprehenderit iure et nam.';

const options = Object.keys({ ...S.COLOR_THEME, ...S.COLOR_GREYS }).reduce(
    (acc, color) => {
        const _c = color.toLowerCase();
        acc[_c] = _c;
        return acc;
    },
    { none: null }
);

storiesOf('Elements', module).add(
    'Text',
    () => (
        <Text
            title={boolean('title', false)}
            heading={boolean('heading', false)}
            subheading={boolean('subheading', false)}
            caption={boolean('caption', false)}
            emphasis={boolean('emphasis', false)}
            label={boolean('label', false)}
            scale={number('scale')}
            color={select('color', options)}
        >
            {text('Text', lorem)}
        </Text>
    ),
    { notes }
);
