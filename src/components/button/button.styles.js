import styled from "styled-components";

const bgColors = {
  primary: "#1C76E2",
  warning: "#E10D30",
  default: "#155EC2",
  success: "#12AC3F",
};

const size = {
  sm: "1",
  md: "2",
  lg: "3",
};

const StyledButton = styled.button`
  font-size: 2rem;
  background-color: ${(props) =>
    props.backgroundColor
      ? `var(--${props.backgroundColor})`
      : "var(--main-color)"};
  color: ${(props) =>
    props.color ? `var(--${props.color})` : "var(--text-color-lighter)"};
  border: none;
  cursor: pointer;
  &:hover {
    filter: brightness(110%);
  }
  font-size: ${(props) => `${size[props.size]}rem`};
  padding: ${(props) => `${size[props.size]}rem ${size[props.size] * 3}rem`};
`;

export const StyledPlainButton = styled(StyledButton)`
  padding: 1rem 8rem;
  border-radius: 5px;
`;

export const StyledRoundedButton = styled(StyledButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
`;
