import ChatActionTypes from './chat.types';
import fetchData from '../../utils/fetchData';

export const fetchChats = () => async (dispatch) => {
  dispatch({ type: ChatActionTypes.FETCH_CHATS_START });
  try {
    const data = await fetchData('chats', { method: 'GET' });

    dispatch({ type: ChatActionTypes.FETCH_CHATS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ChatActionTypes.FETCH_CHATS_FAILURE });
  }
};

export const deleteChat = (idOfChatToDelete) => async (dispatch) => {
  dispatch({ type: ChatActionTypes.DELETE_CHAT_START });
  try {
    await fetchData(`chats/${idOfChatToDelete}`, { method: 'DELETE' });
    dispatch({ type: ChatActionTypes.DELETE_CHAT_SUCCESS, payload: idOfChatToDelete });
  } catch (error) {
    dispatch({ type: ChatActionTypes.DELETE_CHAT_FAILURE });
  }
};

export const online = (id) => {
  return { type: ChatActionTypes.ONLINE, payload: id };
};

export const offline = (id) => {
  return { type: ChatActionTypes.OFFLINE, payload: id };
};
