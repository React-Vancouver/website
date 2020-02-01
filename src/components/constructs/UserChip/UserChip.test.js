import React from 'react';
import renderer from 'react-test-renderer';
import { render } from "@testing-library/react";

import UserChip from './UserChip';

describe('UserChip', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<UserChip />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
});