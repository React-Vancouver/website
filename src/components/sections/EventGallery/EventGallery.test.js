import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';

import EventGallery from './EventGallery';

describe('EventGallery', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<EventGallery />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
