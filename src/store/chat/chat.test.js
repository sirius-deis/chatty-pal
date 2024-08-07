import chatReducer from "./chat.reducer";
import ChatActionTypes from "./chat.types";

const INITIAL_STATE = {
  chats: [
    {
      id: "1",
      name: "John Doe",
      isOnline: false,
      isOperating: false,
      error: null,
      messages: [
        {
          id: "1",
          content: "Hello!",
          senderId: 1,
          createdAt: "2022-01-01T12:00:00",
        },
        {
          id: "2",
          content: "Hi!",
          senderId: 2,
          createdAt: "2022-01-01T12:05:00",
        },
      ],
    },
    {
      id: "2",
      name: "John Doe",
      isOnline: false,
      isOperating: false,
      error: null,
      messages: [
        {
          id: "1",
          content: "Hello!",
          senderId: 1,
          createdAt: "2022-01-01T12:00:00",
        },
        {
          id: "2",
          content: "Hi!",
          senderId: 2,
          createdAt: "2022-01-01T12:05:00",
        },
      ],
    },
  ],
};

describe("chatReducer", () => {
  it("should handle FETCH_CHATS_START", () => {
    const action = {
      type: ChatActionTypes.FETCH_CHATS_START,
    };
    const result = chatReducer(
      { ...INITIAL_STATE, error: "Some error", isLoading: false },
      action
    );
    expect(result.isLoading).toEqual(true);
    expect(result.error).toEqual(null);
  });
  it("should handle FETCH_CHATS_SUCCESS", () => {
    const action = {
      type: ChatActionTypes.FETCH_CHATS_SUCCESS,
      payload: { chats: [{ id: "2", name: "Jane Doe" }] },
    };
    const result = chatReducer(INITIAL_STATE, action);
    expect(result.chats).toEqual([{ id: "2", name: "Jane Doe" }]);
  });
  it("should handle FETCH_CHATS_FAILURE", () => {
    const error = new Error("Error fetching chats");
    const action = {
      type: ChatActionTypes.FETCH_CHATS_FAILURE,
      payload: error,
    };
    const result = chatReducer({ ...INITIAL_STATE, isLoading: true }, action);
    expect(result.isLoading).toEqual(false);
    expect(result.error).toEqual(error);
  });

  it("should handle ADD_CHAT_SUCCESS", () => {
    const action = {
      type: ChatActionTypes.ADD_CHAT_SUCCESS,
      payload: { id: "3", name: "Alice Doe" },
    };
    const result = chatReducer(INITIAL_STATE, action);
    expect(result.chats).toEqual([
      ...INITIAL_STATE.chats,
      {
        id: "3",
        name: "Alice Doe",
      },
    ]);
  });
  it("should handle ADD_CHAT_FAILURE", () => {
    const error = new Error("Error adding chat");
    const action = {
      type: ChatActionTypes.ADD_CHAT_FAILURE,
      payload: error,
    };
    const result = chatReducer(INITIAL_STATE, action);
    expect(result.error).toBe(error);
  });
  it("should handle DELETE_CHAT_START", () => {
    const action = {
      type: ChatActionTypes.DELETE_CHAT_START,
      payload: "2",
    };
    const result = chatReducer(INITIAL_STATE, action);
    expect(result.chats[1].isOperating).toBe(true);
  });
  it("should handle DELETE_CHAT_FAILURE", () => {
    const error = new Error("Error deleting chat");
    const action = {
      type: ChatActionTypes.DELETE_CHAT_FAILURE,
      payload: { id: 2, error },
    };
    const result = chatReducer(INITIAL_STATE, action);
    expect(result.chats[1].isOperating).toBe(false);
    expect(result.chats[1].error).toBe(error);
  });
  it("should handle DELETE_CHAT_SUCCESS", () => {
    const action = {
      type: ChatActionTypes.DELETE_CHAT_SUCCESS,
      payload: 2,
    };
    const result = chatReducer(INITIAL_STATE, action);
    expect(result.chats.length).toBe(1);
  });
  it("should handle ONLINE", () => {
    const action = {
      type: ChatActionTypes.ONLINE,
      payload: "1",
    };
    const result = chatReducer(INITIAL_STATE, action);
    expect(result.chats[0].isOnline).toBe(true);
  });
  it("should handle OFFLINE", () => {
    const action = {
      type: ChatActionTypes.OFFLINE,
      payload: "1",
    };
    const result = chatReducer(
      {
        chats: [
          ...INITIAL_STATE.chats.filter((_, i) => i !== 0),
          { ...INITIAL_STATE.chats[0], isOnline: true },
        ],
      },
      action
    );
    expect(result.chats[0].isOnline).toBe(false);
  });
  it("should handle ADD_MESSAGE", () => {
    const action = {
      type: ChatActionTypes.ADD_MESSAGE,
      payload: {
        chatId: "1",
        message: {
          id: "3",
          content: "Hello again!",
          senderId: 1,
          createdAt: "2022-01-01T15:05:00",
        },
      },
    };
    const result = chatReducer(INITIAL_STATE, action);
    expect(result.chats[0].messages).toEqual([
      ...INITIAL_STATE.chats[0].messages,
      {
        id: "3",
        content: "Hello again!",
        senderId: 1,
        createdAt: "2022-01-01T15:05:00",
      },
    ]);
  });
  it("should handle DELETE_MESSAGE_START", () => {
    const action = {
      type: ChatActionTypes.DELETE_MESSAGE_START,
      payload: { chatId: "1", messageId: "2" },
    };
    const result = chatReducer(INITIAL_STATE, action);
    expect(result.chats[0].messages[1].isOperating).toBe(true);
  });
  it("should handle DELETE_MESSAGE_FAILURE", () => {
    const error = new Error("Error deleting message");
    const action = {
      type: ChatActionTypes.DELETE_MESSAGE_FAILURE,
      payload: { chatId: "1", messageId: "2", error },
    };
    const result = chatReducer(INITIAL_STATE, action);
    expect(result.chats[0].messages[1].isOperating).toBe(false);
    expect(result.chats[0].messages[1].error).toBe(error);
  });
  it("should handle FETCH_SINGLE_CHAT_START", () => {
    const action = {
      type: ChatActionTypes.FETCH_SINGLE_CHAT_START,
    };
    const result = chatReducer(INITIAL_STATE, action);
    expect(result.isSingleLoading).toBe(true);
  });
  it("should handle FETCH_SINGLE_CHAT_SUCCESS", () => {
    const action = {
      type: ChatActionTypes.FETCH_SINGLE_CHAT_SUCCESS,
      payload: { id: "3", name: "Some name" },
    };
    const result = chatReducer(INITIAL_STATE, action);
    expect(result.chats).toEqual([
      ...INITIAL_STATE.chats,
      { id: "3", name: "Some name" },
    ]);
    expect(result.isSingleLoading).toBe(false);
    expect(result.error).toBe(null);
  });
  it("should handle FETCH_SINGLE_CHAT_FAILURE", () => {
    const error = new Error("Error fetching single chat");
    const action = {
      type: ChatActionTypes.FETCH_SINGLE_CHAT_FAILURE,
      payload: error,
    };
    const result = chatReducer(INITIAL_STATE, action);
    expect(result.error).toBe(error);
    expect(result.isSingleLoading).toBe(false);
  });
  it("should handle EDIT_MESSAGE_START", () => {
    const action = {
      type: ChatActionTypes.EDIT_MESSAGE_START,
      payload: { chatId: "1", messageId: "2" },
    };
    const result = chatReducer(INITIAL_STATE, action);
    expect(result.chats[0].messages[1].isOperating).toBe(true);
  });
  it("should handle EDIT_MESSAGE_FAILURE", () => {
    const error = new Error("Error editing message");
    const action = {
      type: ChatActionTypes.EDIT_MESSAGE_FAILURE,
      payload: { chatId: "1", messageId: "2", error },
    };
    const result = chatReducer(INITIAL_STATE, action);
    expect(result.chats[0].messages[1].isOperating).toBe(false);
    expect(result.chats[0].messages[1].error).toEqual(error);
  });
  it("should handle EDIT_MESSAGE_SUCCESS", () => {
    const message = {
      id: "1",
      content: "Hello!",
      senderId: 1,
      createdAt: "2022-01-01T12:00:00",
      editedAt: "2022-03-01T12:00:00",
    };
    const action = {
      type: ChatActionTypes.EDIT_MESSAGE_SUCCESS,
      payload: {
        chatId: "1",
        messageId: "2",
        message,
      },
    };
    const result = chatReducer(INITIAL_STATE, action);
    expect(result.chats[0].messages[1]).toEqual({
      ...message,
      error: null,
      isOperating: false,
    });
  });
  it("should handle MARK_MESSAGE_AS_READ", () => {
    const action = {
      type: ChatActionTypes.MARK_MESSAGE_AS_READ,
      payload: { chatId: "1", messageId: "2" },
    };
    const result = chatReducer(INITIAL_STATE, action);
    expect(result.chats[0].messages[1].isRead).toBe(true);
  });
});
