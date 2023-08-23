import { useState, useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { HiOutlinePaperClip, HiOutlineMicrophone } from 'react-icons/hi';
import { BsEmojiSmile, BsSend } from 'react-icons/bs';
import Input from '../input/input';
import EmojiPickerWrapper from '../emojiPickerWrapper/emojiPickerWrapper';
import { SocketContext } from '../../store/socketContext';

const StyledChatInput = styled.form`
  width: 100%;
  display: flex;
  background-color: var(--bg-color-lighter);
`;

const StyledLabel = styled.label`
  position: relative;
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

const ChatInput = ({ chatId }) => {
  const [isEmojiPickerOpened, setIsEmojiPickerOpened] = useState(false);
  const [message, setMessage] = useState('');
  const { socket } = useContext(SocketContext);

  const onFormSubmit = (event) => {
    event.preventDefault();

    socket.emit('send_message', {
      message,
      isNew: false,
      chatId,
    });

    setMessage('');
  };

  const onEmojiClickHandler = (emoji) => {
    setMessage((prevState) => prevState + emoji);
  };

  return (
    <StyledChatInput onSubmit={onFormSubmit}>
      <StyledLabel>
        <HiOutlinePaperClip />
        <input type='file' />
      </StyledLabel>
      <Input
        type='text'
        placeholder='Write a message'
        borderRounded={false}
        shadow={false}
        onChangeHandler={(text) => setMessage(text)}
        value={message}
      />
      <StyledLabel>
        <BsEmojiSmile onClick={() => setIsEmojiPickerOpened((prevState) => !prevState)} />
        {isEmojiPickerOpened && <EmojiPickerWrapper onEmojiClickHandler={onEmojiClickHandler} />}
      </StyledLabel>
      <StyledLabel>{message ? <BsSend /> : <HiOutlineMicrophone />}</StyledLabel>
    </StyledChatInput>
  );
};

ChatInput.propTypes = {
  chatId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default ChatInput;
