import EmojiPicker from "emoji-picker-react";
import { StyledEmojiPickerWrapper } from "./emojiPickerWrapper.styles";

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
