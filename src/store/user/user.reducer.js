import UserActionTypes from "./user.types";

const INITIAL_STATE = {
  user: null,
  isLoading: false,
  error: null,
  token: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_UP_START:
    case UserActionTypes.SIGN_IN_START:
    case UserActionTypes.SIGN_OUT_START:
    case UserActionTypes.RESET_PASSWORD_START:
    case UserActionTypes.UPDATE_USER_INFO_START:
      return { ...state, isLoading: true, error: null };
    case UserActionTypes.SIGN_UP_SUCCESS:
      return { ...state, isLoading: false, error: null, token: null };
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        user: action.payload.data.user,
        token: action.payload.token,
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return { ...state, user: null };
    case UserActionTypes.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        token: action.payload.token,
      };
    case UserActionTypes.UPDATE_USER_INFO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        user: { ...state.user, ...action.payload.data },
      };
    case UserActionTypes.SIGN_UP_FAILURE:
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.RESET_PASSWORD_FAILURE:
    case UserActionTypes.UPDATE_USER_INFO_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        user: null,
        token: null,
      };
    default:
      return state;
  }
};

export default userReducer;
