import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { makeRootStyles } from './Topic.styles';
import { withSpacing } from '@utilities/styles/spacing';

import Text from '@elements/Text';

const Topic = ({ className, i, topic }) => {
  const rootStyles = useMemo(() => makeRootStyles(i), [i]);

  return (
    <Text
      key={i}
      css={rootStyles}
      className={className}
      subheading
      color="white"
    >
      {topic}
    </Text>
  );
};

Topic.propTypes = {
  className: PropTypes.string,
  i: PropTypes.number,
  topic: PropTypes.string,
};

export default withSpacing(Topic);
