import UserActionTypes from './user.types';

const INITIAL_STATE = {
  user: null,
  isLoading: false,
  error: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_UP_START:
    case UserActionTypes.SIGN_IN_START:
    case UserActionTypes.SIGN_OUT_START:
      return { ...state, isLoading: true, error: null };
    case UserActionTypes.SIGN_UP_SUCCESS:
      return { ...state, isLoading: false };
    case UserActionTypes.SIGN_IN_SUCCESS:
      return { ...state, isLoading: false, user: action.payload };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return { ...state, user: null };
    case UserActionTypes.SIGN_UP_FAILURE:
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};

export default userReducer;
