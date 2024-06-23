import { useState, useContext } from "react";
import PropTypes from "prop-types";
import { HiOutlinePaperClip, HiOutlineMicrophone } from "react-icons/hi";
import { BsEmojiSmile, BsSend } from "react-icons/bs";
import Input from "../input/input";
import EmojiPickerWrapper from "../emojiPickerWrapper/emojiPickerWrapper";
import { SocketContext } from "../../store/socketContext";
import { StyledChatInput, StyledLabel } from "./chatInput.styles";

const ChatInput = ({ chatId }) => {
  const [isEmojiPickerOpened, setIsEmojiPickerOpened] = useState(false);
  const [mode, setMode] = useState("text");
  const [message, setMessage] = useState("");
  const { socket } = useContext(SocketContext);

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (message.trim().length < 1) {
      return;
    }

    socket.emit("send_message", {
      message,
      isNew: false,
      chatId,
    });

    setMessage("");
  };

  const onEmojiClickHandler = (emoji) => {
    setMessage((prevState) => prevState + emoji);
  };

  const onInputChangeHandler = (text) => {
    setMessage(text);
    if (text.length < 1) {
      if (mode !== "audio") {
        setMode("audio");
      }
    } else {
      if (mode !== "text") {
        setMode("text");
      }
    }
  };

  return (
    <StyledChatInput onSubmit={onFormSubmit}>
      <StyledLabel>
        <HiOutlinePaperClip />
        <input type="file" />
      </StyledLabel>
      <Input
        type="text"
        placeholder="Write a message"
        borderRounded={false}
        shadow={false}
        onChangeHandler={onInputChangeHandler}
        value={message}
      />
      <StyledLabel>
        <BsEmojiSmile
          onClick={() => setIsEmojiPickerOpened((prevState) => !prevState)}
        />
        {isEmojiPickerOpened && (
          <EmojiPickerWrapper onEmojiClickHandler={onEmojiClickHandler} />
        )}
      </StyledLabel>
      <StyledLabel>
        {mode === "text" ? <BsSend /> : <HiOutlineMicrophone />}
      </StyledLabel>
    </StyledChatInput>
  );
};

ChatInput.propTypes = {
  chatId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default ChatInput;
