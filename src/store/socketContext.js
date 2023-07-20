import { useState, createContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { io } from 'socket.io-client';

const URL = 'http://localhost:3000';

const SocketContext = createContext({ socket: null });

const SocketProvider = ({ children }) => {
  const [sock, setSock] = useState(null);
  const user = useSelector((state) => state?.user);

  const token = user && user.token;

  const onOnline = () => {};

  const onOffline = () => {};

  const onSendMessage = () => {};

  const onEditMessage = () => {};

  const onUnsendMessage = () => {};

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
