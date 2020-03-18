import { useEffect, useState } from 'react';

/**
 * Hook to track changes in media query matches.
 * @param {Array} queries
 * @returns {Object}
 */
const useMedia = (queries = []) => {
    const [matches, setMatches] = useState({});
    useEffect(() => {
        const mediaQueryLists = queries.map((query) =>
            window.matchMedia(query)
        );

        const updateMediaQueries = () =>
            setMatches(
                mediaQueryLists
                    .filter((mql) => mql.matches)
                    .reduce((result, mql) => {
                        result[mql.media] = true;
                        return result;
                    }, {})
            );
        updateMediaQueries();

        mediaQueryLists.forEach((mql) => mql.addListener(updateMediaQueries));

        return () =>
            mediaQueryLists.forEach((mql) =>
                mql.removeListener(updateMediaQueries)
            );
    }, [...queries]);

    return matches;
};

export default useMedia;
