import PropTypes from 'prop-types';
import { StyledCheckbox, StyledCheckMark, StyledLabelWithCheckbox } from './checkbox.styles';

const LabelWithCheckbox = ({ label }) => {
  return (
    <StyledLabelWithCheckbox>
      <StyledCheckbox type='checkbox' />
      <StyledCheckMark />
      {label}
    </StyledLabelWithCheckbox>
  );
};

LabelWithCheckbox.propTypes = {
  label: PropTypes.string,
};

export default LabelWithCheckbox;
