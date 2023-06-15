import styled from 'styled-components';

import Sidebar from '../../components/sidebar/sidebar';
import Chat from '../../components/chat/chat';

const StyledChatPage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const ChatPage = () => {
  return (
    <StyledChatPage>
      <Sidebar />
      <Chat />
    </StyledChatPage>
  );
};

export default ChatPage;
