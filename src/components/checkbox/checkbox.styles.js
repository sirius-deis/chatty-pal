import styled from 'styled-components';

export const StyledLabelWithCheckbox = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.7rem;
  font-size: 1.4rem;
  position: relative;
  cursor: pointer;
`;

export const StyledCheckbox = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  visibility: hidden;
  & + span {
    &::after {
      content: '';
      width: 1rem;
      height: 0.4rem;
      display: none;
      top: 0.3rem;
      left: 0.2rem;
      position: absolute;
      transform: rotate(-45deg);
      border-bottom: 3px solid var(--text-color-lighter);
      border-left: 3px solid var(--text-color-lighter);
    }
  }
  &:checked + span {
    border: 0;
    background-color: var(--main-color);
  }
  &:checked + span::after {
    display: block;
  }
`;

export const StyledCheckMark = styled.span`
  display: block;
  width: 1.7rem;
  height: 1.7rem;
  position: relative;
  border: 1px solid var(--text-color);
  border-radius: 5px;
  transition: background-color 0.1s ease-out, border 0.1s ease-out;
`;
