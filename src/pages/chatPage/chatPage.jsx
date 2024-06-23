import { useState, useEffect, useContext } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { StyledChatPage, Greeting } from "./chatPage.styles";

import Sidebar from "../../components/sidebar/sidebar";
import Chat from "../../components/chat/chat";
import Menu from "../../components/menu/menu";
import AnimateWrapper from "../../components/animateWrapper/animateWrapper";
import Backdrop from "../../components/backdrop/backdrop";
import { SocketContext } from "../../store/socketContext";

const ChatPage = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [chatId, setChatId] = useState(null);
  const { chatIdParam } = useParams();
  const { socket } = useContext(SocketContext);

  useEffect(() => {
    if (socket && !socket.connected) {
      socket.connect();
    }
  }, [socket]);

  useEffect(() => {
    if (chatIdParam) {
      setChatId(chatIdParam);
    }
  }, [chatIdParam]);
  const toggleClickHandler = () => {
    setIsMenuOpened((prevState) => !prevState);
  };

  return (
    <StyledChatPage>
      {isMenuOpened && (
        <AnimateWrapper
          isMounted={isMenuOpened}
          mountedStyle={{ animation: "fadeOut 0.2s linear 1" }}
          unmountedStyle={{ animation: "fadeIn 0.2s linear 1" }}
          delay={200}
        >
          <Backdrop onClickHandler={toggleClickHandler} />
        </AnimateWrapper>
      )}
      <AnimateWrapper
        isMounted={isMenuOpened}
        mountedStyle={{ animation: "slideOut 0.2s linear 1 forwards" }}
        unmountedStyle={{ animation: "slideIn 0.2s linear 1 forwards" }}
        delay={200}
      >
        <Menu />
      </AnimateWrapper>
      <Sidebar toggleMenuClickHandler={toggleClickHandler} />
      {chatId ? (
        <Chat chatId={chatId} />
      ) : (
        <Greeting>
          <div>Select a chat to start messaging</div>
        </Greeting>
      )}
    </StyledChatPage>
  );
};

export default ChatPage;
