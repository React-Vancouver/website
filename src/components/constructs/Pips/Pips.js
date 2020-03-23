import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { withSpacing } from '@utilities/styles/spacing';
import { constructPipStyles } from './Pips.styles';

import Pip from '@constructs/Pip';
import { sizes, colors } from '@constructs/Pip/Pip.styles';

const Pips = ({
  active,
  background,
  className,
  color,
  length,
  setActive,
  size,
  withNumber,
}) => {
  const array = useMemo(() => Array.from(Array(length)), [length]);
  const pipStyles = useMemo(() => constructPipStyles({ size }), [size]);

  return (
    <div className={className}>
      {array.map((_, i) => (
        <Pip
          background={background}
          color={color}
          css={pipStyles}
          i={i}
          isActive={active === i}
          key={i}
          onClick={setActive}
          size={size}
          withNumber={withNumber}
        />
      ))}
    </div>
  );
};

Pips.propTypes = {
  active: PropTypes.number,
  background: PropTypes.oneOf(['light', 'dark']),
  className: PropTypes.string,
  color: PropTypes.oneOf(Object.keys(colors)),
  length: PropTypes.number,
  setActive: PropTypes.func,
  size: PropTypes.oneOf(Object.keys(sizes)),
  withNumber: PropTypes.bool,
};

export default withSpacing(Pips);
