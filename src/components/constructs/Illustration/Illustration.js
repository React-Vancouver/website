import React from 'react';
import PropTypes from 'prop-types';
import { withSpacing } from '@utilities/styles/spacing';
import svgs from './svgs';

const IllustrationWrapper = ({ name, className }) => {
  const Illustration = svgs[name];

  if (!Illustration) {
    return <div />;
  }

  return <Illustration className={className} css={{ display: 'block' }} />;
};

IllustrationWrapper.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
};

export default withSpacing(IllustrationWrapper);
