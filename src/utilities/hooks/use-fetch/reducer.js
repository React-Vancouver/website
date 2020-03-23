export const initialState = {
  data: null,
  error: null,
  isLoading: false,
};

export default (state, action) => {
  switch (action.type) {
    case 'FETCH_ATTEMPT':
      return !state.isLoading
        ? { ...state, error: null, isLoading: true }
        : state;

    case 'FETCH_SUCCESS':
      return {
        data: action.payload.response,
        error: null,
        isLoading: false,
      };

    case 'FETCH_FAIL':
      return { ...state, error: action.payload.error, isLoading: false };

    case 'FETCH_ABORT':
      return { ...state, error: null, isLoading: false };

    default:
      return state;
  }
};
