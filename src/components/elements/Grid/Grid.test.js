import React from 'react';
import renderer from 'react-test-renderer';
import { render } from "@testing-library/react";

import Grid from './Grid';

describe('Grid', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<Grid />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
});