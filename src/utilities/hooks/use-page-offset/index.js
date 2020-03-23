import { useState, useEffect, useRef } from 'react';
import throttle from 'lodash.throttle';

/**
 * Hook to track changes in client’s current scroll position.
 * @param {Array} queries eg. ['>120', '<960']
 * @returns {Object} represents x and y coordinates.
 */

const DELAY = 200;

const usePageOffset = (queries = []) => {
  const initState = queries.reduce((acc, q) => {
    acc[q] = false;
    return acc;
  }, {});
  const [matches, setMatches] = useState(initState);
  const [placeholder, setPlaceholder] = useState(initState);

  const getMatches = useRef(
    throttle(() => {
      // (1) Throttle scroll events
      // (2) Construct matches object eg. {['>120px']: true}
      // (3) Update placeholder
      const _matches = queries.reduce((acc, q) => {
        const sign = q.slice(0, 1);
        const distance = q.slice(1);

        let result = false;
        if (sign === '>') {
          result = window.pageYOffset > distance;
        }
        if (sign === '<') {
          result = window.pageYOffset < distance;
        }
        acc[q] = result;
        return acc;
      }, {});
      setPlaceholder(_matches);
    }, DELAY)
  );

  useEffect(() => {
    getMatches.current();
    window.addEventListener('scroll', getMatches.current);

    return () => window.removeEventListener('scroll', getMatches.current);
  }, [...queries]);

  // (4) Update matches when throttled placeholder values change
  useEffect(() => {
    setMatches(placeholder);
  }, [...Object.values(placeholder)]);

  return matches;
};

export default usePageOffset;
