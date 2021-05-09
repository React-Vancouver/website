import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { withSpacing } from '@utilities/styles/spacing';
import { rootStyles, inputStyles, labelStyles } from './TextArea.styles';

import Text from '@elements/Text';

const TextArea = forwardRef(({ className, label, type }, ref) => (
  <div css={rootStyles} className={className}>
    <textarea type={type} ref={ref} id={label} css={inputStyles} />
    <Text element="label" for={label} css={labelStyles} px1 mb0 caption>
      {label}
    </Text>
  </div>
));

TextArea.propTypes = {
  className: PropTypes.string,
};

export default withSpacing(TextArea);
