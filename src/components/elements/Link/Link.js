import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { withSpacing } from '@utilities/styles/spacing';
import { Link as GatsbyLink } from 'gatsby';
import { constructStyles } from './Link.styles';

const Arrow = () => <>&ensp;›&thinsp;›</>;

const Link = ({
  children,
  className,
  withArrow,
  to,
  out,
  onClick,
  ...restProps
}) => {
  const styles = useMemo(() => constructStyles(restProps), [restProps]);

  // Internal
  if (to) {
    return (
      <GatsbyLink css={styles} to={to} className={className}>
        {children}
        {withArrow && <Arrow />}
      </GatsbyLink>
    );
  }

  // External
  if (out) {
    return (
      <a
        className={className}
        href={out}
        target="_blank"
        rel="noopener noreferrer"
        css={styles}
      >
        {children}
        {withArrow && <Arrow />}
      </a>
    );
  }

  // Fallback
  return (
    <span onClick={onClick} className={className} css={styles}>
      {children}
      {withArrow && <Arrow />}
    </span>
  );
};

Link.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  out: PropTypes.string,
  to: PropTypes.string,
  withArrow: PropTypes.bool,
};

export default withSpacing(Link);
