import PropsTypes from "prop-types";
import styled from "styled-components";

const StyledPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding: ${(props) => props.padding}rem;
  box-shadow: var(--shadow);
  border-radius: 5px;
  background-color: var(--text-lighter);
  img {
    width: 15rem;
  }
`;

const Panel = ({ children, padding = 4 }) => {
  return <StyledPanel padding={padding}>{children}</StyledPanel>;
};

Panel.propTypes = {
  children: PropsTypes.node,
  padding: PropsTypes.number,
};

export default Panel;
