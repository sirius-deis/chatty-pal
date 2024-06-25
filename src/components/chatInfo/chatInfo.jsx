import styled from "styled-components";

const StyledChatInfo = styled.div`
  width: 100%;
  background-color: var(--bg-color-transparent-darker);
`;

const ChatInfo = ({ name, photo }) => {
  return <StyledChatInfo>{name}</StyledChatInfo>;
};

export default ChatInfo;
