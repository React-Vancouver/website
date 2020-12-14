import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { withSpacing } from '@utilities/styles/spacing';
import { rootStyles, inputStyles, labelStyles } from './Field.styles';

import Text from '@elements/Text';

const Field = forwardRef(({ className, label, type }, ref) => (
  <div css={rootStyles} className={className}>
    <input type={type} ref={ref} id={label} css={inputStyles} />
    <Text element="label" for={label} css={labelStyles} px1 mb0 caption>
      {label}
    </Text>
  </div>
));

Field.propTypes = {
  className: PropTypes.string,
};

export default withSpacing(Field);
