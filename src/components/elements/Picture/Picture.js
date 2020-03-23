import React from 'react';
import PropTypes from 'prop-types';
import { withSpacing } from '@utilities/styles/spacing';

const Source = ({ srcSet, media }) => <source srcSet={srcSet} media={media} />;

Source.propTypes = {
  srcSet: PropTypes.string,
  media: PropTypes.string,
};

const Picture = ({ alt, src, srcSets, className }) => {
  return (
    <picture>
      {srcSets.map(({ srcSet, media }) => (
        <Source key={srcSet} srcSet={srcSet} media={media} />
      ))}
      <img src={src} className={className} alt={alt} />
    </picture>
  );
};

Picture.defaultProps = {
  srcSets: [],
};

Picture.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  srcSets: PropTypes.array,
};

export default withSpacing(Picture);
