import React from 'react';
import { storiesOf } from '@storybook/react';
import { area, link, button, card, cardAnimated } from './index';
import styled from '@emotion/styled';
import S from '@symbols';
const { calcSpace } = S;

const Card = styled.div({
    height: calcSpace(28),
    width: calcSpace(20),
});

storiesOf('Blocks/Interactive', module)
    .add('Area', () => <div css={[area]}>base & area</div>)
    .add('Button', () => <div css={[area, button]}>base, area & button</div>)
    .add('Link', () => <div css={[link]}>base & link</div>)
    .add('Card', () => <Card css={[area, card]}>base, area & card</Card>)
    .add('CardAnimated', () => (
        <Card css={[area, cardAnimated]}>base, area & card</Card>
    ));
