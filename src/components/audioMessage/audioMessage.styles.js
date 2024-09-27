import styled from "styled-components";

export const StyledAudioMessage = styled.div`
  max-width: 55%;
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 0.1rem;
`

export const StyledAudio = styled.audio`
  position: absolute;
  top: 0;
  left: 0;
  visibility: hidden;
`