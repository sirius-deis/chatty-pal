import PropTypes from "prop-types";
import {
  StyledFilePicker,
  StyledInput,
  StyledIconWrapper,
} from "./filePicker.styles";

const FilePicker = ({ icon, size = 2, ...rest }) => {
  return (
    <StyledFilePicker>
      <StyledInput type="file" {...rest} data-testid="file" />
      <StyledIconWrapper size={size} data-testid="file-icon">
        {icon}
      </StyledIconWrapper>
    </StyledFilePicker>
  );
};

FilePicker.propTypes = {
  icon: PropTypes.node,
  size: PropTypes.number,
  onChange: PropTypes.func,
};

export default FilePicker;
