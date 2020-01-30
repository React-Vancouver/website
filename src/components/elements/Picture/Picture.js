import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { withSpacing } from '@utilities/styles/spacing';
import { constructStyles } from './Picture.styles';

const Source = ({ srcSet, media }) => <source srcSet={srcSet} media={media} />;

Source.propTypes = {
    srcSet: PropTypes.string,
    media: PropTypes.string,
};

const Picture = ({ alt, src, srcSets, className, ...restProps }) => {
    const styles = useMemo(() => constructStyles(restProps), [restProps]);

    return (
        <picture css={styles}>
            {srcSets.map(({ srcSet, media }) => (
                <Source key={srcSet} srcSet={srcSet} media={media} />
            ))}
            <img src={src} className={className} alt={alt} />
        </picture>
    );
};
Picture.defaultProps = {
    srcSets: [],
};

Picture.propTypes = {
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    className: PropTypes.string,
    srcSets: PropTypes.array,
};

export default withSpacing(Picture);
