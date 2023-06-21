import { useState } from 'react';
import styled from 'styled-components';

import Sidebar from '../../components/sidebar/sidebar';
import Chat from '../../components/chat/chat';
import Menu from '../../components/menu/menu';
import AnimateWrapper from '../../components/animateWrapper/animateWrapper';
import Backdrop from '../../components/backdrop/backdrop';

const StyledChatPage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
`;

const ChatPage = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const toggleClickHandler = () => {
    setIsMenuOpened((prevState) => !prevState);
  };
  return (
    <StyledChatPage>
      {isMenuOpened && (
        <AnimateWrapper
          isMounted={isMenuOpened}
          mountedStyle={{ animation: 'fadeOut 0.2s linear' }}
          unmountedStyle={{ animation: 'fadeIn 0.2s linear' }}
          delay={200}
        >
          <Backdrop onClickHandler={toggleClickHandler} />
        </AnimateWrapper>
      )}
      <AnimateWrapper
        isMounted={isMenuOpened}
        mountedStyle={{ animation: 'fadeOut 0.2s linear, slideOut 0.2s linear 1 forwards' }}
        unmountedStyle={{ animation: 'fadeIn 0.2s linear, slideIn 0.2s linear 1 forwards' }}
        delay={200}
      >
        <Menu />
      </AnimateWrapper>
      <Sidebar toggleClickHandler={toggleClickHandler} />
      <Chat />
    </StyledChatPage>
  );
};

export default ChatPage;
