/** @jsx jsx */
import { jsx } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import { area, link, button, card } from './index';

storiesOf('Blocks/Interactive', module)
    .add('Area', () => <div css={[area]}>base & area</div>)
    .add('Button', () => <div css={[area, button]}>base, area & button</div>)
    .add('Link', () => <div css={[link]}>base & link</div>)
    .add('Card', () => <div css={[area, card]}>base, area & card</div>);
