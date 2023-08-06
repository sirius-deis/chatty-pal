import { useState, createContext, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { io } from 'socket.io-client';
import { online, offline } from './chat/chat.actions';
import { addMessage, editMessage, deleteMessageFromSocket } from './message/message.actions';
import { addChat } from './chat/chat.actions';

const URL = 'http://localhost:3000';

const SocketContext = createContext({ socket: null });

const SocketProvider = ({ children }) => {
  const [sock, setSock] = useState(null);
  const user = useSelector((state) => state?.user);
  const chats = useSelector((state) => state?.chat.chats);
  const message = useSelector((state) => state?.message);
  const dispatch = useDispatch();

  const token = user && user.token;

  const onOnline = (id) => dispatch(online(id));

  const onOffline = (id) => dispatch(offline(id));

  const onSendMessage = ({ chatId, receivedMessage }) => {
    const chat = chats.find((chat) => chat.id === chatId);
    if (!chat) {
      dispatch(addChat(chatId));
    }
    if (message.chosenChatId === chatId) {
      dispatch(addMessage(receivedMessage));
    }
  };

  const onEditMessage = ({ chatId, messageId, message }) => {
    if (message.chosenChatId === chatId) {
      dispatch(editMessage(messageId, message));
    }
  };

  const onUnsendMessage = (chatId, messageId) => {
    if (message.chosenChatId === chatId) {
      dispatch(deleteMessageFromSocket(messageId));
    }
  };

  const onRateMessage = () => {};

  const onErrorSendMessage = () => {};

  const onErrorEditMessage = () => {};

  const onErrorUnsendMessage = () => {};

  const onErrorRateMessage = () => {};

  useEffect(() => {
    if (!token) {
      return;
    }
    const socket = io(URL, {
      extraHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });

    socket.on('online', onOnline);
    socket.on('offline', onOffline);
    socket.on('send_message', onSendMessage);
    socket.on('edit_message', onEditMessage);
    socket.on('unsend_message', onUnsendMessage);
    socket.on('rate_message', onRateMessage);

    socket.on('error_send_message', onErrorSendMessage);
    socket.on('error_edit_message', onErrorEditMessage);
    socket.on('error_unsend_message', onErrorUnsendMessage);
    socket.on('error_rate_message', onErrorRateMessage);

    setSock(socket);
    return () => {
      socket.off('send_message', onSendMessage);
      socket.off('online', onOnline);
      socket.off('offline', onOnline);
      socket.off('edit_message', onEditMessage);
      socket.off('unsend_message', onUnsendMessage);
      socket.off('rate_message', onRateMessage);

      socket.off('error_send_message', onErrorSendMessage);
      socket.off('error_edit_message', onErrorEditMessage);
      socket.off('error_unsend_message', onErrorUnsendMessage);
      socket.off('error_rate_message', onErrorRateMessage);

      socket.disconnect();
    };
  }, [token]);

  const value = {
    socket: sock,
  };

  return <SocketContext.Provider value={value}>{children}</SocketContext.Provider>;
};

export { SocketContext, SocketProvider };
