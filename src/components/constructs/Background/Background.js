import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { withSpacing } from '@utilities/styles/spacing';
import {
  constructBackgroundStyles,
  imageStyles,
  placeholderStyles,
} from './Background.styles';
import GatsbyImage from 'gatsby-image';

const Background = ({ className, alt, fixed, fluid, src, ...restProps }) => {
  const backgroundStyles = useMemo(() => constructBackgroundStyles({ src }), [
    src,
  ]);

  if (src) {
    return (
      <div
        alt={alt}
        aria-label={alt}
        className={className}
        css={backgroundStyles}
        role="image"
        src={src}
      />
    );
  }

  if (fixed) {
    return (
      <GatsbyImage
        alt={alt}
        css={imageStyles}
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
        css={imageStyles}
        className={className}
        fluid={fluid}
        {...restProps}
      />
    );
  }

  return <div css={placeholderStyles} className={className} />;
};

Background.propTypes = {
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  fixed: PropTypes.object,
  fluid: PropTypes.object,
  src: PropTypes.string,
  srcSets: PropTypes.array,
};

export default withSpacing(Background);
