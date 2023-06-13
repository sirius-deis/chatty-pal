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

export default LabelWithCheckbox;
