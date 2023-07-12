import UserActionTypes from './user.types';
import fetchData from '../../utils/fetchData';

export const signUp = (dataForServer) => async (dispatch) => {
  dispatch({ type: UserActionTypes.SIGN_UP_START });
  try {
    const data = await fetchData('users/signup', {
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
    const data = await fetchData('users/login', {
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
    await fetchData('users/logout', {
      method: 'GET',
    });
    dispatch({ type: UserActionTypes.SIGN_OUT_SUCCESS });
  } catch (error) {
    dispatch({ type: UserActionTypes.SIGN_OUT_FAILURE, payload: error });
  }
};
