import ChatActionTypes from './chat.types';
import fetchData from '../../utils/fetchData';

export const fetchChats = (chats) => ({
  type: ChatActionTypes.FETCH_CHATS,
  payload: chats,
});

export const addChat = (chatId) => async (dispatch) => {
  try {
    const data = await fetchData(`chats/${chatId}`, { method: 'GET' });
    dispatch({ type: ChatActionTypes.ADD_CHAT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ChatActionTypes.ADD_CHAT_FAILURE, payload: error });
  }
};

export const deleteChat = (idOfChatToDelete) => async (dispatch) => {
  dispatch({ type: ChatActionTypes.DELETE_CHAT_START, payload: idOfChatToDelete });
  try {
    await fetchData(`chats/${idOfChatToDelete}`, { method: 'DELETE' });
    dispatch({ type: ChatActionTypes.DELETE_CHAT_SUCCESS, payload: idOfChatToDelete });
  } catch (error) {
    dispatch({ type: ChatActionTypes.DELETE_CHAT_FAILURE, payload: idOfChatToDelete });
  }
};

export const online = (id) => ({ type: ChatActionTypes.ONLINE, payload: id });

export const offline = (id) => ({ type: ChatActionTypes.OFFLINE, payload: id });
