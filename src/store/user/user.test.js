import userReducer from "./user.reducer";
import UserActionTypes from "./user.types";
import Image from "../../assets/images/logo.png";

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
    expect(newState).toEqual({ ...INITIAL_STATE, isLoading: true });
  });
  it("should start user signin", () => {
    const newState = userReducer(INITIAL_STATE, {
      type: UserActionTypes.SIGN_IN_START,
    });
    expect(newState).toEqual({ ...INITIAL_STATE, isLoading: true });
  });
  it("should start user reset password", () => {
    const newState = userReducer(INITIAL_STATE, {
      type: UserActionTypes.RESET_PASSWORD_START,
    });
    expect(newState).toEqual({ ...INITIAL_STATE, isLoading: true });
  });
  it("should start user update info", () => {
    const newState = userReducer(INITIAL_STATE, {
      type: UserActionTypes.UPDATE_USER_INFO_START,
    });
    expect(newState).toEqual({ ...INITIAL_STATE, isLoading: true });
  });
  it("should start user sign out", () => {
    const newState = userReducer(INITIAL_STATE, {
      type: UserActionTypes.SIGN_OUT_START,
    });
    expect(newState).toEqual({ ...INITIAL_STATE, isLoading: true });
  });
  it("should start user photo upload", () => {
    const newState = userReducer(INITIAL_STATE, {
      type: UserActionTypes.UPLOAD_USER_PHOTO_START,
    });
    expect(newState).toEqual({ ...INITIAL_STATE, isLoading: true });
  });

  it("should successfully sign up user", () => {
    const newState = userReducer(
      { ...INITIAL_STATE, isLoading: true },
      {
        type: UserActionTypes.SIGN_UP_SUCCESS,
      }
    );
    expect(newState).toEqual({
      ...INITIAL_STATE,
      isLoading: false,
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
      ...INITIAL_STATE,
      user: user,
      isLoading: false,
      token: token,
    });
  });
  it("should successfully sign out user", () => {
    const newState = userReducer(
      { ...INITIAL_STATE, isLoading: true, user: { id: 1 } },
      {
        type: UserActionTypes.SIGN_OUT_SUCCESS,
      }
    );
    expect(newState).toEqual({
      ...INITIAL_STATE,
      user: null,
      isLoading: false,
    });
  });
  it("should successfully reset user password", () => {
    const newToken = "fj1hto4dg42";
    const userState = { user: { id: 1, name: "name" }, token: newToken };
    const newState = userReducer(
      {
        ...INITIAL_STATE,
        isLoading: true,
        ...userState,
        token: "gsjho4oigs4",
      },
      {
        type: UserActionTypes.RESET_PASSWORD_SUCCESS,
        payload: { token: newToken },
      }
    );
    expect(newState).toEqual({
      ...INITIAL_STATE,
      isLoading: false,
      ...userState,
    });
  });
  it("should successfully update user info", () => {
    const token = "gsjho4oigs4";
    const userState = { user: { id: 1, name: "name" }, token };
    const newState = userReducer(
      {
        ...INITIAL_STATE,
        isLoading: true,
        ...userState,
      },
      {
        type: UserActionTypes.UPDATE_USER_INFO_SUCCESS,
        payload: { data: { name: "newName" } },
      }
    );
    expect(newState).toEqual({
      ...INITIAL_STATE,
      user: { ...userState.user, name: "newName" },
      isLoading: false,
      token,
    });
  });
  it("should successfully upload user photo", () => {
    const token = "gsjho4oigs4";
    const userState = { user: { id: 1, name: "name" }, token };
    const newState = userReducer(
      {
        ...INITIAL_STATE,
        isLoading: true,
        ...userState,
      },
      {
        type: UserActionTypes.UPLOAD_USER_PHOTO_SUCCESS,
        payload: Image,
      }
    );
    expect(newState).toEqual({
      ...INITIAL_STATE,
      user: { ...userState.user, photos: [Image] },
      isLoading: false,
      token,
    });
  });
  it("should fail sign up user", () => {
    const error = new Error("Something went wrong");
    const newState = userReducer(
      { ...INITIAL_STATE, isLoading: true },
      {
        type: UserActionTypes.SIGN_UP_FAILURE,
        payload: error,
      }
    );
    expect(newState).toEqual({
      ...INITIAL_STATE,
      isLoading: false,
      error: error,
    });
  });
  it("should fail sign in user", () => {
    const error = new Error("Something went wrong");
    const newState = userReducer(
      { ...INITIAL_STATE, isLoading: true },
      {
        type: UserActionTypes.SIGN_IN_FAILURE,
        payload: error,
      }
    );
    expect(newState).toEqual({
      ...INITIAL_STATE,
      isLoading: false,
      error: error,
    });
  });
  it("should fail sign out user", () => {
    const error = new Error("Something went wrong");
    const newState = userReducer(
      { ...INITIAL_STATE, isLoading: true },
      {
        type: UserActionTypes.SIGN_OUT_FAILURE,
        payload: error,
      }
    );
    expect(newState).toEqual({
      ...INITIAL_STATE,
      isLoading: false,
      error: error,
    });
  });
  it("should fail reset user password", () => {
    const error = new Error("Something went wrong");
    const newState = userReducer(
      { ...INITIAL_STATE, isLoading: true },
      {
        type: UserActionTypes.RESET_PASSWORD_FAILURE,
        payload: error,
      }
    );
    expect(newState).toEqual({
      ...INITIAL_STATE,
      isLoading: false,
      error: error,
    });
  });
  it("should fail update user info", () => {
    const error = new Error("Something went wrong");
    const newState = userReducer(
      { ...INITIAL_STATE, isLoading: true },
      {
        type: UserActionTypes.UPDATE_USER_INFO_FAILURE,
        payload: error,
      }
    );
    expect(newState).toEqual({
      ...INITIAL_STATE,
      isLoading: false,
      error: error,
    });
  });
  it("should fail upload user photo", () => {
    const error = new Error("Something went wrong");
    const newState = userReducer(
      { ...INITIAL_STATE, isLoading: true },
      {
        type: UserActionTypes.UPLOAD_USER_PHOTO_FAILURE,
        payload: error,
      }
    );
    expect(newState).toEqual({
      ...INITIAL_STATE,
      isLoading: false,
      error: error,
    });
  });
});
