import userReducer from "./user.reducer";
import UserActionTypes from "./user.types";

const INITIAL_STATE = {
  user: null,
  isLoading: false,
  error: null,
  token: null,
};

describe("User reducer", () => {
  it("should start user signup", () => {
    const newState = userReducer(INITIAL_STATE, {
      type: UserActionTypes.SIGN_UP_START,
    });
    expect(newState).toEqual({
      user: null,
      isLoading: true,
      error: null,
      token: null,
    });
  });
  it("should start user signin", () => {
    const newState = userReducer(INITIAL_STATE, {
      type: UserActionTypes.SIGN_IN_START,
    });
    expect(newState).toEqual({
      user: null,
      isLoading: true,
      error: null,
      token: null,
    });
  });
  it("should start user reset password", () => {
    const newState = userReducer(INITIAL_STATE, {
      type: UserActionTypes.RESET_PASSWORD_START,
    });
    expect(newState).toEqual({
      user: null,
      isLoading: true,
      error: null,
      token: null,
    });
  });
  it("should start user update info", () => {
    const newState = userReducer(INITIAL_STATE, {
      type: UserActionTypes.UPDATE_USER_INFO_START,
    });
    expect(newState).toEqual({
      user: null,
      isLoading: true,
      error: null,
      token: null,
    });
  });
  it("should start user sign out", () => {
    const newState = userReducer(INITIAL_STATE, {
      type: UserActionTypes.SIGN_OUT_START,
    });
    expect(newState).toEqual({
      user: null,
      isLoading: true,
      error: null,
      token: null,
    });
  });

  it("should successfully sign up user", () => {
    const newState = userReducer(
      { ...INITIAL_STATE, isLoading: true },
      {
        type: UserActionTypes.SIGN_UP_SUCCESS,
      }
    );
    expect(newState).toEqual({
      user: null,
      isLoading: false,
      error: null,
      token: null,
    });
  });
  it("should successfully sign in user", () => {
    const token = "gsjho4oigs4";
    const user = { id: 1 };
    const newState = userReducer(
      { ...INITIAL_STATE, isLoading: true },
      {
        type: UserActionTypes.SIGN_IN_SUCCESS,
        payload: { data: { user }, token },
      }
    );
    expect(newState).toEqual({
      user: user,
      isLoading: false,
      error: null,
      token: token,
    });
  });
  it("should successfully sign out user", () => {
    const newState = userReducer(
      { ...INITIAL_STATE, isLoading: true },
      {
        type: UserActionTypes.SIGN_OUT_SUCCESS,
      }
    );
    expect(newState).toEqual({
      user: null,
      isLoading: false,
      error: null,
      token: null,
    });
  });
  it("should successfully reset user password", () => {
    const newToken = "fj1hto4dg42";
    const newState = userReducer(
      {
        ...INITIAL_STATE,
        isLoading: true,
        token: "gsjho4oigs4",
        user: { id: 1 },
      },
      {
        type: UserActionTypes.RESET_PASSWORD_SUCCESS,
        payload: { token: newToken },
      }
    );
    expect(newState).toEqual({
      user: { id: 1 },
      isLoading: false,
      error: null,
      token: newToken,
    });
  });
  it("should successfully update user info", () => {
    const token = "gsjho4oigs4";
    const newState = userReducer(
      {
        ...INITIAL_STATE,
        isLoading: true,
        token,
        user: { id: 1, name: "name" },
      },
      {
        type: UserActionTypes.UPDATE_USER_INFO_SUCCESS,
        payload: { data: { name: "newName" } },
      }
    );
    expect(newState).toEqual({
      user: { id: 1, name: "newName" },
      isLoading: false,
      error: null,
      token,
    });
  });
});
