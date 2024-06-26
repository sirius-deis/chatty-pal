import styled from "styled-components";

const colors = {
  primary: "var(--primary)",
  warning: "var(--warning)",
  default: "var(--default)",
  success: "var(--success)",
  transparent: "transparent",
};

const size = {
  sm: "1",
  md: "1.5",
  lg: "2",
};

export const StyledButton = styled.button`
  background-color: ${(props) => colors[props.bgColor] || colors.default};
  color: ${(props) => colors[props.color] || `var(--text-darker)`};
  border: none;
  cursor: pointer;
  &:hover {
    filter: brightness(110%);
  }
  font-size: 1.8rem;
`;

export const StyledPlainButton = styled(StyledButton)`
  padding: ${(props) =>
    `${size[props.size] * 0.8}rem ${size[props.size] * 7}rem`};
  border-radius: 5px;
`;

export const StyledRoundedButton = styled(StyledButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(props) => `${size[props.size]}rem`};
  border-radius: 50%;
`;

export const StyledOutlinedButton = styled(StyledButton)`
  background-color: transparent;
  color: var("text-darker");
  border: ${(props) => `1px solid ${colors[props.bgColor] || colors.default}`};
`;
