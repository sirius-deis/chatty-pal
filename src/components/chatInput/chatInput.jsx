import styled from 'styled-components';
import { HiOutlinePaperClip } from 'react-icons/hi';
import Input from '../input/input';
import EmojiPicker from 'emoji-picker-react';

const StyledChatInput = styled.div`
  width: 100%;
  display: flex;
  background-color: var(--bg-color-lighter);
`;

const StyledAttachment = styled.label`
  padding: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  svg {
    font-size: 2.5rem;
    color: var(--text-color);
  }
  input {
    display: none;
  }
`;

const ChatInput = () => {
  return (
    <StyledChatInput>
      <StyledAttachment>
        <HiOutlinePaperClip />
        <input type='file' />
      </StyledAttachment>
      <Input type='text' placeholder='Write a message' borderRounded={false} shadow={false} />
    </StyledChatInput>
  );
};

export default ChatInput;
