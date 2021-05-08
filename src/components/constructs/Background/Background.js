import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { withSpacing } from '@utilities/styles/spacing';
import {
  constructBackgroundStyles,
  imageStyles,
  placeholderStyles,
} from './Background.styles';

import Image from '@elements/Image';

const Background = ({ className, alt, data, src, ...restProps }) => {
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

  if (data) {
    return (
      <Image
        alt={alt}
        css={imageStyles}
        className={className}
        data={data}
        {...restProps}
      />
    );
  }

  return <div css={placeholderStyles} className={className} />;
};

Background.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  data: PropTypes.object,
  src: PropTypes.string,
  srcSets: PropTypes.array,
};

export default withSpacing(Background);
