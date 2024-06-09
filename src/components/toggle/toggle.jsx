import PropTypes from "prop-types";
import { StyledCheckbox, StyledSlider, StyledSwitch } from "./toggle.styles";

const Toggle = (props) => {
  return (
    <StyledSwitch>
      <StyledCheckbox type="checkbox" {...props} />
      <StyledSlider></StyledSlider>
    </StyledSwitch>
  );
};

Toggle.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Toggle;
