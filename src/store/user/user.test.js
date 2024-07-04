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
});
