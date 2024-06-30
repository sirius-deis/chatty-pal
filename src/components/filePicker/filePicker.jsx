import PropTypes from "prop-types";
import {
  StyledFilePicker,
  StyledInput,
  StyledIconWrapper,
} from "./filePicker.styles";
import { useState } from "react";

const FilePicker = ({ icon, size = 2, onChange, singleFile, ...rest }) => {
  const [isError, setIsError] = useState(false);
  const onChangeHandler = (event) => {
    if (singleFile && event.target.files.length > 1) {
      setIsError(true);
      return;
    }
    onChange(event.target.files);
  };

  return (
    <StyledFilePicker className={isError ? "error" : ""}>
      <StyledInput
        type="file"
        {...rest}
        data-testid="file"
        onChange={onChangeHandler}
      />
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
  singleFile: PropTypes.bool,
};

export default FilePicker;
