import UserActionTypes from "./user.types";
import fetchData from "../../utils/fetchData";

export const signUp = (dataForServer) => async (dispatch) => {
  dispatch({ type: UserActionTypes.SIGN_UP_START });
  try {
    const data = await fetchData("users/signup", {
      body: JSON.stringify(dataForServer),
    });
    dispatch({ type: UserActionTypes.SIGN_UP_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: UserActionTypes.SIGN_UP_FAILURE, payload: error });
  }
};

export const signIn = (dataForServer) => async (dispatch) => {
  dispatch({ type: UserActionTypes.SIGN_IN_START });
  try {
    const data = await fetchData("users/login", {
      body: JSON.stringify(dataForServer),
    });
    dispatch({ type: UserActionTypes.SIGN_IN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: UserActionTypes.SIGN_IN_FAILURE, payload: error });
  }
};

export const signOut = () => async (dispatch) => {
  dispatch({ type: UserActionTypes.SIGN_OUT_START });
  try {
    await fetchData("users/logout", {
      method: "GET",
    });
    dispatch({ type: UserActionTypes.SIGN_OUT_SUCCESS });
  } catch (error) {
    dispatch({ type: UserActionTypes.SIGN_OUT_FAILURE, payload: error });
  }
};

export const resetPassword = (email) => async (dispatch) => {
  dispatch({ type: UserActionTypes.RESET_PASSWORD_START });
  try {
    const data = await fetchData("users/reset-password", {
      method: "POST",
      body: JSON.stringify({ email }),
    });
    dispatch({ type: UserActionTypes.RESET_PASSWORD_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: UserActionTypes.RESET_PASSWORD_FAILURE, payload: error });
  }
};

export const updateUserInfo = (updated) => async (dispatch) => {
  dispatch({ type: UserActionTypes.UPDATE_USER_INFO_START });
  try {
    const data = await fetchData("users/update", {
      method: "PUT",
      body: JSON.stringify(updated),
    });
    dispatch({
      type: UserActionTypes.UPDATE_USER_INFO_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UserActionTypes.UPDATE_USER_INFO_FAILURE,
      payload: error,
    });
  }
};
