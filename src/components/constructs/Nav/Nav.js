import React from 'react';
import PropTypes from 'prop-types';
import { withSpacing } from '@utilities/styles/spacing';
import { linksStyles, buttonStyles } from './Nav.styles';
import Box from '@elements/Box';
import Link from '@elements/Link';
import ButtonWithIcon from '@elements/ButtonWithIcon';
import Grid from '@elements/Grid';

const Nav = ({ className, links, buttonText, onButtonClick }) => {
  return (
    <Grid fixed={2} className={className}>
      <Box css={linksStyles}>
        {links?.map(({ title, to, out, onClick }) => (
          <Link mr4 key={title} to={to} out={out} onClick={onClick}>
            {title}
          </Link>
        ))}
      </Box>
      <Box css={buttonStyles}>
        <ButtonWithIcon capped color="secondary_d" onClick={onButtonClick}>
          {buttonText}
        </ButtonWithIcon>
      </Box>
    </Grid>
  );
};

Nav.propTypes = {
  buttonText: PropTypes.string,
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

export default withSpacing(Nav);
