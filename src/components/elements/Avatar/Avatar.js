import React from 'react';
import PropTypes from 'prop-types';
import { withSpacing } from '@utilities/styles/spacing';
import GatsbyImage from 'gatsby-image';
import { constructStyles } from './Avatar.styles';
import Picture from '@elements/Picture';

const Avatar = ({ alt, scale, srcSets, src, ...restProps }) => {
    const styles = constructStyles({ scale });

    if (src) {
        return <Picture css={styles} src={src} srcSets={srcSets} alt={alt} />;
    }

    return <GatsbyImage css={styles} {...restProps} alt={alt} />;
};

Avatar.defaultProps = {
    scale: 6,
};

Avatar.propTypes = {
    alt: PropTypes.string.isRequired,
    scale: PropTypes.number,
    src: PropTypes.string,
    srcSets: PropTypes.array,
};

export default withSpacing(Avatar);
