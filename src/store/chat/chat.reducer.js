import ChatActionTypes from './chat.types';

const INITIAL_STATE = {
  chats: [],
  isLoading: false,
  error: null,
};

const findChatAndIndexById = (id, chats) => {
  const foundChatIndex = chats.find((chat) => chat.id === id);
  if (!foundChatIndex) {
    return null;
  }
  const foundChat = chats[foundChatIndex];

  return [foundChatIndex, foundChat];
};

const chatReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ChatActionTypes.FETCH_CHATS_START:
    case ChatActionTypes.DELETE_CHAT_START:
      return { ...state, isLoading: true, error: null };
    case ChatActionTypes.FETCH_CHATS_FAILURE:
    case ChatActionTypes.DELETE_CHAT_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case ChatActionTypes.FETCH_CHATS_SUCCESS:
      return { ...state, isLoading: false, error: null, chats: action.payload };
    case ChatActionTypes.DELETE_CHAT_SUCCESS:
      const chatsWithoutDeleted = state.chats.filter((chat) => chat.id === action.payload);
      return { ...state, isLoading: false, error: null, chats: chatsWithoutDeleted };
    case ChatActionTypes.ONLINE:
      const [foundChatIndex_Online, foundChat_Online] = findChatAndIndexById(
        action.payload,
        state.chats,
      );
      if (!foundChatIndex_Online) {
        return state;
      }
      return {
        ...state,
        chats: [
          ...state.chats.slice(0, foundChatIndex_Online),
          { ...foundChat_Online, online: true },
        ],
        ...state.chats.slice(foundChatIndex_Online),
      };
    case ChatActionTypes.OFFLINE:
      const [foundChatIndex_Offline, foundChat_Offline] = findChatAndIndexById(
        action.payload,
        state.chats,
      );
      if (!foundChatIndex_Offline) {
        return state;
      }
      return {
        ...state,
        chats: [
          ...state.chats.slice(0, foundChatIndex_Offline),
          { ...foundChat_Offline, online: false },
        ],
        ...state.chats.slice(foundChatIndex_Offline),
      };
    default:
      return state;
  }
};

export default chatReducer;
