import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, number, select } from '@storybook/addon-knobs';
import Text from '@elements/Text';
import notes from './Text.notes.md';
import S from '@symbols';
import { FONTS } from './Text.styles';

const lorem =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, iure? Amet, quidem officiis porro molestias, aspernatur impedit laborum vero illo incidunt ipsa assumenda sit? Esse aspernatur reprehenderit iure et nam.';

const colorOptions = Object.keys({ ...S.COLOR_THEME, ...S.COLOR_GREYS }).reduce(
    (acc, color) => {
        const _c = color.toLowerCase();
        acc[_c] = _c;
        return acc;
    },
    { none: null }
);

const fontOptions = Object.keys(FONTS).reduce(
    (acc, font) => {
        const _f = font.toLowerCase();
        acc[_f] = _f;
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
            color={select('color', colorOptions)}
            font={select('font', fontOptions)}
        >
            {text('Text', lorem)}
        </Text>
    ),
    { notes }
);
