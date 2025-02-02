import PropTypes from 'prop-types';
import { StyledCheckbox, StyledCheckMark, StyledLabelWithCheckbox } from './checkbox.styles';

const LabelWithCheckbox = ({ label, isChecked, onChangeHandler }) => {
  return (
    <StyledLabelWithCheckbox>
      <StyledCheckbox type='checkbox' data-testid="checkbox" checked={isChecked} onChange={() => onChangeHandler(!isChecked)} />
      <StyledCheckMark />
      {label}
    </StyledLabelWithCheckbox>
  );
};

LabelWithCheckbox.propTypes = {
  label: PropTypes.string,
  isChecked: PropTypes.bool,
  onChangeHandler: PropTypes.func,
};

export default LabelWithCheckbox;
