import styled from 'styled-components';

const StyledSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 5rem;
  height: 2.5rem;
`;

const StyledCheckbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const StyledSlider = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: var(--main-color-lighter);
  transition: 0.3s;
  border-radius: 20px;
  cursor: pointer;
  &:before {
    content: '';
    position: absolute;
    height: 2rem;
    width: 2rem;
    top: 0.25rem;
    left: 0.25rem;
    background-color: var(--online-color);
  }
`;

const Toggle = () => {
  return (
    <StyledSwitch>
      <StyledCheckbox />
      <StyledSlider></StyledSlider>
    </StyledSwitch>
  );
};

export default Toggle;
