import styled from "styled-components";

const bgColors = {
  primary: "var(--primary)",
  warning: "var(--warning)",
  default: "var(--default)",
  success: "var(--success)",
};

const size = {
  sm: "1",
  md: "1.5",
  lg: "2",
};

const StyledButton = styled.button`
  background-color: ${(props) => bgColors[props.bgColor] || bgColors.default};
  color: var(--text-lighter);
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
  border: ${(props) =>
    `1px solid ${bgColors[props.bgColor] || bgColors.default}`};
`;
