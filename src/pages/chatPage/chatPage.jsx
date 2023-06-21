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
          mountedStyle={{ animation: 'appear 0.2s linear' }}
          unmountedStyle={{ animation: 'disappear 0.2s linear' }}
        >
          <Backdrop onClickHandler={toggleClickHandler} />
        </AnimateWrapper>
      )}
      <AnimateWrapper
        isMounted={isMenuOpened}
        mountedStyle={{ animation: 'appear 0.2s linear' }}
        unmountedStyle={{ animation: 'disappear 0.2s linear' }}
      >
        <Menu />
      </AnimateWrapper>
      <Sidebar toggleClickHandler={toggleClickHandler} />
      <Chat />
    </StyledChatPage>
  );
};

export default ChatPage;
