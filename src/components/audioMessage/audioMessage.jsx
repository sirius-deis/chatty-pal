import { FaPlay } from "react-icons/fa6";
import { FaPause } from "react-icons/fa6";
import Button from "../button/button";

const AudioMessage = ({message}) => {
  const [listening, setIsListening] = useState(false)
  return <div>
    <audio src={message.src}></audio>
    <Button type="empty" onClick={() => setIsListening(!listening)}>
      {listening? <FaPause /> : <FaPlay />}
    </Button>
  </div>
}

export default AudioMessage;