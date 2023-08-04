import MessageActionTypes from './message.types';
import fetchData from '../../utils/fetchData';

export const fetchMessages = (chatId) => async (dispatch) => {
  dispatch({ type: MessageActionTypes.FETCH_MESSAGES_START });
  const data = await fetchData(`chats/${chatId}/messages`);
  dispatch({
    type: MessageActionTypes.FETCH_MESSAGES_SUCCESS,
    payload: { chatId, messages: data },
  });
  try {
  } catch (error) {
    dispatch({ type: MessageActionTypes.FETCH_MESSAGES_FAILURE, payload: error });
  }
};
