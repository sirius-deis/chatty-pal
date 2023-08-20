import MessageActionTypes from './message.types';

const INITIAL_STATE = {
  messages: [],
  chosenChatId: '',
};

const messageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MessageActionTypes.FETCH_MESSAGES:
      return {
        ...state,
        chosenChatId: action.payload.chatId,
        messages: action.payload.messages,
      };
    case MessageActionTypes.ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    case MessageActionTypes.DELETE_MESSAGE_START:
      const messageToDeleteIndex = state.messages.findIndex(
        (message) => message.id === action.payload,
      );
      return {
        ...state,
        messages: [
          ...state.messages.slice(0, messageToDeleteIndex),
          { ...state.messages[messageToDeleteIndex], isOperating: true },
          ...state.messages.slice(messageToDeleteIndex),
        ],
      };
    case MessageActionTypes.DELETE_MESSAGE_FAILURE:
      const failureIndex = state.messages.findIndex(
        (message) => message.id === action.payload.messageId,
      );
      return {
        ...state,
        messages: [
          ...state.messages.slice(0, failureIndex),
          { ...state.messages[failureIndex], isOperating: false, error: action.payload.error },
          ...state.messages.slice(failureIndex),
        ],
      };
    case MessageActionTypes.DELETE_MESSAGE_SUCCESS:
    case MessageActionTypes.DELETE_MESSAGE_FROM_SOCKET:
      const deletedMessageIndex = state.messages.findIndex(
        (message) => message.id === action.payload,
      );
      return {
        ...state,
        messages: [
          ...state.messages.slice(0, deletedMessageIndex),
          ...state.messages.slice(deletedMessageIndex),
        ],
      };
    case MessageActionTypes.EDIT_MESSAGE:
      const foundMessageIndex = state.messages.findIndex(
        (message) => message.id === action.payload.messageId,
      );

      return {
        ...state,
        messages: [
          ...state.messages.slice(0, foundMessageIndex),
          {
            ...state.messages[foundMessageIndex],
            message: action.payload.message,
            isOperating: undefined,
            error: undefined,
          },
          ...state.messages.slice(foundMessageIndex),
        ],
      };
    default:
      return state;
  }
};

export default messageReducer;
