import styled from 'styled-components';
import EmojiPicker from 'emoji-picker-react';

const StyledEmojiPickerWrapper = styled.div`
  position: absolute;
  bottom: 5.5rem;
  right: 0.5rem;
`;

const EmojiPickerWrapper = ({ onEmojiClickHandler }) => {
  const onEmojiClick = (emojiData) => {
    onEmojiClickHandler(emojiData.emoji);
  };

  return (
    <StyledEmojiPickerWrapper>
      <EmojiPicker onEmojiClick={onEmojiClick} />
    </StyledEmojiPickerWrapper>
  );
};

export default EmojiPickerWrapper;
