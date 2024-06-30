import styled from "styled-components";

const StyledFilePicker = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  font-size: 2.5rem;
  padding: ${(props) => `${props.padding | 1.2}rem`};
`;

const StyledInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  visibility: hidden;
`;

const StyledIconWrapper = styled.div`
  img {
    max-width: 100%;
  }
`;

export { StyledFilePicker, StyledInput, StyledIconWrapper };
