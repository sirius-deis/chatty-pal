import PropTypes from "prop-types";
import { FaPlay } from "react-icons/fa6";
import { FaPause } from "react-icons/fa6";
import { AudioVisualizer } from 'react-audio-visualize';
import Button from "../button/button";
import { StyledAudioMessage, StyledAudio } from './audioMessage.styles'
import { useEffect, useRef, useState } from "react";

const AudioMessage = ({ message }) => {
  const [listening, setIsListening] = useState(false)
  const visualizerRef = useRef(null)

  let blob;

  useEffect(() => {
    const getAudioBlob = async () => {
      let response = await fetch(message.src);

      const arrayBuffer = await response.arrayBuffer()

      blob = new Blob([arrayBuffer], { type: response.headers.get("content-type") })
    }

    getAudioBlob();
  })
  return <StyledAudioMessage>
    <StyledAudio src={message.src}></StyledAudio>
    <Button type="empty" onClick={() => setIsListening(!listening)}>
      {listening ? <FaPause /> : <FaPlay />}
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
  </StyledAudioMessage>
}

AudioMessage.propTypes = {
  message: PropTypes.object.isRequired,
  isOwn: PropTypes.bool,
}

export default AudioMessage;
