import ChatActionTypes from "./chat.types";

const INITIAL_STATE = {
  chats: [],
  error: null,
  isLoading: false,
};

const findChatIndexById = (id, chats) => {
  const foundChatIndex = chats.findIndex((chat) => chat.id === id);
  if (foundChatIndex === -1) {
    return null;
  }

  return foundChatIndex;
};

const chatReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ChatActionTypes.FETCH_CHATS:
      return { ...state, chats: action.payload.chats };

    case ChatActionTypes.ADD_CHAT_SUCCESS:
      return { ...state, chats: [...state.chats, action.payload] };
    case ChatActionTypes.ADD_CHAT_FAILURE:
      return { ...state, error: action.payload };

    case ChatActionTypes.DELETE_CHAT_START:
      const chatToDeleteIndex = state.chats.findIndex(
        (chat) => chat.id === action.payload
      );
      return {
        ...state,
        chats: [
          ...state.chats.slice(0, chatToDeleteIndex),
          { ...state.chats[chatToDeleteIndex], isOperating: true },
          ...state.chats.slice(chatToDeleteIndex),
        ],
      };
    case ChatActionTypes.DELETE_CHAT_FAILURE:
      const chatIndex = state.chats.findIndex(
        (chat) => chat.id === action.payload.id
      );
      return {
        ...state,
        chats: [
          ...state.chats.slice(0, chatIndex),
          {
            ...state.chats[chatIndex],
            isOperating: false,
            error: action.payload.error,
          },
          ...state.chats.slice(chatIndex),
        ],
      };
    case ChatActionTypes.DELETE_CHAT_SUCCESS:
      const chatsWithoutDeleted = state.chats.filter(
        (chat) => chat.id !== action.payload.toString()
      );
      return { ...state, chats: chatsWithoutDeleted };

    case ChatActionTypes.ONLINE:
      const foundChatIndex_Online = findChatIndexById(
        action.payload,
        state.chats
      );
      if (foundChatIndex_Online === null) {
        return state;
      }
      return {
        ...state,
        chats: [
          ...state.chats.slice(0, foundChatIndex_Online),
          { ...state.chats[foundChatIndex_Online], isOnline: true },
          ...state.chats.slice(foundChatIndex_Online + 1),
        ],
      };
    case ChatActionTypes.OFFLINE:
      const foundChatIndex_Offline = findChatIndexById(
        action.payload,
        state.chats
      );
      if (foundChatIndex_Offline === null) {
        return state;
      }
      return {
        ...state,
        chats: [
          ...state.chats.slice(0, foundChatIndex_Offline),
          { ...state.chats[foundChatIndex_Offline], isOnline: false },
          ...state.chats.slice(foundChatIndex_Offline + 1),
        ],
      };
    default:
      return state;
  }
};

export default chatReducer;
