import ChatActionTypes from "./chat.types";

const INITIAL_STATE = {
  chats: [],
  error: null,
  isLoading: false,
};

const findChatIndexById = (id, chats) => {
  const foundChatIndex = chats.findIndex((chat) => chat.id === id);
  return foundChatIndex;
};

const findChatById = (id, chats) => {
  chats.find((chat) => {
    return chat.id === id;
  });
  return chats.find((chat) => chat.id === id);
};

const findMessageIndexById = (id, messages) => {
  return messages.findIndex((message) => message.id === id);
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
      const foundChatIndex_delete_chat_s = findChatIndexById(
        action.payload,
        state.chats
      );
      return {
        ...state,
        chats: [
          ...state.chats.slice(0, foundChatIndex_delete_chat_s),
          { ...state.chats[foundChatIndex_delete_chat_s], isOperating: true },
          ...state.chats.slice(foundChatIndex_delete_chat_s),
        ],
      };
    case ChatActionTypes.DELETE_CHAT_FAILURE:
      const foundChatIndex_delete_chat_f = findChatIndexById(
        action.payload,
        state.chats
      );
      return {
        ...state,
        chats: [
          ...state.chats.slice(0, foundChatIndex_delete_chat_f),
          {
            ...state.chats[foundChatIndex_delete_chat_f],
            isOperating: false,
            error: action.payload.error,
          },
          ...state.chats.slice(foundChatIndex_delete_chat_f),
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
      if (foundChatIndex_Online === -1) {
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
      if (foundChatIndex_Offline === -1) {
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
    case ChatActionTypes.ADD_MESSAGE:
      const foundChat = findChatById(action.payload.chatId, state.chats);
      const index = findChatIndexById(action.payload.chatId, state.chats);
      return {
        ...state,
        chats: [
          ...state.chats.slice(0, index),
          {
            ...foundChat,
            messages: [...(foundChat?.messages || []), action.payload.message],
          },
          ...state.chats.slice(index),
        ],
      };
    case ChatActionTypes.DELETE_MESSAGE_START:
      const foundChatForDeleting_s = findChatById(
        action.payload.chatId,
        state.chats
      );
      const index_ds = findChatIndexById(action.payload.chatId, state.chats);
      const messageToDeleteIndex_s = findMessageIndexById(
        action.payload.messageId,
        foundChatForDeleting_s.messages
      );

      return {
        ...state,
        chats: [
          ...state.chats.slice(0, index_ds),
          {
            ...foundChatForDeleting_s,
            messages: [
              ...foundChatForDeleting_s.messages.slice(
                0,
                messageToDeleteIndex_s
              ),
              {
                ...foundChatForDeleting_s.messages[messageToDeleteIndex_s],
                isOperating: true,
              },
              ...foundChatForDeleting_s.messages.slice(messageToDeleteIndex_s),
            ],
          },
          ...state.chats.slice(index_ds),
        ],
      };
    case ChatActionTypes.DELETE_MESSAGE_FAILURE:
      const foundChatForDeleting_f = findChatById(
        action.payload.chatId,
        state.chats
      );
      const index_df = findChatIndexById(action.payload.chatId, state.chats);
      const messageToDeleteIndex_f = findMessageIndexById(
        action.payload.messageId,
        foundChatForDeleting_f.messages
      );
      return {
        ...state,
        chats: [
          ...state.chats.slice(0, index_df),
          {
            ...foundChatForDeleting_f,
            messages: [
              ...foundChatForDeleting_f.messages.slice(
                0,
                messageToDeleteIndex_f
              ),
              {
                ...foundChatForDeleting_f.messages[messageToDeleteIndex_f],
                isOperating: false,
                error: action.payload.error,
              },
              ...foundChatForDeleting_f.messages.slice(messageToDeleteIndex_f),
            ],
          },
          ...state.chats.slice(index_df),
        ],
      };
    default:
      return state;
  }
};

export default chatReducer;
