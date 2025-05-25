import ChatActionTypes from "./chat.types";
import fetchData from "../../utils/fetchData";

export const fetchChats = () => async (dispatch) => {
  dispatch({ type: ChatActionTypes.FETCH_CHATS_START });
  try {
    const data = await fetchData("chats");
    dispatch({ type: ChatActionTypes.FETCH_CHATS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ChatActionTypes.FETCH_CHATS_FAILURE, payload: error });
  }
};

export const addChat = (chatId) => async (dispatch) => {
  try {
    const data = await fetchData(`chats/${chatId}`, { method: "GET" });
    dispatch({ type: ChatActionTypes.ADD_CHAT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ChatActionTypes.ADD_CHAT_FAILURE, payload: error });
  }
};

export const deleteChat = (idOfChatToDelete) => async (dispatch) => {
  dispatch({
    type: ChatActionTypes.DELETE_CHAT_START,
    payload: idOfChatToDelete,
  });
  try {
    await fetchData(`chats/${idOfChatToDelete}`, { method: "DELETE" });
    dispatch({
      type: ChatActionTypes.DELETE_CHAT_SUCCESS,
      payload: idOfChatToDelete,
    });
  } catch (error) {
    dispatch({
      type: ChatActionTypes.DELETE_CHAT_FAILURE,
      payload: { id: idOfChatToDelete, error },
    });
  }
};

export const online = (chatId) => ({
  type: ChatActionTypes.ONLINE,
  payload: chatId,
});

export const offline = (chatId) => ({
  type: ChatActionTypes.OFFLINE,
  payload: chatId,
});

export const addMessage = (chatId, message) => {
  return {
    type: ChatActionTypes.ADD_MESSAGE,
    payload: { message, chatId },
  };
};

export const deleteMessage = (chatId, messageId) => async (dispatch) => {
  dispatch({
    type: ChatActionTypes.DELETE_MESSAGE_START,
    payload: { messageId, chatId },
  });
  try {
    await fetchData(`chats/${chatId}/messages/${messageId}`, {
      method: "DELETE",
    });
    dispatch({
      type: ChatActionTypes.DELETE_MESSAGE_SUCCESS,
      payload: { messageId, chatId },
    });
  } catch (error) {
    dispatch({
      type: ChatActionTypes.DELETE_MESSAGE_FAILURE,
      payload: { error, messageId, chatId },
    });
  }
};

export const fetchSingleChat = (chatId) => async (dispatch) => {
  dispatch({ type: ChatActionTypes.FETCH_SINGLE_CHAT_START });
  try {
    const data = await fetchData(`chats/${chatId}`);
    dispatch({
      type: ChatActionTypes.FETCH_SINGLE_CHAT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ChatActionTypes.FETCH_SINGLE_CHAT_FAILURE,
      payload: error,
    });
  }
};

export const editMessage = (chatId, messageId, message) => async (dispatch) => {
  dispatch({
    type: ChatActionTypes.EDIT_MESSAGE_START,
    payload: { chatId, messageId },
  });
  try {
    const data = await fetchData(`chats/${chatId}/messages`, {
      method: "PUT",
      body: JSON.stringify(message),
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch({
      type: ChatActionTypes.EDIT_MESSAGE_SUCCESS,
      payload: { chatId, messageId, message: data },
    });
  } catch (error) {
    dispatch({
      type: ChatActionTypes.EDIT_MESSAGE_FAILURE,
      payload: { chatId, messageId, error },
    });
  }
};

export const markMessageAsRead = (chatId, messageId) => ({
  type: ChatActionTypes.MARK_MESSAGE_AS_READ,
  payload: { chatId, messageId },
});
