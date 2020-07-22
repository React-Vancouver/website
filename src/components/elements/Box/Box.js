import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { withSpacing } from '@utilities/styles/spacing';
import { constructStyles } from './Box.styles';

const Box = ({ className, children, element: Element, ...restProps }) => {
  const styles = useMemo(() => constructStyles(restProps), [restProps]);

  return (
    <Element css={styles} className={className}>
      {children}
    </Element>
  );
};

Box.defaultProps = {
  element: 'div',
};

Box.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
  className: PropTypes.string,
  element: PropTypes.node,
};

export default withSpacing(Box);
