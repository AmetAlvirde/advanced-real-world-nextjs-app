const initialState = {
  user: null,
  isLoading: false,
  error: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'LOGOUT': {
      return { ...state, user: null };
    }
    case 'SET_USER': {
      return { ...state, user: action.user };
    }
    case 'SET_IS_LOADING': {
      return { ...state, isLoading: action.isLoading };
    }
    case 'SET_ERROR': {
      return { ...state, error: action.message, variant: action.variant };
    }
    default: {
      return state;
    }
  }
}
