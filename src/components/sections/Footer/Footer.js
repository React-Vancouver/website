import React from 'react';
import PropTypes from 'prop-types';
import { withSpacing } from '@utilities/styles/spacing';
import { rootStyles } from './Footer.styles';

import Box from '@elements/Box';
import ButtonWithIcon from '@elements/ButtonWithIcon';
import Link from '@elements/Link';
import Logo from '@elements/Logo';

const Footer = ({ className, links, background, onButtonClick }) => {
  const isDarkBackground = background === 'dark';
  return (
    <div css={rootStyles} className={className}>
      <Link to="/">
        <Logo
          type={isDarkBackground ? 'logotype-inverse' : 'logotype-primary'}
        />
      </Link>
      <Box>
        {links?.map(({ title, to, out, onClick }) => (
          <Link
            mr4
            color={isDarkBackground ? 'white' : 'primary'}
            key={title}
            to={to}
            out={out}
            onClick={onClick}
          >
            {title}
          </Link>
        ))}
      </Box>
      <ButtonWithIcon color="secondary_d" onClick={onButtonClick}>
        Get involved
      </ButtonWithIcon>
    </div>
  );
};

Footer.propTypes = {
  background: PropTypes.oneOf(['light', 'dark']),
  className: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      out: PropTypes.string,
      title: PropTypes.string,
      to: PropTypes.string,
      onClick: PropTypes.func,
    })
  ),
  onButtonClick: PropTypes.func,
};

export default withSpacing(Footer);
