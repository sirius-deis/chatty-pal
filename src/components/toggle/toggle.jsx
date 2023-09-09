import styled from 'styled-components';

const StyledSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 5rem;
  height: 2rem;
  margin-left: auto;
  & input:checked + span:before {
    transform: translateX(2.05rem);
  }
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
  background-color: var(--text-color);
  transition: 0.3s;
  border-radius: 20px;
  cursor: pointer;
  &:before {
    content: '';
    position: absolute;
    height: 3rem;
    width: 3rem;
    top: -0.5rem;
    left: 0;
    background-color: var(--bg-color);
    border-radius: 50%;
    transition: transform 0.2s ease;
  }
`;

const Toggle = ({ theme, changeTheme }) => {
  const onClickHandler = () => {
    changeTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <StyledSwitch>
      <StyledCheckbox type='checkbox' checked={theme === 'dark'} onClick={onClickHandler} />
      <StyledSlider></StyledSlider>
    </StyledSwitch>
  );
};

export default Toggle;
