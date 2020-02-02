import React from 'react';
import { storiesOf } from '@storybook/react';
import { inputWithLabel, inputGroup, label, makeLabelPosition } from './index';
import S from '@symbols';
import Styleguide from '@utilities/styles/styleguide';

const labelPosition = makeLabelPosition(S.COLOR_BACKGROUND);

storiesOf('Blocks/Form', module)
    .add('Input', () => (
        <Styleguide>
            <Styleguide.Title>input, placeholder</Styleguide.Title>
            <div css={inputGroup}>
                <input type="text" placeholder="placeholder" />
            </div>
        </Styleguide>
    ))
    .add('Input with label', () => (
        <Styleguide>
            <Styleguide.Title>label, input</Styleguide.Title>
            <div css={inputGroup}>
                <input css={inputWithLabel} type="text" />
                <label css={[label, labelPosition]}>Label</label>
                {/* <label css={[labelPosition]}>Label</label> */}
            </div>
        </Styleguide>
    ));
