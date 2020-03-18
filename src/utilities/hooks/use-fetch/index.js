import { useCallback, useEffect, useReducer, useRef } from 'react';
import reducer, { initialState } from './reducer';
/**
 * Hook to retrieve data from a specified endpoint
 * @param {string} url
 * @returns {object} response
 */
const useFetch = (url) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { data, error, isLoading } = state;

    const controller = useRef(new AbortController());

    const fetchData = useCallback(() => {
        dispatch({ type: 'FETCH_ATTEMPT' });

        fetch(url, { signal: controller.current.signal })
            .then((response) => {
                const respondWith = response.ok
                    ? (response) =>
                          dispatch({
                              type: 'FETCH_SUCCESS',
                              payload: { response },
                          })
                    : (response) =>
                          dispatch({
                              type: 'FETCH_FAIL',
                              payload: { error: response },
                          });

                // Resolve JSON if possible
                return response
                    .json()
                    .then(respondWith)
                    .catch(() => respondWith(response));
            })
            .catch((error) =>
                dispatch({ type: 'FETCH_FAIL', payload: { error } })
            );
    }, [url]);

    useEffect(() => () => controller.current.abort(), []);
    useEffect(() => fetchData(), [fetchData]);

    return {
        data,
        error,
        isLoading,
    };
};

export default useFetch;
