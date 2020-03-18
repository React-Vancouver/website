import React from 'react';
import renderer from 'react-test-renderer';
import { render } from "@testing-library/react";

import SpeakerGallery from './SpeakerGallery';

describe('SpeakerGallery', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<SpeakerGallery />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
});