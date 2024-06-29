import styled from "styled-components";

const StyledFilePicker = styled.label`
  position: relative;
  cursor: pointer;
  border: 1px solid var(--text);
  border-radius: 5px;
`;

const StyledInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  visibility: hidden;
`;

const StyledIconWrapper = styled.div`
  max-width: ${(props) => `${props.size}rem`};
`;

export { StyledFilePicker, StyledInput, StyledIconWrapper };
