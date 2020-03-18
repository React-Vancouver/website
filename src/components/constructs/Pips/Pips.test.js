import React from 'react';
import renderer from 'react-test-renderer';
import { render } from "@testing-library/react";

import Pips from './Pips';

describe('Pips', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<Pips />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
});