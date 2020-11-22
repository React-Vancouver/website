import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { withSpacing } from '@utilities/styles/spacing';
import { constructStyles } from './Line.styles';

const Line = ({ className, ...restProps }) => {
  const styles = useMemo(() => constructStyles(restProps), [restProps]);
  return <hr css={styles} className={className} />;
};

Line.propTypes = {
  className: PropTypes.string,
};

export default withSpacing(Line);
