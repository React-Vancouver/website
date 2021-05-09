import React from 'react';
import renderer from 'react-test-renderer';
import { render } from "@testing-library/react";

import Events from './Events';

describe('Events', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<Events />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
});