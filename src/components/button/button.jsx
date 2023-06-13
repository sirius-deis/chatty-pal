import { StyledPlainButton, StyledRoundedButton } from './button.styles';

const Button = ({ children, backgroundColor, color, kind }) => {
  switch (kind) {
    case 'rounded':
      return (
        <StyledRoundedButton backgroundColor={backgroundColor} color={color}>
          {children}
        </StyledRoundedButton>
      );
    case 'plain':
    default:
      return (
        <StyledPlainButton backgroundColor={backgroundColor} color={color}>
          {children}
        </StyledPlainButton>
      );
  }
};

export default Button;
