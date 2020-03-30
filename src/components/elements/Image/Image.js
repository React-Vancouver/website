import React from 'react';
import PropTypes from 'prop-types';
import { withSpacing } from '@utilities/styles/spacing';
import { placeholderStyles } from './Image.styles';

import GatsbyImage from 'gatsby-image';
import Picture from '@elements/Picture';

const Image = ({
  className,
  alt,
  fixed,
  fluid,
  src,
  srcSets,
  placeholder: Placeholder,
  ...restProps
}) => {
  if (src) {
    return (
      <Picture className={className} src={src} srcSets={srcSets} alt={alt} />
    );
  }

  if (fixed) {
    return (
      <GatsbyImage
        alt={alt}
        className={className}
        fixed={fixed}
        {...restProps}
      />
    );
  }

  if (fluid) {
    return (
      <GatsbyImage
        alt={alt}
        className={className}
        fluid={fluid}
        {...restProps}
      />
    );
  }

  if (Placeholder) {
    return <Placeholder className={className} />;
  }

  return <div css={placeholderStyles} className={className} />;
};

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  fixed: PropTypes.object,
  fluid: PropTypes.object,
  placeholder: PropTypes.node,
  src: PropTypes.string,
  srcSets: PropTypes.array,
};

export default withSpacing(Image);
