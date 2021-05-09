import React from 'react';
import PropTypes from 'prop-types';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { withSpacing } from '@utilities/styles/spacing';
import { figcaptionStyles } from './Figure.styles';
import clientConfig from '../../../../config/client';

import Image from '@elements/Image';

const Figure = ({ className, node }) => {
  if (!node?.asset?._ref) {
    return null;
  }
  const imageData = getGatsbyImageData(
    node.asset._ref,
    { maxWidth: 675 },
    clientConfig.sanity
  );

  return (
    <figure className={className}>
      <Image data={imageData} alt={node.alt} />
      <figcaption css={figcaptionStyles}>{node.caption}</figcaption>
    </figure>
  );
};

Figure.propTypes = {
  className: PropTypes.string,
  node: PropTypes.shape({
    alt: PropTypes.string,
    caption: PropTypes.string,
    asset: PropTypes.shape({
      _ref: PropTypes.string,
    }),
  }),
};

export default withSpacing(Figure);
