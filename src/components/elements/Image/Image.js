import React from 'react';
import PropTypes from 'prop-types';
import { withSpacing } from '@utilities/styles/spacing';
import { placeholderStyles } from './Image.styles';

import { GatsbyImage } from 'gatsby-plugin-image';
import Picture from '@elements/Picture';

const Image = ({
  className,
  alt,
  data,
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

  if (data) {
    return (
      <GatsbyImage
        alt={alt}
        className={className}
        image={data}
        placeholder="dominantColor"
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
  data: PropTypes.object,
  placeholder: PropTypes.node,
  src: PropTypes.string,
  srcSets: PropTypes.array,
};

export default withSpacing(Image);
