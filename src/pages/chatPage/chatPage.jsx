import styled from 'styled-components';

import Sidebar from '../../components/sidebar/sidebar';

const StyledChatPage = styled.div`
  width: 100%;
  height: 100vh;
`;

const ChatPage = () => {
  return (
    <StyledChatPage>
      <Sidebar />
    </StyledChatPage>
  );
};

export default ChatPage;
