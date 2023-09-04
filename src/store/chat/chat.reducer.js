import ChatActionTypes from './chat.types';

const INITIAL_STATE = {
  chats: [],
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
    case ChatActionTypes.DELETE_CHAT_START:
      const chatToDeleteIndex = state.chats.findIndex((chat) => chat.id === action.payload);
      return {
        ...state,
        chats: [
          ...state.chats.slice(0, chatToDeleteIndex),
          { ...state.chats[chatToDeleteIndex], isOperating: true },
          ...state.chats.slice(chatToDeleteIndex),
        ],
      };
    case ChatActionTypes.DELETE_CHAT_FAILURE:
      const chatIndex = state.chats.findIndex((chat) => chat.id === action.payload);
      return {
        ...state,
        chats: [
          ...state.chats.slice(0, chatIndex),
          { ...state.chats[chatIndex], isOperating: false, error: action.payload },
          ...state.chats.slice(chatIndex),
        ],
      };
    case ChatActionTypes.FETCH_CHATS:
      return { ...state, chats: action.payload.chats };
    case ChatActionTypes.DELETE_CHAT_SUCCESS:
      const chatsWithoutDeleted = state.chats.filter((chat) => chat.id === action.payload);
      return { ...state, chats: chatsWithoutDeleted };
    case ChatActionTypes.ONLINE:
      const [foundChatIndex_Online, foundChat_Online] = findChatAndIndexById(
        action.payload,
        state.chats,
      );
      console.log('TEST', foundChat_Online);
      if (!foundChat_Online) {
        return state;
      }
      return {
        ...state,
        chats: [
          ...state.chats.slice(0, foundChatIndex_Online),
          { ...foundChat_Online, online: true },
          ...state.chats.slice(foundChatIndex_Online),
        ],
      };
    case ChatActionTypes.OFFLINE:
      const [foundChatIndex_Offline, foundChat_Offline] = findChatAndIndexById(
        action.payload,
        state.chats,
      );
      if (!foundChat_Offline) {
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
    case ChatActionTypes.ADD_CHAT_SUCCESS:
      return { ...state, chats: [...state.chats, action.payload] };
    case ChatActionTypes.ADD_CHAT_FAILURE:
      //TODO:
      return { ...state };
    default:
      return state;
  }
};

export default chatReducer;
