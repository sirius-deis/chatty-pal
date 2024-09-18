import { FaPlay } from "react-icons/fa6";
import { FaPause } from "react-icons/fa6";
import Button from "../button/button";
import {StyledAudioMessage, StyledAudio} from './audioMessage.styles'

const AudioMessage = ({message}) => {
  const [listening, setIsListening] = useState(false)
  return <StyledAudioMessage>
    <StyledAudio src={message.src}></StyledAudio>
    <Button type="empty" onClick={() => setIsListening(!listening)}>
      {listening? <FaPause /> : <FaPlay />}
    </Button>
  </StyledAudioMessage>
}

export default AudioMessage;