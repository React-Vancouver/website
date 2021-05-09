import React from 'react';
import PropTypes from 'prop-types';
import { withSpacing } from '@utilities/styles/spacing';
import { linksStyles } from './NavGroup.styles';
import Link from '@elements/Link';

const NavGroup = ({ className, color, links }) => {
  return (
    <div className={className} css={linksStyles}>
      {links?.map(({ title, to, out, onClick }) => (
        <Link color={color} key={title} mr4 onClick={onClick} out={out} to={to}>
          {title}
        </Link>
      ))}
    </div>
  );
};

NavGroup.defaultProps = {
  color: 'primary',
};

NavGroup.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      out: PropTypes.string,
      title: PropTypes.string,
      to: PropTypes.string,
      onClick: PropTypes.func,
    })
  ),
};

export default withSpacing(NavGroup);
