import { useState, useContext } from "react";
import PropTypes from "prop-types";
import { HiOutlinePaperClip, HiOutlineMicrophone, HiMicrophone } from "react-icons/hi2";
import { BsEmojiSmile, BsSend } from "react-icons/bs";
import Input from "../input/input";
import EmojiPickerWrapper from "../emojiPickerWrapper/emojiPickerWrapper";
import { SocketContext } from "../../store/socketContext";
import { StyledChatInput, StyledLabel } from "./chatInput.styles";
import Button from "../button/button";
import FilePicker from "../filePicker/filePicker";
import audioRecorder from "../../utils/audioRecorder";
import fetchData from "../../utils/fetchData";

const ChatInput = ({ chatId }) => {
  const [isEmojiPickerOpened, setIsEmojiPickerOpened] = useState(false);
  const [mode, setMode] = useState("audio");
  const [message, setMessage] = useState("");
  const [isRecording, setIsRecording] = useState(false);
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

  const touchStart = (e) => {
    e.preventDefault();
    if (mode !== 'audio') {
      return;
    }
    setIsRecording(true);
    audioRecorder.start();
  }

  const touchEnd = (e) => {
    e.preventDefault()
    audioRecorder.stop();
    const blobs = audioRecorder.audioBlobs();
    const formData = new FormData();
    formData.append('audio_data', blobs);
    fetchData('messages', { body: formData })
  }

  return (
    <StyledChatInput onSubmit={onFormSubmit}>
      <FilePicker>
        <HiOutlinePaperClip />
      </FilePicker>
      <Input
        type="text"
        placeholder="Write a message"
        borderRounded={false}
        shadow={false}
        onChange={onInputChangeHandler}
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
      <Button
        type="empty"
        backgroundColor="transparent"
        style={{ padding: "1.2rem" }}
        touchstart={() => touchStart()}
        touchend={() => touchEnd()}
      >
        {mode === "text" && <BsSend />}
        {mode === "audio" && (isRecording ? <HiOutlineMicrophone /> : <HiMicrophone />)}
      </Button>
    </StyledChatInput>
  );
};

ChatInput.propTypes = {
  chatId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default ChatInput;
