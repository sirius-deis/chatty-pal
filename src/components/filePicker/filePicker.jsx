import PropTypes from "prop-types";
import {
  StyledFilePicker,
  StyledInput,
  StyledIconWrapper,
} from "./filePicker.styles";

const FilePicker = ({ icon, size }) => {
  return (
    <StyledFilePicker>
      <StyledInput type="file" />
      <StyledIconWrapper size={size}>{icon}</StyledIconWrapper>
    </StyledFilePicker>
  );
};

FilePicker.propTypes = {
  icon: PropTypes.node,
  size: PropTypes.number,
};

export default FilePicker;
