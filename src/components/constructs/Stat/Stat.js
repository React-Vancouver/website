import React from 'react';
import PropTypes from 'prop-types';
import { withSpacing } from '@utilities/styles/spacing';
import { rootStyles } from './Stat.styles';
import Text from '@elements/Text';

const Stat = ({ className, color, number, title }) => {
  return (
    <div css={rootStyles} className={className}>
      <Text title element="p" color={color} scale={18}>
        {number}
      </Text>
      <Text subheading element="p" color={color}>
        {title}
      </Text>
    </div>
  );
};

Stat.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  number: PropTypes.string,
  title: PropTypes.string,
};

export default withSpacing(Stat);
