import chatReducer from "./chat.reducer";
import ChatActionTypes from "./chat.types";

const INITIAL_STATE = {
  chats: [
    {
      id: "1",
      name: "John Doe",
      isOnline: true,
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
  it("should handle FETCH_CHATS", () => {
    const action = {
      type: ChatActionTypes.FETCH_CHATS,
      payload: { chats: [{ id: "2", name: "Jane Doe" }] },
    };
    const result = chatReducer(INITIAL_STATE, action);
    expect(result.chats).toEqual([{ id: "2", name: "Jane Doe" }]);
  });
});
