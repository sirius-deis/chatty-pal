import PropTypes from "prop-types";
import { StyledMenu, StyledMenuItem } from "./burger.styles";

const Burger = ({ onClick }) => {
  return (
    <StyledMenu onClick={onClick}>
      <StyledMenuItem />
      <StyledMenuItem />
      <StyledMenuItem />
    </StyledMenu>
  );
};

Burger.propTypes = {
  onClick: PropTypes.func,
};

export default Burger;
