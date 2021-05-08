import React from 'react';
import PropTypes from 'prop-types';
import { withSpacing } from '@utilities/styles/spacing';
import { constructStyles } from './Avatar.styles';
import Image from '@elements/Image';

import Placeholder from './partials/Placeholder';

const Avatar = ({
  alt,
  className,
  firstName,
  data,
  lastName,
  scale,
  src,
  srcSets,
  ...restProps
}) => {
  const styles = constructStyles({ scale });

  if (src || data) {
    return (
      <Image
        className={className}
        css={styles}
        src={src}
        srcSets={srcSets}
        data={data}
        alt={alt}
        {...restProps}
      />
    );
  }

  return <Placeholder css={styles} firstName={firstName} lastName={lastName} />;
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
  data: PropTypes.object,
  lastName: PropTypes.string,
  scale: PropTypes.number,
  src: PropTypes.string,
  srcSets: PropTypes.array,
};

export default withSpacing(Avatar);
