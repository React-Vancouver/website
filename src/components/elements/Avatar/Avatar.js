import React from 'react';
import PropTypes from 'prop-types';
import { withSpacing } from '@utilities/styles/spacing';
import GatsbyImage from 'gatsby-image';
import { constructStyles } from './Avatar.styles';
import Picture from '@elements/Picture';

const Avatar = ({
  alt,
  className,
  firstName,
  fixed,
  fluid,
  lastName,
  scale,
  src,
  srcSets,
  ...restProps
}) => {
  const styles = constructStyles({ scale });

  if (src) {
    return (
      <Picture
        className={className}
        css={styles}
        src={src}
        srcSets={srcSets}
        alt={alt}
      />
    );
  }

  if (fixed) {
    return (
      <GatsbyImage
        alt={alt}
        className={className}
        css={styles}
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
        css={styles}
        fluid={fluid}
        {...restProps}
      />
    );
  }

  return (
    <div css={styles} className={className}>
      <span>
        {firstName[0]}
        {lastName[0]}
      </span>
    </div>
  );
};

Avatar.defaultProps = {
  scale: 6,
  firstName: ' ',
  lastName: ' ',
};

Avatar.propTypes = {
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  firstName: PropTypes.string,
  fixed: PropTypes.object,
  fluid: PropTypes.object,
  lastName: PropTypes.string,
  scale: PropTypes.number,
  src: PropTypes.string,
  srcSets: PropTypes.array,
};

export default withSpacing(Avatar);
