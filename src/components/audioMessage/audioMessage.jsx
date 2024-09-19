import { FaPlay } from "react-icons/fa6";
import { FaPause } from "react-icons/fa6";
import { AudioVisualizer } from 'react-audio-visualize';
import Button from "../button/button";
import {StyledAudioMessage, StyledAudio} from './audioMessage.styles'
import { useState } from "react";
import MessageInfo from "../messageInfo/messageInfo";

const AudioMessage = ({message, isOwn}) => {
  const [listening, setIsListening] = useState(false)
  const visualizerRef = useRef(null)
  return <StyledAudioMessage>
    <StyledAudio src={message.src}></StyledAudio>
    <Button type="empty" onClick={() => setIsListening(!listening)}>
      {listening? <FaPause /> : <FaPlay />}
    </Button>
    {message.src && <AudioVisualizer
          ref={visualizerRef}
          blob={blob}
          width={500}
          height={75}
          barWidth={1}
          gap={0}
          barColor={'#f76565'}
        />}
        <MessageInfo createdAt={message.createdAt} isRead={message.isRead} isOwn={isOwn}/>
  </StyledAudioMessage>
}

export default AudioMessage;