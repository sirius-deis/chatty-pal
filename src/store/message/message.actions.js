import MessageActionTypes from './message.types';
import fetchData from '../../utils/fetchData';

export const fetchMessages = (chatId, messages) => ({
  type: MessageActionTypes.FETCH_MESSAGES,
  payload: { chatId, messages },
});

export const addMessage = (message) => {
  return {
    type: MessageActionTypes.ADD_MESSAGE,
    payload: message,
  };
};

export const deleteMessage = (messageId) => async (dispatch) => {
  dispatch({ type: MessageActionTypes.DELETE_MESSAGE_START, payload: messageId });
  await fetchData(`messages/${messageId}`, { method: 'DELETE' });
  dispatch({ type: MessageActionTypes.DELETE_MESSAGE_SUCCESS, payload: messageId });
  try {
  } catch (error) {
    dispatch({ type: MessageActionTypes.DELETE_MESSAGE_FAILURE, payload: { messageId, error } });
  }
};

export const deleteMessageFromSocket = (messageId) => {
  return { type: MessageActionTypes.DELETE_MESSAGE_FROM_SOCKET, payload: messageId };
};

export const editMessage = ({ messageId, message }) => {
  return { type: MessageActionTypes.EDIT_MESSAGE, payload: { messageId, message } };
};
