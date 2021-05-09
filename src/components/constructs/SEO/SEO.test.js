import React from 'react';
import * as Gatsby from 'gatsby';
import { render } from '@testing-library/react';

import SEO from './SEO';

jest.spyOn(Gatsby, 'useStaticQuery').mockImplementation(() => ({
  site: {
    siteMetadata: {
      author: 'Jane Doe',
      description: 'Bar',
      title: 'Foo',
    },
  },
}));

describe('SEO', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    const tree = render(<SEO page="test" />);

    expect(tree).toBeTruthy();
  });
});
