import PropsTypes from "prop-types";
import { StyledPanel } from "./panel.styles";

const Panel = ({ children, padding = 4 }) => {
  return <StyledPanel padding={padding}>{children}</StyledPanel>;
};

Panel.propTypes = {
  children: PropsTypes.node,
  padding: PropsTypes.number,
};

export default Panel;
